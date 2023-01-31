const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {VueLoaderPlugin} = require("vue-loader");
const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");

module.exports = {
    devServer: { historyApiFallback: true },
    mode: 'development',
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s(c|a)ss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        // Requires sass-loader@^7.0.0
                        options: {
                            implementation: require('sass'),
                            indentedSyntax: true // optional
                        },
                        // Requires >= sass-loader@^8.0.0
                        options: {
                            implementation: require('sass'),
                            sassOptions: {
                                indentedSyntax: true // optional
                            },
                        },
                    },
                ],
            },
            { test: /\.js$/, loader: 'babel-loader'},
            { test: /\.vue$/, loader: "vue-loader" }
        ]
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        },
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.template.html',
        }),
        new VueLoaderPlugin(),
        new VuetifyLoaderPlugin(),
    ]
}