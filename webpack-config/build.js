/*
 * @Author: tackchen
 * @Date: 2022-07-25 09:06:53
 * @Description: Coding something
 */
const path = require('path');

module.exports = () => {
    return {
        mode: 'production',
        entry: path.resolve('./', 'src/index.ts'),
        output: {
            path: path.resolve('./', 'dist'),
            filename: 'ts-demo.min.js',
            library: 'tsDemo',
            libraryTarget: 'umd',
            libraryExport: 'default',
        },
        devtool: 'none',
        resolve: {
            extensions: [ '.tsx', '.ts', '.js' ]
        },
        externals: {},
        module: {
            rules: [{
                test: /(.ts)$/,
                use: {
                    loader: 'ts-loader'
                }
            }, {
                test: /(.js)$/,
                use: [{
                    loader: 'babel-loader',
                }]
            }, {
                test: /(.js)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                exclude: /node_modules/,
                options: {
                    configFile: './.eslintrc.js'
                }
            }]
        }
    };
};