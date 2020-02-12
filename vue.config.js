// let glob = require('glob')

// //配置pages多页面获取当前文件夹下的html和js
// function getEntry(globPath) {
//     let entries = {}, tmp;

//     // 读取src/pages/**/底下所有的html文件
//     glob.sync('./src/pages' + globPath + '/**/*.html').forEach(function (entry) {
//         tmp = entry.split('/').splice(-3);
//         entries[tmp[1]] = {
//             entry: entry.replace('html', 'js'),
//             template: entry,
//             filename: tmp[1] + '.html',   //  以文件夹名称.html作为访问地址
//             chunks: ["chunk-vendors", "chunk-common", tmp[1]]
//         };
//     })
//     return entries;
// }
// let htmls;
// process.argv.splice(0, 5)           //取掉前两个参数
// if (process.argv.length) {
//     for (let i = 0; i < process.argv.length; i++) {
//         const element = process.argv[i];
//         htmls = {
//             ...htmls,
//             ...getEntry('/' + element)
//         }
//     }
// } else {
//     // 若无传入页面参数，则全块打包
//     htmls = getEntry('')
// }

module.exports = {
    productionSourceMap: false,     //打包去掉sourceMap
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/',
    // pages: htmls,
    devServer: {
        proxy: {
            '/': {
                historyApiFallback: true,
                target: 'https://api.stage.shenzhoubb.com',
                ws: false,
                changeOrigin: true
            }
        },
        open: true,
        // index: 'page1.html'
    },
    chainWebpack: (config) => {
        let imgPath = './'
        switch (process.env.VUE_APP_TITLE) {
            //测试
            case 'alpha':
                imgPath = 'https://stage.shenzhoubb.com/images/app'
                break;
            //生产
            case 'production':
                imgPath = 'https://static.shenzhoubb.com/images/app'
                break;

            default:
                imgPath = './img'
                break;
        }
        let urlLoaderOpt = {
            publicPath: imgPath,
            limit: 10,
            name(file) {
                file = file.replace(/\\/g,'/')
                let reg = new RegExp('images/' + '(.*)')
                return file.match(reg)[1]
            }
        }
        if (process.env.NODE_ENV === 'development') {
            urlLoaderOpt.outputPath = 'img'
        }
        config
            .module
            .rule("images")
            .test(/\.(jpg|png|gif)$/)
            .use("url-loader")
            .loader("url-loader")
            .options(urlLoaderOpt)
            .end();
    }
}