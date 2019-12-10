let basePath = '/'

switch (process.env.NODE_ENV) {
    //测试
    case 'development':
        // basePath = 'https://stage.shenzhoubb.com/'
        basePath = 'https://api.stage.shenzhoubb.com/'
        break;
    //生产
    case 'production':
        basePath = 'https://api.shenzhoubb.com/'
        break;

    default:
        break;
}

const combineGenerateOpTicket = `${basePath}server/opOrder/combineGenerateOpTicket`

export {
    basePath,
    combineGenerateOpTicket
}