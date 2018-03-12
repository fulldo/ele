<template>
  <div>
    <div id="shoplist-title" class="shoplist-title">推荐商家</div>
    <ShopList/>
  </div>
</template>
<script>
import ShopList from './shoplist/shoplist';
export default {
  components: {
    ShopList
  }
};
</script>
<style>
.shoplist-title {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 0.96rem;
  height: 9.6vw;
  font-size: 0.4rem;
  color: #000;
  background-color: #fff;
}
.shoplist-title:before {
  margin-right: 0.346667rem;
  margin-right: 3.466667vw;
}
.shoplist-title:after,
.shoplist-title:before {
  display: block;
  content: "";
  width: 0.533333rem;
  width: 5.333333vw;
  height: 0.026667rem;
  height: 0.266667vw;
  background-color: #999;
}
.shoplist-title:after {
  margin-left: 0.346667rem;
  margin-left: 3.466667vw;
}
</style>
