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
  background-color: #00bcd4db;
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
    background-color: #ccc;
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
      border-top: 8px solid #161515;
}
.up.input-control::after {
      border-right: 5px solid transparent;
      border-left: 5px solid transparent;
      border-bottom: 8px solid #161515;
}
.dropMenu {
    width: 100%;
    position: absolute;
    top: 45px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(230, 214, 214);
}
  .dropMenu ul {
    list-style: none;
    border: 1px solid #00bcd4;
    overflow: auto;
  }
  .dropMenu li {
    cursor: pointer;
    height:20px;
    line-height: 20px;
    font-size: 14px;
    padding: 5px 10px;
  }
</style>


