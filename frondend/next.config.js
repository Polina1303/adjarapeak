// /** @type {import('next').NextConfig} */
// const path = require("path");

// const i18n = {
//   defaultLocale: "ka",
//   locales: ["ka", "en", "ru"],
// };

// const nextConfig = {
//   i18n,
//   reactStrictMode: true,
//   trailingSlash: true,
//   images: {
//     unoptimized: true,
//   },
//   compiler: {
//     removeConsole: process.env.NODE_ENV === "production",
//   },

//   turbopack: {},

//   webpack: (config, { isServer }) => {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       "@": path.join(__dirname, "src"),
//     };

//     config.module.rules.push({
//       test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
//       type: "asset/resource",
//       generator: {
//         filename: "static/media/[name].[hash][ext]",
//       },
//     });

//     config.module.rules.push({
//       test: /\.(jpe?g|png|gif|webp|svg|avif)$/i,
//       type: "asset/resource",
//       generator: {
//         filename: "static/media/[name].[hash][ext]",
//       },
//     });

//     return config;
//   },
// };

// module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const path = require("path");

const nextConfig = {
  i18n,
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.join(__dirname, "src"),
    };

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
};

module.exports = nextConfig;
