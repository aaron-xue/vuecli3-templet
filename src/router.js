import Vue from 'vue'
import Router from 'vue-router'

const page1 = () => import('./pages/page1.vue')

Router.prototype.push = function (location, onComplete, onAbort) {
    this.isBack = false;                //判断当前路由是否是返回，用于App.vue中给路由跳转添加动画
    this.history.push(location, onComplete, onAbort)
}

Vue.use(Router)

export default new Router({
    fallback: false,
    mode: 'history',
    base: '/', // 基础路径
    routes: [
        {
            path: '/',
            name: 'index',
            redirect: '/page1'
        },
        {
            path: '/page1',
            name: 'page1',
            component: page1,
            meta: {             //用于main.js中页面动态添加title
                title: '神州邦邦'
            }
        }
    ]
})
