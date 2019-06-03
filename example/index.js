import Vue from 'vue'
import App from './App.vue'
import { vSelect } from '../src/index'

Vue.config.productionTip = false

Vue.use(vSelect)

new Vue({
    el: "#app",
    components: { App },
    template: '<App/>'
})
