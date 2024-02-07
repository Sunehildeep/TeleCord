const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname);
    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.join(__dirname, 'public', 'locales'),
            to: path.join(__dirname, 'static', 'locales'),
          },
        ],
      })
    )
    return config;
  },
};