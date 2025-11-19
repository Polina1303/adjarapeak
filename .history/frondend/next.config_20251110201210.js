/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  // Указываем корень проекта, чтобы убрать warning о lockfile
  outputFileTracingRoot: path.join(__dirname),

  // Turbopack конфигурация (оставляем, чтобы не ругался)
  turbopack: {},

  // Webpack конфигурация для поддержки медиафайлов
  webpack: (config, { isServer }) => {
    // Поддержка видео и аудио
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      type: "asset/resource",
      generator: {
        filename: "static/media/[name].[hash][ext]",
      },
    });

    // Поддержка изображений (включая JPG с заглавными буквами)
    config.module.rules.push({
      test: /\.(jpe?g|png|gif|webp|svg)$/i,
      type: "asset/resource",
      generator: {
        filename: "static/media/[name].[hash][ext]",
      },
    });

    return config;
  },

  // Настройки для next/image
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: false,
  },
};

module.exports = nextConfig;
