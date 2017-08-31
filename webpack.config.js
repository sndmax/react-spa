const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

config = {
    entry: {
        app: './src/index.js'
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        new ExtractTextPlugin('style.css')
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
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
                use: ExtractTextPlugin.extract({
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
    }
};

module.exports = config;
