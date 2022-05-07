const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: path.resolve(__dirname, './src/client/index.js'),
    
    devtool: 'inline-source-map',

    devServer: {
        port: 3000,
        historyApiFallback: true,
        open: true,
        // hot: true,
        proxy: {
            '/api': 'http://localhost:5000'
        }
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'build.js'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // {
            //   test: /\.(scss)$/,
            //   use: [{
            //     loader: 'style-loader', // inject CSS to page
            //   }, {
            //     loader: 'css-loader', // translates CSS into CommonJS modules
            //   }, {
            //     loader: 'postcss-loader', // Run post css actions
            //     options: {
            //       plugins: function () { // post css plugins, can be exported to postcss.config.js
            //         return [
            //           require('precss'),
            //           require('autoprefixer')
            //         ];
            //       }
            //     }
            //   }, {
            //     loader: 'sass-loader' // compiles Sass to CSS
            //   }]
            // }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            // inject: true,
            template: './public/index.html'
        })
    ]
}