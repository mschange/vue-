<template>
  <div>
    <!-- 组件通信 -->
    <h2>parment派发</h2>
    <Child1></Child1>
    <Child2></Child2>
  </div>
</template>
<script>
import Child1 from './child1';
import Child2 from './child2'
export default {
  components: {
    Child1,
    Child2
  },
  mounted() {
    // $children所有组件。顺序不能保证
    console.log(this.$children);
  }
}
</script>
<style>

</style>


