/*
* @Author: anshad
* @Date:   2017-09-05 11:18:14
* @Last Modified by:   Anshad Vattapoyil
* @Last Modified time: 2017-09-05 20:21:07
*/
import Vue from 'vue'
import vSelect from 'vue-select'
Vue.component('v-select', vSelect)

export default {
	name: 'app',
	components: {vSelect},

	data() {
		return {
			section:{
				title:null,
				authors:[]
			},
			selected: null,
			options: ['foo','bar','baz']
		}
	}
}
