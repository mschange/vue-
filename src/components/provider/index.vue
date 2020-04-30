<template>
  <div>
    <!-- $provider使用 -->
    <h2>provider使用</h2>
    <Child2></Child2>
  </div>
</template>
<script>
import Child2 from './child2'
export default {
  provide() {
    return {
      foo: this.msg,
      msg: this.foo
    }
  },
  components: {
    Child2
  },
  data() {
    return {
      foo: {
        name: '李四',
        age: 30
      },
      msg: '23r454'
    }
  }
}
</script>
<style>

</style>


