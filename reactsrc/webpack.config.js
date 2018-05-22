var webpack = require('webpack');
var path = require('path');



module.exports = {
    entry: path.resolve(__dirname, 'src'),
    output: {
        path: __dirname + "/../public",
        filename: 'app.bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }, {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        }]
    }
  };