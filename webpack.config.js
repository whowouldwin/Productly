const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = (env, options)=> {
    const isProduction = options.mode === 'production';

    const config = {
        // ...
        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? false : 'source-map',
        watch: !isProduction,
        entry: ['./src/index.js','./src/sass/style.scss'],
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'script.js',
        },
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env']
                            ]
                        }
                    }
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader',
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,'css-loader','sass-loader'
                    ]
                },
                {
                    test: /\.(png|svg|jpg|jpe?g|gif)$/,
                    include: path.resolve(__dirname, '/images'),
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[hash].[ext]',
                                outputPath: 'images',

                            },
                        }
                    ]
                },



            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: 'index.html'
            }),
            new MiniCssExtractPlugin( {
                filename: 'style.css'
            }),

        ]
    }

    // if (isDevelopment) {
    //     // customize configuration for development environment
    // } else {
    //     // customize configuration for production environment
    // }

    return config;
};