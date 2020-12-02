import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import './assets/styles/border.css'
import './assets/styles/reset.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')