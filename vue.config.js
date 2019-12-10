let glob = require('glob')

//配置pages多页面获取当前文件夹下的html和js
function getEntry(globPath) {
    let entries = {}, tmp;

    // 读取src/pages/**/底下所有的html文件
    glob.sync('./src/pages' + globPath + '/**/*.html').forEach(function (entry) {
        tmp = entry.split('/').splice(-3);
        entries[tmp[1]] = {
            entry: entry.replace('html', 'js'),
            template: entry,
            filename: tmp[1] + '.html',   //  以文件夹名称.html作为访问地址
            chunks: ["chunk-vendors", "chunk-common", tmp[1]]
        };
    })
    return entries;
}
let htmls;
process.argv.splice(0, 5)           //取掉前两个参数
if (process.argv.length) {
    for (let i = 0; i < process.argv.length; i++) {
        const element = process.argv[i];
        htmls = {
            ...htmls,
            ...getEntry('/' + element)
        }
    }
} else {
    // 若无传入页面参数，则全块打包
    htmls = getEntry('')
}


module.exports = {
    productionSourceMap: false,     //打包去掉sourceMap
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/',
    pages: htmls,
    devServer: {
        proxy: {
            '/': {
                target: 'https://api.stage.shenzhoubb.com',
                ws: false,
                changeOrigin: true
            }
        },
        open: true,
        index: 'page1.html'
    }
}