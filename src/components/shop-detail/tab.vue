<template>
  <div class="shop-tab-1MgBk_0">
    <div @click="tabClick(key)" :class="{'shop-tab-2ipt1_0':true, 'shop-tab-nD6jp_0':currTab === key}" v-for="(item, key) in tabs" :key="key">
      <span class="shop-tab-2H0qT_0">{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabs: ['点餐', '评价', '商家'],
      currTab: 0
    };
  },
  methods: {
    tabClick (index) {
      this.currTab = index;
      this.$emit('tabToggle', index);
    }
  }
};
</script>
<style>
.shop-tab-1MgBk_0 {
  line-height: 1.066667rem;
  line-height: 10.666667vw;
  display: -webkit-flex;
  display: flex;
  background-color: #fff;
  border-bottom: 1px solid #eee;
}
.shop-tab-nD6jp_0 {
  color: #333;
  font-weight: 700;
}
.shop-tab-2ipt1_0 {
  position: relative;
  -webkit-flex: 1;
  flex: 1;
  text-align: center;
  font-size: 0.373333rem;
  color: #666;
  border-bottom: 1px solid #ddd;
}
.shop-tab-nD6jp_0 .shop-tab-2H0qT_0 {
  position: relative;
}
.shop-tab-nD6jp_0 .shop-tab-2H0qT_0:after {
  content: "";
  position: absolute;
  bottom: -0.32rem;
  bottom: -3.2vw;
  left: 0;
  right: 0;
  height: 0.053333rem;
  height: 0.533333vw;
  background-color: #2395ff;
}
</style>
