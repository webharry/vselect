<template>
    <div>
        <vselect :option="options" v-model="selected" :placement="placement"></vselect>
        <v-checkbox :option="options" v-model="selected" :placement="placement"></v-checkbox>
    </div>
</template>
<script>
import vCheckbox from '../src/components/checkbox/vCheckbox.vue'
// import vSelect from '../dist/vselect'
export default {
  components: { vCheckbox },
    name: 'App',
    data() {
        return {
            options: [{
                value:1,
                label:'option1'
            },{
                value:2,
                label:'option2'
            },{
                value:3,
                label:'option3'
            }],
            selected:{
                value:1,
                label:'option1'
            },
            placement:'down'
        }
    }
    // components: {
    //     vSelect
    // }
}
</script>
<style lang="less" scoped>

</style>


