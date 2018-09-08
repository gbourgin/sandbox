var path = require("path");

module.exports = {
    entry: "./src/main",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [{
            test: /\.(tsx?)|(js)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"]
                }
            }
        }]
    }
}