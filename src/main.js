// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import eventBus from './api/eventBus';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);
Vue.prototype.$bus = eventBus;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  eventBus,
  router,
  render:h=>h(App) // ES6写法 render作用：是更新视图的函数
})
