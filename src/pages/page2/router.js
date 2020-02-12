import Vue from 'vue'
import Router from 'vue-router'

const page3 = () => import('./views/page2-1.vue')
const page4 = () => import('./views/page2-2.vue')

Router.prototype.push = function (location, onComplete, onAbort) {
    this.isBack = false;                //判断当前路由是否是返回，用于App.vue中给路由跳转添加动画
    this.history.push(location, onComplete, onAbort)
}

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: '/page2', // 基础路径
    routes: [
        {
            path: '/',
            name: 'index',
            redirect: '/page3.html'
        },
        {
            path: '/page3.html',
            name: 'page3',
            component: page3,
            meta: {             //用于main.js中页面动态添加title
                title: '神州邦邦'
            }
        },
        {
            path: '/page4.html',
            name: 'page4',
            component: page4,
            meta: {             //用于main.js中页面动态添加title
                title: '神州邦邦'
            }
        }
    ]
})
