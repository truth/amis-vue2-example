import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// fortawesome
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all";

// import VueAmisSdk from "vue-amis-sdk";
// Vue.use(VueAmisSdk);
//console.log(VueAmisSdk);
import { VuePlugin } from "vuera";
Vue.use(VuePlugin);

new Vue({
  render: h => h(App),
}).$mount('#app')
