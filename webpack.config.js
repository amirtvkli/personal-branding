const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let extractHtml = new ExtractTextPlugin('[name].html');

// Files
const utils = require('./utils');   
const plugins = require('./postcss.config.js');


let pathsToClean = [
    'public'
];

let patterns = [
    { from: './manifest.json', to: 'manifest.json' },
    { from: './browserconfig.xml', to: 'browserconfig.xml' },
    // { from: 'assets/images/favicon/android-chrome-192x192.png', to: 'assets/images/android-chrome-192x192.png' },
    // { from: 'assets/images/favicon/android-chrome-256x256.png', to: 'assets/images/android-chrome-256x256.png' },
    // { from: 'assets/images/favicon/mstile-150x150.png', to: 'assets/images/mstile-150x150.png' }
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

const css = {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({ fallback: 'style-loader' , use: 'css-loader' })
}

const scss = {
    test: /\.scss$/,
    use: [
        "style-loader", // creates style nodes from JS strings
        "css-loader", // translates CSS into CommonJS
        "sass-loader" // compiles Sass to CSS, using Node Sass by default
    ]
}

const img = {
    test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
    loader: 'url-loader', 
    options: {
        limit: 10000,
        name: 'assets/fonts/[name].[hash:7].[ext]'
    }
};

const font = {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    loader: 'url-loader', 
    options: {
        limit: 10000,
        name: 'assets/fonts/[name].[hash:7].[ext]'
    }
};

const video = {
    test: /\.(mp4)(\?.*)?$/,
    loader: 'url-loader', 
    options: {
        limit: 10000,
        name: 'assets/fonts/[name].[hash:7].[ext]'
    }
};

module.exports = env => {
    return {
        //context: path.resolve(__dirname, 'src'),
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
            rules: [pug, ts, css, scss, img, font, video]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            alias: {
                source: path.resolve(__dirname, './src'),
                assets: path.resolve(__dirname,'./src/assets'),
                images: path.resolve(__dirname,'./src/assets/images'),
            },
            modules: ['assets','node_modules']
        },
        plugins: [
            new ExtractTextPlugin({
                filename:"assets/css/[name].bundle.css",
                allChunks: true
            }),
            new WebpackNotifierPlugin({
                title: 'Medal'
            }),
            new CleanWebpackPlugin(pathsToClean),
            new CopyWebpackPlugin([ ...patterns ]),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.$': 'jquery',
                'window.jquery': 'jquery',
            }), 
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: 'src/views/index.pug',
                inject: false
            }),
            
            // pages
            ...utils.pages(env),
            
        ]
    };
    
};