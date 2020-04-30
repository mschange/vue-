<template>
  <div>
    <h3>child2</h3>
    <button @click="sendToChild1">给child1发送消息</button>
  </div>
</template>

<script>
  export default {
    methods: {
      sendToChild1() {
        // 利用$parent发送事件
        this.$parent.$emit('event-from-child2', '$parment 派发过来的')
      }
    },
  }
</script>

<style scoped>

</style>