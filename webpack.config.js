const path = require('path');
const webpack = require('webpack');
// const nodeExternals = require('webpack-node-externals');


module.exports = {
    mode: 'development',
    entry: [
        './server.js',
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/'
    },
    devtool: 'eval-source-map',
    cache: true,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-es2015"],
                        // plugins: [require('@babel/plugin-proposal-class-properties')]
                    }
                }
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 25000
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]'
                }
            }
        ],
    },
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.js', '.jsx']
    },
    node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
};
