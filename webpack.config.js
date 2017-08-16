const webpack = require('webpack');
const path = require('path');
const isDev = process.env.NODE_ENV === 'development';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: '[name].[contenthash].css',
    disable: isDev
});
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

config = {
    context: __dirname,
    entry: {
        app: 'react-hot-loader/patch',
        bundle: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './build')
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015'],
                        plugins: [
                            'react-hot-loader/babel'
                        ]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: 'css-loader'
                    }, {
                        loader: 'sass-loader'
                    }],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css', {
            allChunks: true
        })
    ],
    devtool: (isDev ? 'source-map' : false),
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 9000
    }
};

if (!isDev) {
    config.plugins.push(new UglifyJSPlugin({
        compress: {
            warnings: false
        },
        exclude: /.\.min\.js$/i
    }));
}

module.exports = config;
