const path = require('path');

module.exports = {
    entry:['regenerator-runtime/runtime','./src/index.js'],
    output:{
        path:path.resolve(__dirname, 'public/scripts'),
        filename: 'main.js'
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
        port: 4200
    },
    devtool: "source-map"
}
// 'core-js/stable',      -in the entry array but removed it and error does not persist - lecture 140