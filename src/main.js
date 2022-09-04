import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router'
Vue.use(VueRouter);
Vue.config.productionTip = false;
import axios from 'axios'
Vue.prototype.$axios = axios
new Vue({
  el:'#app',
  render: h => h(App),
  router:router
}).$mount('#app')
