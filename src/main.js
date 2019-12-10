import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/reset.min.css'
import "./common.less"
//阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
