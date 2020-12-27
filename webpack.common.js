const webpack = require('webpack');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = (env) => {
	return {
		entry: {
			index: './src/index.ts',
			preload: './src/preload.ts',
		},
		output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].js',
		},
		target: ['electron-main', 'electron-preload'],
		node:  false,
		module: {
			rules: [
				{
					test: /\.ts$|\.js$/,
					use: ['ts-loader'],
					exclude: /node_modules/,
				},
			],
		},
		plugins: [
			new webpack.DefinePlugin({
				PROD: env && env.production ? env.production : false,
            }),
            new ESLintPlugin({
                files: 'src/**/*.ts',
            }),
		],
	};
};
