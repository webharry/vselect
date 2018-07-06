
## 组件功能介绍：自定义的下拉款组件，依赖于vue封装。
## 使用：
```shell
npm install --save-dev vselect-component
```

### 在项目的main.js文件中引入：
```js
import vSelect from 'vselect-component'

Vue.use(vSelect)
```

### 在vue文件中使用：
```html
<v-select v-model="selected" :option="options" :placement="placement"></v-select>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      index: 1,
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
</script>
```
