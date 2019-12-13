import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import echarts from 'echarts'
import common from './components/common.js'
import store from './store'


Vue.prototype.$common=common
Vue.prototype.$echarts = echarts
Vue.use(Element,{size:'small',zIndex:3000})
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
