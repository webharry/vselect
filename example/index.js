import Vue from 'vue'
import App from './App.vue'
import { vSelect, vCheckbox } from '../src/index'

Vue.config.productionTip = false

Vue.use(vSelect)
Vue.use(vCheckbox)

new Vue({
    el: "#app",
    components: { App },
    template: '<App/>'
})
