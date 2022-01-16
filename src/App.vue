<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab';
export default {
  name: 'App',
  components: {
    Tab
  },
  computed: {
  }
};
</script>

<style>
body,
button,
dd,
dl,
ol,
ul {
  margin: 0;
  padding: 0;
}

*,
::after,
::before {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
  -webkit-tap-highlight-color: transparent;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
</style>
