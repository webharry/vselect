const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.conf')

module.exports = merge(webpackBaseConfig, {
    entry: './src/components/vselect/vselect.vue',
    mode:'production',
    output: {
        filename:'vselect.js',
        libraryTarget:'commonjs2'//导出库的类型遵循commonJS
    }
})