<template>
  <div class="index-wrapper_1Rsz2pX">
    <div class="index-footer_Gtduid_">
      <router-link v-for="(item, key) in tabList" :key="key" :to="item.to" class="index-footerTab_bl0lbJN" @click.native="tabClick">
        <svg class="index-footerTabIcon_1EbB8wS">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#' + (currRoute === item.to.substr(1)?item.acitveIconHref:item.iconHref)"></use>
        </svg>
        <span class="index-footerTabText_1It8yh0 index-footerTabTextActive_3gjOLc6">
          {{item.name}}
        </span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      currRoute: '',
      tabList: [
        {
          name: '首页',
          to: '/',
          iconHref: 'index-regular.f67031c',
          acitveIconHref: 'index.b8d51ef'
        },
        {
          name: '发现',
          to: '/discover',
          iconHref: 'discover-regular.17e03ee',
          acitveIconHref: 'discover.3cd85b8'
        },
        {
          name: '订单',
          to: '/order',
          iconHref: 'order-regular.e1ebaca',
          acitveIconHref: 'order.5fa2fba'
        },
        {
          name: '我的',
          to: '/profile',
          iconHref: 'profile-regular.813faec',
          acitveIconHref: 'profile.e6a81e5'
        }
      ]
    };
  },
  methods: {
    tabClick () {
      this.setCurrRoute();
    },
    setCurrRoute () {
      this.currRoute = this.$route.name;
    }
  },
  created () {
    this.setCurrRoute();
  }
};
</script>
<style>
.index-wrapper_1Rsz2pX {
  height: 1.6rem;
  height: 16vw;
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
.index-footerTab_bl0lbJN {
  display: block;
  -webkit-flex: 1;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-align: center;
}
.index-footerTabIcon_1EbB8wS {
  width: 0.533333rem;
  width: 5.333333vw;
  height: 0.533333rem;
  height: 5.333333vw;
}
svg:not(:root),
symbol,
image,
marker,
pattern,
foreignObject {
  overflow: hidden;
}
* > svg {
  transform-origin: 50% 50% 0px;
}
* {
  transform-origin: 0px 0px 0px;
}
.index-footerTabText_1It8yh0 {
  display: block;
  color: #8e8e93;
  font-size: 0.266667rem;
}
*,
::after,
::before {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
  -webkit-tap-highlight-color: transparent;
}
.router-link-exact-active .index-footerTabTextActive_3gjOLc6 {
  color: #0089dc;
}
</style>
