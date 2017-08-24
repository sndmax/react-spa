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
        alias: {
            actions: path.resolve(__dirname, 'src/actions'),
            api: path.resolve(__dirname, 'src/api'),
            containers: path.resolve(__dirname, 'src/components/containers'),
            layouts: path.resolve(__dirname, 'src/components/layouts'),
            views: path.resolve(__dirname, 'src/components/views'),
            reducers: path.resolve(__dirname, 'src/reducers'),
            variables: path.resolve(__dirname, 'src/utility/_variables.scss'),
            mixins: path.resolve(__dirname, 'src/utility/_mixins.scss')
        },
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
                        presets: ['react', 'es2015', "stage-1"],
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
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    }, {
                        loader: 'sass-loader'
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            plugins: (loader) => [
                                require('autoprefixer')()
                            ]
                        }
                    }],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'url-loader?limit=10000',
                    'img-loader'
                ]
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
