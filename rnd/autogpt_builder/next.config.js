
module.exports = {
  webpack: (config) => {
    config.plugins = [
      ...config.plugins,
      new NodePolyfillPlugin(),
    ];
    return config;
  },
};
