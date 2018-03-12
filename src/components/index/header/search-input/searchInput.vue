<template>
  <div>
    <div class="search-wrapper" style="position: sticky; top: 0px; z-index: 999;">
      <div role="button" class="search" style="top: 0px; z-index: 999;">
        <a class="content">
          <svg>
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#search"></use>
          </svg>
          <span>搜索商家、商品名称</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style>
.search {
  padding: 0.2rem 0.373333rem;
  padding: 2vw 3.733333vw;
  margin: -0.013333rem 0;
  margin: -0.133333vw 0;
}
.search,
.search-wrapper {
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#0af),
    to(#0085ff)
  );
  background-image: -webkit-linear-gradient(left, #0af, #0085ff);
  background-image: linear-gradient(90deg, #0af, #0085ff);
}
.search:before {
  top: -1px;
}
.search:after,
.search:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  left: 0;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#0af),
    to(#0085ff)
  );
  background-image: -webkit-linear-gradient(left, #0af, #0085ff);
  background-image: linear-gradient(90deg, #0af, #0085ff);
}
.search:after {
  bottom: -1px;
}
.search:after,
.search:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  left: 0;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#0af),
    to(#0085ff)
  );
  background-image: -webkit-linear-gradient(left, #0af, #0085ff);
  background-image: linear-gradient(90deg, #0af, #0085ff);
}
.search > .content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 0.96rem;
  height: 9.6vw;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 0.026667rem;
  border-radius: 0.266667vw;
  background: #fff;
  color: #999;
  font-size: 0.373333rem;
}
a,
img {
  -webkit-touch-callout: none;
}
a {
  outline: 0;
  color: inherit;
  text-decoration: none;
}
.search > .content > svg {
  display: inline-block;
  width: 0.426667rem;
  width: 4.266667vw;
  height: 0.426667rem;
  height: 4.266667vw;
  margin-right: 0.133333rem;
  margin-right: 1.333333vw;
}
svg:not(:root),
symbol,
image,
marker,
pattern,
foreignObject {
  overflow: hidden;
}
.search > .content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 0.96rem;
  height: 9.6vw;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 0.026667rem;
  border-radius: 0.266667vw;
  background: #fff;
  color: #999;
  font-size: 0.373333rem;
}
</style>
