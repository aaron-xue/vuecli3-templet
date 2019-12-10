let basePath = '/'

switch (process.env.VUE_APP_TITLE) {
    //测试
    case 'alpha':
        // basePath = 'https://stage.shenzhoubb.com/'
        basePath = 'https://api.stage.shenzhoubb.com/'
        break;
    //生产
    case 'production':
        basePath = 'https://api.shenzhoubb.com/'
        break;

    default:
        basePath = 'https://api.stage.shenzhoubb.com/'
        break;
}

const combineGenerateOpTicket = `${basePath}server/opOrder/combineGenerateOpTicket`

export {
    basePath,
    combineGenerateOpTicket
}