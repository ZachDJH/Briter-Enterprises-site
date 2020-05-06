const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
	},
	plugins: [
	  new webpack.ProvidePlugin({
	  	$: 'jqeury',
	  	jQuery: 'JQuery',
	  	'window.jQeury': 'jqeury'
	  }),
	],
};