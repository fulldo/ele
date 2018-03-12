<template>
  <div>
    <Header/>
    <Category/>
    <Recommend/>
  </div>
</template>
<script>
import Header from '@/components/index/header/header';
import Category from '@/components/index/category/category';
import Recommend from '@/components/index/recommend/recommend';
export default {
  data () {
    return {

    };
  },
  components: {
    Header,
    Category,
    Recommend
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.index-footer_Gtduid_ {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-justify-content: space-between;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding-top: 0.12rem;
  padding-top: 1.2vw;
  background-color: #fff;
  height: 1.333333rem;
  height: 13.333333vw;
  -webkit-box-shadow: 0 -0.026667rem 0.053333rem rgba(0, 0, 0, 0.1);
  box-shadow: 0 -0.026667rem 0.053333rem rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 -0.266667vw 0.533333vw rgba(0, 0, 0, 0.1);
  box-shadow: 0 -0.266667vw 0.533333vw rgba(0, 0, 0, 0.1);
}
</style>
