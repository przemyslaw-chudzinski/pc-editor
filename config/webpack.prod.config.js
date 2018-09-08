const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: {
        vendor: './src/js/vendor.js',
        app: './src/js/app.js'
    },
    output: {
        path: path.resolve(__dirname, '..' , 'build-prod'),
        filename: '[name].bundle.min.js'
    },

    module: {
        rules: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                },
                exclude: /node_moules/
            },
            // {
            //     test: /\.scss$/,
            //     use: ExtractTextPlugin.extract('style', 'css!sass')
            // }
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/html/index.html',
            inject: 'body'
        }),

        new WebpackCleanupPlugin(),

        // new ExtractTextPlugin('[name].min.css')

        new MiniCssExtractPlugin({
            filename: "main.css",
        })
    ]
};