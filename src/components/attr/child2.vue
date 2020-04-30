<template>
  <div>
    <h3>attr</h3>
    <p v-bind="$attrs">{{ $attrs.msg }}</p>
    <button @click="listerClick">$listers点击</button>
  </div>
</template>

<script>
  /*
     inheritAttrs: false,
   */
  export default {
    inheritAttrs: false,
    methods: {
      listerClick() {
        this.$emit('undateLister', 'lister传递过去的值0');
      }
    },
  }
</script>

<style scoped>

</style>