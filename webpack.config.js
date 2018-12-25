const path = require('path');

module.exports = {
    mode: 'production',
    entry: './source/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'build')
    }
    
};