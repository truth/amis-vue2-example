import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// fortawesome
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all";
new Vue({
  render: h => h(App),
}).$mount('#app')
