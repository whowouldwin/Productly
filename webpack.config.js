const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, options)=> {
    const isProduction = options.mode === 'production';

    const config = {
        // ...
        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? false : 'source-map',
        watch: !isProduction,
        entry: './src/index.js',
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'script.js'
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
                    test: /\.scss$/,
                    use: [
                        'style-loader','css-loader','sass-loader'
                    ]
                },
                {
                    test: /\.(png|svg|jpe?g|gif)$/i,
                    use : [
                        {
                            loader: 'file-loader',
                        }
                    ]

                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
        ]
    }

    // if (isDevelopment) {
    //     // customize configuration for development environment
    // } else {
    //     // customize configuration for production environment
    // }

    return config;
};