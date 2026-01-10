/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const path = require("path");

const nextConfig = {
  i18n,
  outputFileTracingRoot: path.join(__dirname),

  turbopack: {
    resolveAlias: {
      "@": path.join(__dirname, "src"),
    },
  },
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      type: "asset/resource",
      generator: {
        filename: "static/media/[name].[hash][ext]",
      },
    });
    config.module.rules.push({
      test: /\.(jpe?g|png|gif|webp|svg|avif)$/i,
      type: "asset/resource",
      generator: {
        filename: "static/media/[name].[hash][ext]",
      },
    });

    return config;
  },
  reactStrictMode: true,
  compiler: {
    removeConsole: false,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
