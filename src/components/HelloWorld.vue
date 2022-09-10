<!--
 * @Author: yaoxilong 1299583049@qq.com
 * @Date: 2022-09-03 20:46:19
 * @LastEditors: yaoxilong 1299583049@qq.com
 * @LastEditTime: 2022-09-03 21:11:03
 * @FilePath: \cli-init\src\components\HelloWorld.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
<div class="divDemo">
   <!-- <el-button type="primary">主要按钮</el-button> -->
      <el-scrollbar>
       <div class = "case-inside">
        <div>zheshi1</div>
        <div>zheshi2</div>
        <div>zheshi3</div>
        <div>zheshi4</div>
        <div>zheshi5</div>
        <div>zheshi6</div>
        <div>zheshi7</div>
        <div>zheshi8</div>
        <div>zheshi9</div>
        <div>zheshi10</div>
        <div>zheshi11</div>
        <div>zheshi12</div>
       </div>
      </el-scrollbar>
    </div>
</template>

<script>
import moment from 'moment'
// moment().format();
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      show: true
    }
  },
  methods: {
    momentFuc () {
     let day2 = moment().format("YYYY-MM-DDTHH:mm:ss.SSSZ");
     console.log(day2);
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 0.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(-30px);
  opacity: 0;
}
.slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(-30px);
  opacity: 0;
}

.divDemo {
  width: 100px;
  height: 100px;
  border: 1px solid #42b983;
  margin-top: 10px;
  // .scrollItem {
  //   max-height: 100%;
  //   overflow-x: hidden;
  // }
}

     .case-dialog-scroll {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
     }
     .case-inside {
       width: 100%;
       height: 100%
     }
</style>
