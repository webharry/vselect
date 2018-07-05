<template>
    <div>
        <vselect :option="options" v-model="selected" :placement="placement"></vselect>
    </div>
</template>
<script>
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
            }],
            selected:{
                value:1,
                label:'option1'
            },
            placement:'down'
        }
    }
}
</script>
<style lang="less" scoped>

</style>


