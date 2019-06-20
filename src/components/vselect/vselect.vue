<template>
    <div :class="[placement,'select']" v-outsideClick="onSearchBlur">
        <div :class="[isUp?'up':'down','input-control']">
            <input class="select-input" type="text" :value="getOptionLabel(value)" @focus="onSearchFocus" readonly>
        </div>
        <div class="dropMenu" v-if="isShowList">
            <ul>
                <li :class="{'active':getOptionLabel(item)==getOptionLabel(value)}" v-for="(item,index) in option" :key="index" @click="select(item)">{{item.label}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: "vselect",
  props: {
    option: {
      type: Array,
      default: []
    },
    value: {
      default: ""
    },
    label: {
      type: String,
      default: "label"
    },
    val: {
      type: String,
      default: "value"
    },
    placement: {
        type: String,
        default: 'bottom'
    }
  },
  data() {
    return {
      isShowList: false,
      isUp: false
    };
  },
  methods: {
    select: function(item) {
      this.onSearchBlur();
      this.$emit("input", item);
    },
    getOptionLabel: function(option) {
      if (typeof option == "object") {
        if (!option.hasOwnProperty(this.label)) {
          return console.warn(
            `Label key "option.${this.label}" does not exist`
          );
        }
        if (this.label && option[this.label]) {
          return option[this.label];
        }
      }
      if (typeof option == "string") {
        let obj = this.options.filter(item => option == item[this.val]);
        if (obj.length) {
          return obj[0][this.label];
        }
        return options[0][this.label];
      }
      return option;
    },
    onSearchFocus: function() {
      this.isShowList = true;
      this.isUp = !this.isUp;
    },
    onSearchBlur: function() {
        if(this.isShowList) {
            this.isUp = !this.isUp;
            this.isShowList = false;
        }
    }
  },
  directives: {
      outsideClick: {
          //指令的定义
          inserted: function(el,binding) {
              function documentHandler(e){
                if(el.contains(e.target)){
                    return false;
                }
                if(binding.expression){
                    binding.value(e)
                }
              }

              el.__outsideClick__ = documentHandler
              document.addEventListener('click',documentHandler)
              
          },
          unbind: function(el,binding) {
              document.removeEventListener('click',el.__outsideClick__)
              delete el.__outsideClick__
          }
      }
  }
};
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.active {
  background: #f3f3f3;
  color: #2d8cf0;
}
.select {
  position: relative;
  display: inline-block;
  width: 200px;
  height: 56px;
  line-height: 56px;
  font-size: 14px;
}
.select::after{
    content: "";
    clear:both;
}
input {
    width:100%;
    padding: 5px;
    box-sizing: border-box;
    border:1px solid rgba(60, 60, 60, .26);
    border-radius: 4px;
    outline: none;
    background-color: #fff;
    color: #515a6e;
}
.input-control::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
}
.down.input-control::after {
      border-right: 5px solid transparent;
      border-left: 5px solid transparent;
      border-top: 8px solid #808695;
}
.up.input-control::after {
      border-right: 5px solid transparent;
      border-left: 5px solid transparent;
      border-bottom: 8px solid #808695;
}
.dropMenu {
    min-width: 200px;
    max-height: 200px;
    margin: 5px 0;
    padding: 5px 0;
    box-sizing: border-box;
    position: absolute;
    top:45px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
    z-index: 20;
}
.dropMenu ul {
    list-style: none;
    overflow: auto;
}
.dropMenu li {
    cursor: pointer;
    height:20px;
    line-height: 20px;
    font-size: 14px;
    padding: 5px 10px;
    color: #515a6e;
    white-space: nowrap;
    transition: background .2s ease-in-out;
}
.dropMenu li:hover {
    background: #f3f3f3;
}
</style>


