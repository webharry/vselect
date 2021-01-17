import vCheckbox from './vCheckbox'

export default {
    install: Vue => {
        Vue.component(vCheckbox.name, vCheckbox)
    }
}

export {
    vCheckbox
}