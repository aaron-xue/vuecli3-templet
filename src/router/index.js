import Vue from 'vue'
import Router from 'vue-router'

const orderManage = () => import('@/pages/order/orderManage')
const myOrder = () => import('@/pages/order/myOrder')
const generatingDemand = () => import('@/pages/order/generatingDemand')
const acciuntSetting = () => import('@/pages/order/acciuntSetting')

Router.prototype.push = function (location, onComplete, onAbort) {
    this.isBack = false;                //判断当前路由是否是返回，用于App.vue中给路由跳转添加动画
    this.history.push(location, onComplete, onAbort)
}

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: '/', // 基础路径
    routes: [
        {
            path: '/orderManage',
            name: 'orderManage',
            component: orderManage,
            meta: {             //用于main.js中页面动态添加title
                title: '神州邦邦'
            },
            redirect: '/orderManage/myOrder',
            children: [
                {
                    path: 'myOrder',
                    name: 'myOrder',
                    component: myOrder,
                    meta: {             
                        title: '神州邦邦'
                    },
                },
                {
                    path: 'generatingDemand',
                    name: 'generatingDemand',
                    component: generatingDemand,
                    meta: {             
                        title: '神州邦邦'
                    },
                },
                {
                    path: 'acciuntSetting',
                    name: 'acciuntSetting',
                    component: acciuntSetting,
                    meta: {             
                        title: '神州邦邦'
                    },
                }
            ]
        }
    ]
})
