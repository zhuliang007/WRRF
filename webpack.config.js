var WebPack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: "./src/components/entry.js",
    output: {
        path: __dirname,
        filename: "build/bundle.js"
    },
    devtool: "source-map",
    module: {
        loaders: [
            {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              loader: "babel",
              query: {
                presets: ["es2015"]
              }
            },
            { test:/\.json$/,loader:"json"},
            { test: /\.css$/, loader: "style!css" },
            { test: /\.less$/,
                loader: ExtractTextPlugin.extract(
                    "css?sourceMap!" + "less?sourceMap"
                )
            },
            {
              test: /\.scss$/,
                loaders: ["style", "css?sourceMap", "sass?sourceMap"]
            },
            { test: /\.(jpg|png)$/, loader: "url?limit=8192"},
            {
              test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file'
            },
            { test: /\.html$/,loader: 'raw'}
        ]
    },
    resolve:{
      alias: {
        js: path.join(__dirname, "./src/components"),
        css: path.join(__dirname,"./src/css"),
        img: path.join(__dirname,"./src/img"),
      }
    },
    plugins: [
        new ExtractTextPlugin("build/styles.css")
    ]
};
