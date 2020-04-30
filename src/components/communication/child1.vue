<template>
  <div @click="$emit('some-event', 'msg from child1')">
    <h3>child1</h3>
    <p>传递过来的值:{{test}}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        test: ''
      }
    },
    mounted () {
      this.$bus.$on('event-from-child2', msg => {
        console.log('Child1:', msg);
        this.test = msg;
      });
    },
  }
</script>

<style scoped>

</style>