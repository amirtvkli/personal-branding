const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

let pathsToClean = [
    'public'
];

let patterns = [
    { from: 'src/assets',  to: 'assets'    }
];

const pug = {
    test: /\.pug$/,
    use: ['html-loader?attrs=false', 'pug-html-loader']
};

const ts = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
};

const config = {
    name: 'hello',
    entry: {
        main: './src/app.js',
        print: './src/print.js'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './public'
    },
    module: {
        rules: [pug, ts]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
              assets: path.resolve(__dirname,'assets')
        },
        modules: ['assets','node_modules']
    },
    plugins: [
        new CleanWebpackPlugin(pathsToClean),
        new CopyWebpackPlugin([ ...patterns ]),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.pug',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: 'src/app/pages/about.pug',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            template: 'src/app/pages/contact.pug',
            inject: false
        })
        
    ]
};

module.exports = config;