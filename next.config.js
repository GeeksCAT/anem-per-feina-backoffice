const path = require('path');
const withSass = require('@zeit/next-sass');
require('dotenv').config();

module.exports = withSass({
  target: 'serverless',
  env: {},
  webpack(config) {
    config.resolve.alias.pages = path.join(__dirname, 'pages');
    config.resolve.alias.components = path.join(__dirname, 'components');
    config.resolve.alias.lib = path.join(__dirname, 'lib');
    return config;
  },
});
