import Vue from 'vue'
import Router from 'vue-router';
/**
 *
 *路由app页面
 *
 **/
// import Home from '@/components/home'; //入口页面
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'Home',
    component: resolve => require(['@/components/home'], resolve) //路由懒加载
  }, {
    path: '/share',
    name: 'Share',
    component: resolve => require(['@/components/share'], resolve)
  }, {
    path: '/platform',
    name: 'Platform',
    component: resolve => require(['@/components/platform'], resolve)
  }, {
    path: '/ComponyIntro',
    name: 'ComponyIntro',
    component: resolve => require(['@/components/ComponyIntro'], resolve)
  }, {
    path: '/Music',
    name: 'Music',
    component: resolve => require(['@/components/music'], resolve)
  }]
})
