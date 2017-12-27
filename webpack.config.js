let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry : `${__dirname}/src/main.js`,
	output : {
		path : `${__dirname}/build`,
		filename : 'bundle.js'
	},
	module : {
		loaders : [
			{
				test : /\.js$/,
				loader:'babel-loader',
				query: {
					 presets : ['es2015']
				} 
			}
		]
	},
	devServer : {
		contentBase : `${__dirname}`,
		inline : true
	},
	// plugins : [
	// 	new HtmlWebpackPlugin({
	// 		template : path.join('${__dirname}', 'index.html')
	// 	})
	// ]
}