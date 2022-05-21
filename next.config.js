const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  i18n,
  images: {
    domains: ["mycroft.ai", "lafia-inc.github.io", "miro.medium.com"],
  },
};
