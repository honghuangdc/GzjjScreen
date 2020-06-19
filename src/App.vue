<template>
  <div id="app">
    <index></index>
  </div>
</template>

<script>
import index from '@/views/index'
export default {
  components: {
    index
  },
  name: "App",
  data() {
    return {}
  }
};
</script>

<style>
@import url('./styles/normalize.css');
@import url('./styles/scrollbar.css');
@import url('./styles/common.css');

html {
  width: 7296px;
  height: 768px;
  overflow: auto;
}
body {
  width: 7296px;
  height: 768px;
  background: url('./assets/img/common/bg.png') no-repeat center center;
  background-size: 100% 100%;
}
#app {
  position: relative;
  width: 100%;
  height: 100%;
  font-family: Arial, sans-serif, Avenir, Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
