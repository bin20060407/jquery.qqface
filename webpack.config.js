var path = require('path');
var webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// 提取css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: getEntry(),
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: { name: '[name].[hash:7].[ext]', publicPath: '' }
                }
            }
        ]
    },
    output: {
        path: path.join(__dirname, 'dist/'), // 文件输出目录,
        publicPath: '',
        filename: '[name].js'
    },
    optimization: {
        minimizer: [new UglifyJsPlugin({}), new OptimizeCSSAssetsPlugin({})]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
};

function getEntry() {
    return {
        'jquery.qqface': path.join(__dirname, 'src/jquery.qqface.js')
    };
}
