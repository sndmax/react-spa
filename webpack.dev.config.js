const webpack = require('webpack');
const baseConfig = require('./webpack.config.js');

baseConfig.output.publicPath = '/';

baseConfig.devtool = 'inline-source-map';

baseConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

module.exports = baseConfig;
