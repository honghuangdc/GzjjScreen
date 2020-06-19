import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import { useAntdVue } from './utils'
import { Row, Col, Modal } from 'ant-design-vue'

const antdVueComponent = [ Row, Col, Modal ]
useAntdVue(antdVueComponent)

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
