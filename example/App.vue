<template>
    <div>
        <vselect :option="options" v-model="selected" :placement="placement"></vselect>
    </div>
</template>
<script>
// import vSelect from '../dist/vselect'
export default {
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


