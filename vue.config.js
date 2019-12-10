module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
    devServer: {
        proxy: {
            '/': {
                target: 'https://api.stage.shenzhoubb.com',
                ws: false,
                changeOrigin: true
            }
        }
    }
}