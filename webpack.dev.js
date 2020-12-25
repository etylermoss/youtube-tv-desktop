/* eslint-disable @typescript-eslint/explicit-function-return-type */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = (env) => {
	return merge(common(env), {
		mode: 'development',
		optimization: {
			minimize: false
		}
	});
};
