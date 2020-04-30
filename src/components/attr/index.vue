<template>
  <div>
    <!-- $attr使用 -->
    <h2>attr使用</h2>
    <Child2 msg="attr传递测试" @undateLister="test"></Child2>
  </div>
</template>
<script>
import Child2 from './child2'
export default {
  components: {
    Child2
  },
  methods: {
    test(res) {
      console.log(res, '-----------------')
    }
  }
}
</script>
<style>

</style>


