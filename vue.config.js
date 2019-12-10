let glob = require('glob')

//配置pages多页面获取当前文件夹下的html和js
function getEntry(globPath) {
    let entries = {}, tmp, htmls = {};

    // 读取src/pages/**/底下所有的html文件
    glob.sync(globPath+'html').forEach(function(entry) {
        tmp = entry.split('/').splice(-3);
        console.log(entry.replace('html','js'))
        entries[tmp[1]] = {
            entry:entry.replace('html','js'),
            template: entry,
            filename:tmp[1] + '.html',   //  以文件夹名称.html作为访问地址
            chunks: ["chunk-vendors", "chunk-common", tmp[1]]
        };
    })
    return entries;
}
let htmls = getEntry('./src/pages/**/*.');

module.exports = {
    productionSourceMap: false,     //打包去掉sourceMap
    publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
    pages:htmls,
    devServer: {
        proxy: {
            '/': {
                target: 'https://api.stage.shenzhoubb.com',
                ws: false,
                changeOrigin: true
            }
        },
        open:true,
        index: 'page1.html'
    }
}