const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'source', 'main.tsx'),

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'swc-loader',
                exclude: /node_modules/,
            },
        ],
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};
