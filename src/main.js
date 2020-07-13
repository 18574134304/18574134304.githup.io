import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import './assets/js/flexible'
import './assets/mui/css/mui.min.css'
import mui from './assets/mui/js/mui.min.js'

import './assets/mui/css/mui.picker.min.css'
import './assets/mui/js/mui.picker.min.js'
import './assets/mui/js/mui.view'

//icon font 字体
import './assets/mui/css/iconfont.css'


Vue.config.productionTip = false
Vue.prototype.mui = mui

const vue = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
