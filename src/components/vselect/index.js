import vSelect from './vselect'

export default {
    install: Vue => {
        Vue.component(vSelect.name, vSelect)
    }
}

export {
    vSelect
}