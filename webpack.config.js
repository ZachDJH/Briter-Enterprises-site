const webpack = require('webpack');
const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
	},
	module: {
		rules: [
		  {
		  	test: /\.m?js$/,
		  	exclude: /(node_modules|bower_components)/,
		  	use: [
		  	  {
		  	  	loader: 'babel-loader',
		  	  	options: {
		  	  		presets: ['@babel/preset-env']
		  	  	}
		  	  }
		  	]

		  },
		  {
		  	test: /\.s[ac]ss$/i,
		  	use: [
  	             // Creates `style` nodes from JS strings
                'style-loader',
                // Translates CSS into CommonJS
                'css-loader',
                // Compiles Sass to CSS
                'sass-loader',
                'resolve-url-loader',
                
  	        ]
		  },
		  {
		  	test: /\.(ttf|eot|svg|gif|png|jpe?g)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  	        use: [{loader: 'file-loader'}]
		  }  
	    ]
	},

	plugins: [
	  new webpack.ProvidePlugin({
	  	$: 'jquery',
	  	jQuery: 'Jquery',
	  	'window.jQuery': 'jquery',
	  })
	],
};