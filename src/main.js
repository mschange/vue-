import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Bus from './untils/bus';
// 事件总线
// Vue.prototype.$bus = new Vue()
Vue.prototype.$bus = new Bus();
new Vue({
  render: h => h(App),
}).$mount('#app')
