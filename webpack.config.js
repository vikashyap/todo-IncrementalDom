/**
 * Created by pgotthardt on 14/01/16.
 */
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude:/node_modules/,
                loader:"babel-loader"
            },
            {
                test: /\.css$/,
                use:['css-hot-loader'].concat(ExtractTextWebpackPlugin.extract({
                    use:['css-loader'],
                    fallback:'style-loader'
                }))
            }
        ]
    },
    plugins:[
        new ExtractTextWebpackPlugin('./main.css'),
        new HtmlWebpackPlugin({
            title:'Todo App'
        })
    ],
    devServer:{
        contentBase:path.resolve(__dirname, './dist'),
        historyApiFallback: true,
        inline: true,
        open: true
    },
    devtool: 'eval-source-map',
};
