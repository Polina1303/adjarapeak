/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const path = require("path");

const nextConfig = {
  i18n,
  reactStrictMode: true,
  trailingSlash: true,

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  transpilePackages: [
    "antd",
    "@ant-design/icons",
    "@ant-design/icons-svg",
    "rc-util",
    "rc-picker",
    "rc-table",
    "rc-field-form",
  ],

  modularizeImports: {
    "@ant-design/icons": {
      transform: "@ant-design/icons/{{member}}",
      preventFullImport: true,
    },
    antd: {
      transform: "antd/lib/{{kebabCase member}}",
      preventFullImport: true,
    },
  },

  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/static/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  webpack: (config, { isServer, dev }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.join(__dirname, "src"),
    };

    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,

        "@ant-design/icons$": "@ant-design/icons/lib/icons",
        "@ant-design/icons-svg$": "@ant-design/icons-svg/lib/asn",
        "rc-util$": "rc-util/lib",
        "rc-util/es": "rc-util/lib",
      },

      extensions: [...config.resolve.extensions, ".mjs"],

      mainFields: ["browser", "module", "main"],
    };

    config.module.rules.push({
      test: /\.m?js$/,
      resolve: {
        fullySpecified: false,
      },
      include: [
        /node_modules[\\/]@ant-design/,
        /node_modules[\\/]rc-util/,
        /node_modules[\\/]antd/,
      ],
    });

    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      type: "asset/resource",
      generator: {
        filename: "static/media/[name].[hash][ext]",
      },
    });

    config.ignoreWarnings = [
      ...(config.ignoreWarnings || []),
      { module: /node_modules\/@ant-design/ },
      { module: /node_modules\/rc-util/ },
      { module: /node_modules\/antd/ },
    ];

    return config;
  },

  // webpack(config) {
  //   if (process.env.ANALYZE) {
  //     const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
  //     config.plugins.push(new BundleAnalyzerPlugin());
  //   }
  //   return config;
  // },

  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    esmExternals: "loose",

    // workerThreads: false,
    // cpus: 1,
  },
};

module.exports = nextConfig;
