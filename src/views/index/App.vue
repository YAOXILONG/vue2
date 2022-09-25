<template>
    <div class="IndexView">
      <div class="menu">
        <div class="scroll">
          <ul>
            <h-feedback-icon icon-name="h-icon-feedback_question_lg" />
            <li class="margin" v-for="view in views" :key="view[0]">
              <el-button type="primary" @click="clickHandler(view[0])">
                {{ view[0] + ':' + view[1] }} </el-button
              ><span
                class="h-icon-done"
                :style="view[2] ? 'color:#d00' : 'color:#ececec'"
              ></span
              ><span
                class="labelName"
                :style="view[2] ? 'color:#d00' : 'color:#fff'"
                >完成</span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
// import markdown from './markdown'

export default {
  name: 'IndexView',
  data() {
    return {
      views: [
        ['accessAreaManagement', '预约管理', 1],
        ['renderCeshi', 'render函数测试', 1],
      ],
    }
  },
  methods: {
    clickHandler(view) {
      console.log(123, view)
      window.open(
        location.protocol +
          '//' +
          location.host +
          '/' +
          view +
          '.html'
      )
    },
  },
}
</script>

<style>
</style>
