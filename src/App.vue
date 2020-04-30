<template>
  <div id="app">
    <!-- 事件总线兄弟组件传参 -->
    <Communicataion></Communicataion>
    <!-- parment去派发 -->
    <Parment></Parment>
    <!-- $attr使用 -->
    <AttrsTest></AttrsTest>
    <!-- provider/inject -->
    <ProviderTest></ProviderTest>
  </div>
</template>

<script>
import Communicataion from './components/communication/index'
import Parment from './components/parment/index'
import AttrsTest from './components/attr/index'
import ProviderTest from './components/provider/index'
export default {
  name: 'App',
  components: {
    Communicataion,
    Parment,
    AttrsTest,
    ProviderTest
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
