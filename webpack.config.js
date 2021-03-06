/* eslint-disable */
const path = require("path"),
    fs = require("fs"),
    configs = []

const src = fs.readdirSync(path.resolve(__dirname, "lib")),
    babelconfig = {
        test: /\.js$/ui,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env", "minify"],
                plugins: [
                    [
                        "@babel/plugin-transform-runtime", {
                            regenerator: true,
                        },
                    ]
                ],
                sourceType: "unambiguous",
                minified: true,
                shouldPrintComment: (val) => /license|License|@preserve|@copyright/.test(val)
            },
        },
    }

for (const dir of src) {
    if (dir[0] !== "_" && !dir.includes(".") && dir !== "templates") {
        configs.push({
            entry: `./lib/${dir}/index.js`,
            output: {
                path: path.resolve(__dirname, "js"),
                filename: `${dir}.js`,
                library: dir,
                libraryTarget: "umd",
            },
            resolve: {
                mainFields: ["main"],
            },
            mode: "production",
            module: process.argv.includes("--mode") && process.argv.includes("none")
                ? {}
                : {rules: [babelconfig]},
        })
    }
}

module.exports = configs
