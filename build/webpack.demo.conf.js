const webpack = require("webpack")
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge');
const base = require('./webpack.base.conf.js');

module.exports = merge(base, {
    entry: './example/index.js',
    output: {
        path: path.resolve(__dirname, "../gh-pages"),
        filename: '[name].[hash].js',
    },
    mode: 'production',
    plugins:[
        new HtmlWebpackPlugin({//在打包后的文件夹里生成html模板
            filename: 'index.html',
            template: 'example/index.html',
            inject: true
        }),
        new webpack.HotModuleReplacementPlugin(),//模块热替换
    ]
});