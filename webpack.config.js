const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = {
    src: 'src',
    build: 'public'
};


module.exports = {
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname,`./${config.src}`,'index.js')
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, `${config.build}`),
        //library: 'webpack-module' // - Добавляет глобальную перменную в bundle
    },
    devtool: '#sourcemap',
    // Лоадеры
    module: {
        loaders: [
            { 
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loaders: ['babel-loader']
            },
            {
                test: /\.(html)$/,
                use: ['html-loader']
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            publicPath: 'img/'
                        }
                    }
                ]
            }
        ]
    },
    // Настройки сервера
    devServer: {
        hot: true,
        inline: true,
        contentBase: path.join(__dirname, config.build),
        clientLogLevel: "none",
        watchOptions: {
            ignored: path.resolve(__dirname, `${config.src}/template`),
        }
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            //title: 'Webpack app'
            template: path.join(__dirname, `${config.src}/template`, 'index.html')
        })
    ]
};