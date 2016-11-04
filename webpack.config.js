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
				loader:'babel',
				query: {
					 presets : ['es2015']
				} 
			}
		]
	}
}