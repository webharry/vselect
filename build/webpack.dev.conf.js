const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const base = require('./webpack.base.conf.js');
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = merge(base, {
    entry: './example/index.js',
    mode:'development',
    devtool: 'inline-source-map',
    devServer: { //搭建开发环境
        // contentBase: path.join(__dirname, "./")//告知服务器服务起在根目录下
        hot: true,
        host: 'localhost',
        port: 9090,
        open: true
    },
    plugins:[
        new HtmlWebpackPlugin({//在打包后的文件夹里生成html模板
            filename: 'index.html',
            template: 'example/index.html',
            inject: true
        }),
        new webpack.HotModuleReplacementPlugin(),//模块热替换
        // new BrowserSyncPlugin({
        //     host: 'localhost',
        //     port: 3000,
        //     files: '',
        //     server: {
        //         //指定服务器启动根目录
        //         baseDir: './'
        //     }
        // })
    ]
});