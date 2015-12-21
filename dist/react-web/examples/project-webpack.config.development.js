// AUTOGENERATED BY @mikechau/js-config-gen.
// Mon Dec 21 2015 04:05:11 GMT-0600 (CST)

'use strict';

var _ = require('lodash');
var path = require('path');
var webpack = require('webpack');
var baseWebpackConfig = require('./node_modules/@mikechau/js-config-gen/dist/react-web/base-webpack.config.development');

var config = _.merge({}, baseWebpackConfig, {
  module: {
    loaders: baseWebpackConfig.module.loaders.concat([
      {
        "test": /\.css$/,
        "loader": "style!css"
      },
      {
        "test": /\.less$/,
        "loader": "style!css!less"
      },
      {
        "test": /\.scss$/,
        "loader": "style!css!scss"
      },
    ])
  },

  eslint: {
    configFile: path.resolve(__dirname, '.eslintrc.dev')
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
});

module.exports = config;
