module.exports = {
    presets: ["@babel/preset-env"],
    ignore: ["./tests/test.js"],
    plugins: [
        "minify-constant-folding",
        "minify-dead-code-elimination",
        "transform-merge-sibling-variables",
        "transform-minify-booleans",
        [
            "@babel/plugin-transform-runtime", {
                regenerator: true,
            }
        ],
    ],
    shouldPrintComment: (val) => /license|License|@preserve|@copyright/.test(val)
}
