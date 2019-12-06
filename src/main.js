import Vue from 'vue'
import App from './App.vue'

/**
 * Vant UI
 * 参考网址： https://youzan.github.io/vant/?source=vuejsorg#/zh-CN/quickstart
 */
import Vant from 'vant';
import 'vant/lib/index.css'
Vue.use(Vant);

import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
