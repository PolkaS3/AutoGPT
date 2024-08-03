const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  webpack: (config) => {
    config.plugins = [
      ...config.plugins,
      new NodePolyfillPlugin(),
    ];
    return config;
  },
};

module.exports = {
  webpack: (config) => {
    config.plugins = [
      ...config.plugins,
      new NodePolyfillPlugin(),
    ];
    return config;
  },
};
