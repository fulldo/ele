<template>
  <div class="entry-detail">
    id为<br>{{entryId}}
  </div>
</template>
<script>
export default {
  data () {
    return {
      entryId: ''
    };
  },
  created () {
    this.entryId = this.$route.params.id;
  }
};
</script>
<style>
.entry-detail{
  margin-top: 2rem;
  font-size: 1rem;
  text-align: center;
}
</style>
