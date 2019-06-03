
## vselect
An vue select components

## Demo
[Live Demo](https://webharry.github.io/vselect/)

## Installation：
```shell
npm install --save-dev vselect-component
```

## How to use
### 1、To include this project you need to require the module by using CommonJS syntax or ES6 Modules Syntax (recommended).For example，in main.js file:
```js
import vSelect from 'vselect-component'

Vue.use(vSelect)
```

### 2、In the .vue file to use：
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
