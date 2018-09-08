const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/js/app.js'
    },
    output: {
        path: path.resolve(__dirname, '..' , 'build-dev'),
        filename: '[name].bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/public/index.html',
            inject: 'body'
        }),

        // new HtmlWebpackPlugin({
        //     template: './src/html/about.html',
        //     inject: 'body'
        // }),

        // new webpack.optimize.CommonsChunkPlugin({
        //     name: ['vendor']
        // }),

        new WebpackCleanupPlugin()
    ],

    devServer: {
        port: 3000,
        host: 'localhost',
         historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300
        }
    }
};