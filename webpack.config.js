const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('path');

/** @type {(env: any, argv: { mode: string }) => import('webpack').Configuration} */
module.exports = (_, { mode }) => {
    console.log('Webpack mode:', mode);

    const isDevelopment = mode === 'development';
    const plugins = [];

    if (isDevelopment) {
        plugins.push(new ReactRefreshWebpackPlugin());
    }

    return {
        entry: path.resolve(__dirname, 'source', 'main.tsx'),

        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'build'),
        },

        resolve: {
            extensions: ['.tsx', '.ts', '.jsx', '.js'],
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
            ],
        },

        plugins,
    };
};
