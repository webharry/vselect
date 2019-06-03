const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    output: {//打包出口文件
        path: path.resolve(__dirname, "../dist"),//绝对路径
        filename: "[name].js",
    },
    resolve: {
        extensions: ['*', '.js', '.vue'],//解析扩展，使用户在import时不用加文件后缀名
        alias: { //别名，解析文件时已别名加载
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {//根据规则处理各种不同的模块
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                use: [{
                  loader: 'style-loader' // creates style nodes from JS strings
                }, {
                  loader: 'css-loader' // translates CSS into CommonJS
                }, {
                  loader: 'less-loader' // compiles Less to CSS
                }]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
}