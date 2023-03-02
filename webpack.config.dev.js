const { merge } = require("webpack-merge");
const common = require("./webpack.config");

const HtmlWebpackPlugin = require("html-webpack-plugin")

const path = require("path");

module.exports = merge(common, {
    mode: "development",

    output: {
        filename: "[name].js",
        path: path.join(__dirname, "/dist"),
        clean: true
    },

    devServer: {
        open: true,
        liveReload: true,
        port: 3000
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        })
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
});