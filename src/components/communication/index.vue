<template>
  <div>
    <!-- 组件通信 -->
    <h2>事件总线通信</h2>
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
  }
}
</script>
<style>

</style>


