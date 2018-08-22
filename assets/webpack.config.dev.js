const webpack = require('webpack');
const merge = require('webpack-merge');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

const webpackCommonConfig = require('./webpack.config.common');

module.exports = merge(webpackCommonConfig, {
	output: {
		publicPath: '../priv/static',
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.EnvironmentPlugin({ NODE_ENV: 'development' }),
		new WebpackCleanupPlugin({
			exclude: ["../priv/static/*.hot-update.js",],
		})
	],
	devtool: "source-map",
	devServer: {
		hot: true,
	},
	watch: true,
	watchOptions: {
		aggregateTimeout: 3000,
		poll: 10000,
		ignored: /node_modules/
	},
});
