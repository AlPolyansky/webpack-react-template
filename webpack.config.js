const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname,'./src','index.js')
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "public"),
        //library: 'webpack-module' // - Добавляет глобальную перменную в bundle
    },
    devtool: 'source-map',
    // Лоадеры
    module: {
        loaders: [
            { 
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            }
        ]
    },
    // Настройки сервера
    devServer: {
        hot: true,
        inline: true,
        contentBase: path.join(__dirname, "public"),
        clientLogLevel: "none"
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};