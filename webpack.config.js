const path = require("path");

module.exports = {
    mode: "production",
    entry: "./dist/index.js",
    output: {
        filename: "index.bundle.js",
        path: path.resolve(__dirname, "dist/bundle"),
    },
};
