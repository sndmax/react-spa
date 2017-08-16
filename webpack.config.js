var webpack = require('webpack');
var path = require('path');
var NODE_ENV = process.env.NODE_ENV === 'Development';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: '[name].[contenthash].css',
    disable: process.env.NODE_ENV === 'Development'
});
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    context: __dirname,
    entry: {
        app: 'react-hot-loader/patch',
        bundle: './src/index.js',
        styles: './src/index.scss'
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
    devtool: (NODE_ENV ? 'source-map' : false),
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 9000
    }
};

if (!NODE_ENV) {
    module.exports.plugins.push(new UglifyJSPlugin({
        compress: {
            warnings: false
        },
        exclude: /.\.min\.js$/i
    }));
}
