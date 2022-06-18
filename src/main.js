import Vue from 'vue'
import App from './App'
import uView from 'uview-ui'
import Iconfont from './components/iconfont/iconfont'

Vue.config.productionTip = false
Vue.use(uView)
Vue.component('iconfont', Iconfont)

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
