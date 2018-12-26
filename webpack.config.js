const path = require('path');
const wekpack = require('webpack');
const HtmlWekpackPlugin = require('html-webpack-plugin');

const pug = {
    test: /\.pug$/,
    use: ['html-loader?attrs=false', 'pug-html-loader']
}

const config = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [pug]
    },
    plugins: [
        new HtmlWekpackPlugin({
            filename: 'index.html',
            template: 'src/index.pug',
            inject: false
        }),
        new HtmlWekpackPlugin({
            filename: 'about.html',
            template: 'src/app/pages/about.pug',
            inject: false
        })
 
    ]
};

module.exports = config;