const path = require('path');

module.exports = {
    entry:{
        index: ['regenerator-runtime/runtime', './src/index.js'],
        edit: ['regenerator-runtime/runtime', './src/edit.js'],
    },
    output:{
        path:path.resolve(__dirname, 'public/scripts'),
        filename: '[name]-main.js'
    },
    module:{
        rules:[{
            test:/\.js$/,
            exclude: /node_modules/,
            use:{
                loader:'babel-loader',
                options:{
                    presets:['@babel/preset-env']
                }
            }
        }]
    },
    devServer:{
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/scripts/',
        port: 4200,
        watchContentBase: true

    },
    devtool: "source-map"
}

// 'core-js/stable',      -in the entry array but removed it and error does not persist - lecture 140