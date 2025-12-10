/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  outputFileTracingRoot: path.join(__dirname),

  turbopack: {},
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      type: "asset/resource",
      generator: {
        filename: "static/media/[name].[hash][ext]",
      },
    });
    config.module.rules.push({
      test: /\.(jpe?g|png|gif|webp|svg)$/i,
      type: "asset/resource",
      generator: {
        filename: "static/media/[name].[hash][ext]",
      },
    });

    return config;
  },
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: false,
  },
  reactStrictMode: true,
  compiler: {
    removeConsole: false,
  },
};

module.exports = nextConfig;
