const path = require('path');
const webpack = require('webpack');
const SpritesmithPlugin = require('webpack-spritesmith')
module.exports = {
    mode: 'none',
    entry: path.resolve(__dirname, '../app/index.js'), //指定入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录
    output: {
        path: path.resolve(__dirname, '../dist'), // 输出的路径
        filename: 'bundle.js'  // 打包后文件
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    // 不采用.babelrc的配置
                    "babelrc": false,
                    "presets": [
                        ["react"],
                        ["es2015", { "modules": false }]
                    ],
                    "plugins": [
                        "syntax-dynamic-import",  //动态import
                    ]
                }
            },{
                test: /\.[s]?css$/,
                loader: ['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
            },
        ]
    },
    plugins: [
        //雪碧图
        new SpritesmithPlugin({
            src: {
                cwd: path.resolve(__dirname, '../app/images/sprites'),
                glob: '*.png'
            },
            target: {
                image: path.resolve(__dirname, '../app/images/sprite.png'),
                css: path.resolve(__dirname, '../app/style/sprite.css'),
            },
            apiOptions: {
            cssImageRef: '../images/sprite.png',
            },
            spritesmithOptions: {
                algorithm: 'binary-tree',
                padding:15,
            }
        }),
    ]
}