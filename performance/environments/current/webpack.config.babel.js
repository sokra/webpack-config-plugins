const ImagesConfigWebpackPlugin = require('image-config-webpack-plugin');
const JsConfigWebpackPlugin = require('js-config-webpack-plugin');

module.exports = {
	context: __dirname,
	resolve: {
		cache: false,
		unsafeCache: true
	},
	resolveLoader: {
		cache: false,
		unsafeCache: true
	},
	plugins: [
		// File loader configuration for .gif .jpg .jpeg .png and .svg files
		// see https://github.com/namics/webpack-config-plugins/tree/master/packages/image-config-webpack-plugin/config
		new ImagesConfigWebpackPlugin(),
		// Multi threading babel loader configuration with caching for .js and .jsx files
		// see https://github.com/namics/webpack-config-plugins/tree/master/packages/js-config-webpack-plugin/config
		new JsConfigWebpackPlugin(),
	],
};
