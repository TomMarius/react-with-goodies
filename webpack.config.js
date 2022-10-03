const path = require('path');

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

/** @type {(env: any, argv: { mode: string }) => import('webpack').Configuration} */
module.exports = (_, { mode }) => {
    console.log('Webpack mode:', mode);

    const isDevelopment = mode === 'development';

    const plugins = [
        new MiniCSSExtractPlugin({
            filename: 'style.css',
            chunkFilename: 'style.css',
        }),
    ];

    if (isDevelopment) {
        plugins.push(new ReactRefreshWebpackPlugin());
    }

    return {
        plugins,

        entry: path.resolve(__dirname, 'source', 'main.tsx'),

        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'build'),
        },

        resolve: {
            extensions: ['.tsx', '.ts', '.jsx', '.js', '.css'],
        },

        module: {
            rules: [
                {
                    test: /\.[jt]sx?$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'swc-loader',
                            options: {
                                jsc: {
                                    target: 'es2022',
                                    parser: {
                                        syntax: 'typescript',
                                        dynamicImport: true,
                                    },
                                    transform: {
                                        react: {
                                            runtime: 'automatic',
                                            refresh: isDevelopment,
                                        },
                                    },
                                },
                            },
                        },
                    ],
                },
                {
                    test: /\.css$/i,
                    use: [
                        MiniCSSExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                    ],
                },
            ],
        },
    };
};
