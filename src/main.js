import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import VueMask from "v-mask";
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/scss/bootstrap.scss'
import router from './router'

//TODO mudar depois
Vue.config.productionTip = false



Vue.use(VueMask);
Vue.use(BootstrapVue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

