const path = require('path');

module.exports = {
  webpack: {
    alias: {
      "@*": path.resolve(__dirname, './src/*')
    },
    configure: (webpackConfig, { env, paths }) => {
      paths.appBuild = 'build';
      webpackConfig.output = {
        ...webpackConfig.output,
        publicPath: ''
      };
      return webpackConfig;
    },
  },
};