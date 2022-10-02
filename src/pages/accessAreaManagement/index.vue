<template>
  <div class="block">
    <span class="demonstration">格式化 Tooltip</span>
    <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
    <transition :name="isExpandFlag ? 'slide-fade' : 'slide-fade2'">
      <div class="left-block" v-if="isExpandFlag" key="1">
        <div class="left-block-list">
          <div v-for="item in blockList" :key="item.id">
            {{ item.name }}
          </div>
        </div>
        <el-button
          icon="el-icon-d-arrow-left"
          circle
          class="shrink-btn"
          @click="isExpandFlag = false"
        ></el-button>
      </div>
      <el-button
        icon="el-icon-d-arrow-right"
        circle
        class="expand-btn"
        @click="isExpandFlag = true"
        v-else
        key="2"
      ></el-button>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: 0,
      value2: 50,
      value3: 36,
      value4: 48,
      value5: 42,
      blockList: [
        {
          name: "标记1",
          id: 1,
        },
        {
          name: "标记2",
          id: 2,
        },
        {
          name: "标记3",
          id: 3,
        },
        {
          name: "标记4",
          id: 4,
        },
      ],
      isExpandFlag: false,
    };
  },
  methods: {
    formatTooltip(val) {
      return val / 100;
    },
  },
};
</script>
<style lang="less">
.left-block-list {
  background: gray;
  width: 180px;
}
.shrink-btn {
  position: absolute;
  left: 179px;
  top: 78px;
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active, .slide-fade-leave-active, .slide-fade2-enter-active, .slide-fade2-leave-active{
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade2-leave-to {
  transform: translateX(-180px);
  opacity: 0;
}
.slide-fade-leave-to, .slide-fade2-enter {
  transform: translateX(180px);
  opacity: 0;
}
</style>