var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        'dist/linked-list': './src/linked-list.ts',
        'example/dist/script': './example/src/index.ts'
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './example/src/index.html',
            filename: './example/dist/index.html'
        })
    ],
    watch: true
};
