/* eslint-disable */
const path = require("path"),
    fs = require("fs"),
    configs = []

const src = fs.readdirSync(path.resolve(__dirname, "lib"),)

for (const dir of src) { 
    if (dir[0] !== "_" && !dir.includes(".")) {
        configs.push({
            entry: `./lib/${dir}/index.js`,
            output: {
                path: path.resolve(__dirname, "js_new"),
                filename: `${dir}.js`,
                library: dir,
                libraryTarget: "umd",
            },
            resolve: {
                mainFields: ["main"],
            },
            mode: "production",
        })
    }
}

module.exports = configs
