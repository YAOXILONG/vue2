<template>
  <div>
    <HLevels :level="1">标题1</HLevels>
    <HLevels :level="2"
      >标题2
      <p slot="content">这是一段内容</p>
    </HLevels>
  </div>
</template>
<script>
import HLevels from './components/HLevels.vue'
export default {
  components: {
    HLevels,
  },
};
</script>