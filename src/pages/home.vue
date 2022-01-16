<template>
  <div>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <Tab/>
  </div>
</template>

<script>
import Tab from '@/components/tab/tab';
export default {
  components: {
    Tab
  }
};
</script>

<style>

</style>
