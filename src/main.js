import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import "./assets/css/main.css";
Vue.config.productionTip = false
Vue.use(Vuetify, {
    theme: {
      primary: "#f44336",
      secondary: "#e57373",
      accent: "#9c27b0",
      error: "#f44336",
      warning: "#ffeb3b",
      info: "#2196f3",
      success: "#4caf50"
    }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
