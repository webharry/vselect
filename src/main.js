import Vue from 'vue'
import App from './App.vue'
import vselect from './components/vselect'

Vue.config.productionTip = false

Vue.use(vselect)

new Vue({
    el: "#app",
    components: { App },
    template: '<App/>'
})
