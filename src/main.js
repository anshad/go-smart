import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as Icon from 'vue-awesome'
Vue.component('icon', Icon)



new Vue({
	el: '#app',
	render: h => h(App)
})
