const path = require('path');

module.exports = {

    mode: "development",

    entry: './src/app.js',

    output: {
        path: path.join(__dirname, '..', 'build'),
        filename: "app.bundle.js"
    }

};