const path = require('path');
module.exports = {
	entry: './src/index.js',
	//output needs to be and object
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	//need to put in loaders
	module: {
		loaders: [
		  {
		  	test: /\.js$/,
		  	exclude: /node_modules/,
		  	loader: 'babel-loader',
		  	//transpile code to es2015 and react
		  	query: {
		  		presets: ['es2015', 'react']
		  	}
		  }
		]
	}
};