<template>
  <div>
    <h3>provider使用</h3>
    <p>{{ foo }}</p>
    <p>{{ msg.name }}</p>
    <p>{{ msg.age }}</p>
  </div>
</template>

<script>
  /*
     需要注意: provide是单向的
   */
  export default {
    inject: ['foo', 'msg']
  }
</script>

<style scoped>

</style>