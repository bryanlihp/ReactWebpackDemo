const path = require('path');

const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

const config_index = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        htmlPlugin
    ]
}

const config_demo1 = {
    entry: {
        demo1: path.resolve(__dirname, 'src/demo1/demo1.js'),
        index: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.join(__dirname, '/stage'),
        filename: "./js/[name]-bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            inject: true,
            chunks: ['demo1'],
            template: "./src/demo1/demo1.html",
            filename: "demo1.html"
        })
        ,
        new HtmlWebPackPlugin({
            inject: true,
            chunks:['index'],
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
}

module.exports = config_demo1;