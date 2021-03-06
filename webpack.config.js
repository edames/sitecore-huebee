const path = require('path');
const jsPath = path.resolve('./js');
const webpack = require('webpack');

module.exports = {
    context: path.join(__dirname),
    entry: {
        'picker': ['./src/js/picker.js'],
    },
    output: {
        path: path.join(__dirname, './dist/sitecore modules/shell/SitecoreHuebee'),
        filename: "[name].js",
        library: 'SitecoreHuebee'
    },
    resolve: {
        modules: [jsPath, 'node_modules']
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader'
                }],
            },            
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};