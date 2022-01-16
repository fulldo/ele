<template>
  <section @click="shopClick" class="index-container_10L_lQb shop-0">
    <div class="index-shopInfo_1RRTZ0d">
      <div class="logo-container_XoH2Vit_0">
        <div class="logo-main_21aInWJ_0"><img :alt="restaurant.name" class="logo-logo_3S1eSkn_0" src="" v-lazy="{src:'//fuss10.elemecdn.com/' + getLogoUrl(restaurant.image_path) + '?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/',
                   loading:'https://fuss10.elemecdn.com/a/7c/a7e9e5aa15b1b8fc6f1bece8ee385jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/' }">
          <span v-show="totalCount" class="logo-categoryQuantity_uaoPHzl_0">
            {{totalCount}}
          </span>
        </div>
        <!---->
      </div>
      <div class="index-main_N3FfcSz">
        <section class="index-line_2-iYR1A">
          <h3 class="index-shopname_39Y7e3U">
            <i v-show="restaurant.is_premium" content="品牌" class="index-premium_39rl0v9">品牌</i>
            <span>{{restaurant.name}}</span>
          </h3>
          <ul class="index-supportWrap_2lTcxr2">
            <!---->
            <li v-for="(sup_item, sup_key) in restaurant.supports" :key="sup_key" :content="sup_item.icon_name"></li>
          </ul>
        </section>
        <section class="index-line_2-iYR1A">
          <div class="index-rateWrap_39dWx_g">
            <div class="Rating-wrapper_TYbDrku_0">
              <div class="Rating-gray_1kpffd5_0">
                <svg>
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star-gray.cc081b9"></use>
                </svg>
              </div>
              <div class="Rating-actived_GBtiHkB_0" :style="{width: Math.floor((restaurant.rating / 5) * 100)  + '%'}">
                <svg>
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star-actived.d4c54d1"></use>
                </svg>
              </div>
            </div>
            <span class="index-rate_WsK58g8">{{restaurant.rating}}</span>
            <span>月售{{restaurant.recent_order_num}}单</span>
          </div>
          <!---->
        </section>
        <section class="index-line_2-iYR1A">
          <div class="index-moneylimit_2fCq9W5">
            <span>¥{{restaurant.piecewise_agent_fee.rules[0].price}}起送</span>
            <span>{{restaurant.piecewise_agent_fee.tips}}</span>
            <!---->
          </div>
          <div class="index-timedistanceWrap_2Dp_kzY">
            <span class="index-distanceWrap_1EPAlti">{{(restaurant.distance / 1000).toFixed()}}km</span>
            <span>{{restaurant.order_lead_time}}分钟</span>
          </div>
        </section>
      </div>
    </div>
    <div class="index-activityWrap_3mo1GyG">
      <section v-show="restaurant.recommend.reason" class="index-tagLine_1rJw_lq">
        <span class="index-sourceTag_32NKya6" :style="{color: '#' + restaurant.recommend.color}"><img :src="'//fuss10.elemecdn.com/' + getLogoUrl(restaurant.recommend.image_hash) + '?imageMogr/format/webp/thumbnail/!60x60r/gravity/Center/crop/60x60/'">
          <span>{{restaurant.recommend.reason}}</span>
        </span>
      </section>
      <span>
        <svg class="index-dashedline_7B79b3W">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#dashed-line.3732003"></use>
        </svg>
      </span>
      <section class="index-activities_25AUDsx">
        <div class="index-activityList_1wvwwUY">
          <div class="index-actRow_2f_uNNA" v-for="(act_item, act_key) in restaurant.activities" :key="act_key" v-show="act_key < countLimit || act_show_all">
            <span class="index-iconWrap_1xJuKaY">
              <span class="index-icon_1fBCxBk" :style="{backgroundColor: '#' + act_item.icon_color}">
                {{act_item.icon_name}}
              </span>
            </span>
            <span class="index-desc_JLha7Vr">{{act_item.description}}</span>
          </div>
        </div>
        <div class="index-activityBtn_tMk-e1C" @click="toggle" v-show="restaurant.activities.length > countLimit">
          {{restaurant.activities.length}}个活动
          <svg :class="{'index-open_33dKeGm':act_show_all}">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#activity-more.c46fec1"></use>
          </svg>
        </div>
      </section>
    </div>
  </section>
</template>
<script>
import { getImgUrl } from '../../../../common/utils';

export default {
  props: {
    restaurant: {
      type: Object,
      require: true
    }
  },
  data () {
    return {
      act_show_all: false,
      countLimit: 2,
      cart: []
    };
  },
  methods: {
    getLogoUrl (url) {
      return getImgUrl(url);
    },
    toggle (event) {
      event.stopPropagation();
      this.act_show_all = !this.act_show_all;
    },
    shopClick () {
      this.$emit('enterDetail', this.restaurant.id);
    }
  },
  computed: {
    totalCount () {
      let cart = this.cart;
      let sum = 0;
      for (let k = 0; k < cart.length; k++) {
        const foodInCart = cart[k];
        sum += foodInCart.count;
      }
      return sum;
    }
  },
  created () {
    this.$store.commit('INIT_A_SHOP', { shopId: this.restaurant.id });
    this.cart = this.$store.getters.shopCart({ shopId: this.restaurant.id });
  }
};
</script>
<style>
ol,
ul {
  list-style: none;
}
.index-container_10L_lQb {
  position: relative;
  border-bottom: 0.013333rem solid #eee;
  border-bottom: 0.133333vw solid #eee;
  background-color: #fff;
  color: #666;
  padding: 0.4rem 0;
  padding: 4vw 0;
  list-style: none;
  font-size: 0.293333rem;
  line-height: normal;
}
.index-shopInfo_1RRTZ0d {
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: flex-start;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-align-items: stretch;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  padding: 0 0.266667rem;
  padding: 0 2.666667vw;
}
.logo-container_XoH2Vit_0 {
  position: relative;
  -webkit-flex: none;
  -webkit-box-flex: 0;
  -ms-flex: none;
  flex: none;
}
.logo-main_21aInWJ_0 {
  position: relative;
  width: 1.733333rem;
  width: 17.333333vw;
  height: 1.733333rem;
  height: 17.333333vw;
}
.logo-logo_3S1eSkn_0 {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 0.053333rem;
  border-radius: 0.533333vw;
  border: 0.013333rem solid rgba(0, 0, 0, 0.08);
  border: 0.133333vw solid rgba(0, 0, 0, 0.08);
}
img {
  max-width: 100%;
}
.index-line_2-iYR1A,
.index-main_N3FfcSz {
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: space-between;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  overflow: hidden;
}
.index-main_N3FfcSz {
  -webkit-flex-grow: 1;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-flex-direction: column;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding-left: 0.266667rem;
  padding-left: 2.666667vw;
}
.index-line_2-iYR1A,
.index-shopname_39Y7e3U {
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.index-line_2-iYR1A,
.index-main_N3FfcSz {
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: space-between;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  overflow: hidden;
}
.index-shopname_39Y7e3U {
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 0;
  padding: 0;
  color: #333;
  font-weight: 700;
  font-size: 0.4rem;
  overflow: hidden;
}
.index-line_2-iYR1A,
.index-shopname_39Y7e3U {
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.index-premium_39rl0v9 {
  position: relative;
  margin-right: 0.133333rem;
  margin-right: 1.333333vw;
  padding: 0.026667rem 0.066667rem;
  padding: 0.266667vw 0.666667vw;
  color: transparent;
  text-align: center;
  white-space: nowrap;
  font-weight: 700;
  font-size: 0.293333rem;
  font-style: normal;
  line-height: normal;
}
.index-premium_39rl0v9:after {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  content: attr(content);
  padding: 0.011373rem 0.02844rem;
  padding: 0.113733vw 0.2844vw;
  padding: 0.053333rem 0.133333rem;
  padding: 0.533333vw 1.333333vw;
  color: #6f3f15;
  font-weight: 700;
  font-size: 0.125147rem;
  font-size: 0.586667rem;
  border-radius: 0.022747rem;
  border-radius: 0.227467vw;
  border-radius: 0.106667rem;
  border-radius: 1.066667vw;
  background-image: -webkit-linear-gradient(229deg, #fff100, #ffe339);
  background-image: linear-gradient(-139deg, #fff100, #ffe339);
  white-space: nowrap;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}
.index-shopname_39Y7e3U span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.index-supportWrap_2lTcxr2 {
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 0.266667rem;
  margin-left: 2.666667vw;
}
.index-supportWrap_2lTcxr2 {
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 0.266667rem;
  margin-left: 2.666667vw;
}
.index-line_2-iYR1A,
.index-shopname_39Y7e3U {
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.index-supportWrap_2lTcxr2 {
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 0.266667rem;
  margin-left: 2.666667vw;
}
.index-activities_25AUDsx,
.index-supportWrap_2lTcxr2 {
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.index-supportWrap_2lTcxr2 > li.index-ad_2AGWmo_ {
  height: 0.293333rem;
  height: 2.933333vw;
  width: 0.48rem;
  width: 4.8vw;
}
.index-supportWrap_2lTcxr2 > li {
  position: relative;
  height: 0.346667rem;
  height: 3.466667vw;
  /* width: .346667rem; */
  width: 3.466667vw;
  /* margin-left: .08rem; */
  /* margin-left: .8vw; */
}
.index-supportWrap_2lTcxr2 > li.index-ad_2AGWmo_:after {
  color: #ccc;
  font-size: 0.07964rem;
  font-size: 0.373333rem;
  width: 0.2048rem;
  width: 2.048vw;
  width: 0.96rem;
  width: 9.6vw;
  height: 0.125147rem;
  height: 1.251467vw;
  height: 0.586667rem;
  height: 5.866667vw;
  border: 0.013333rem solid #eee;
  border: 0.133333vw solid #eee;
}
.index-supportWrap_2lTcxr2 > li:after {
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  font-size: 0.113773rem;
  font-size: 0.533333rem;
  color: #999;
  content: attr(content);
  border-radius: 0.00568rem;
  border-radius: 0.0568vw;
  border-radius: 0.026667rem;
  border-radius: 0.266667vw;
  width: 0.147907rem;
  width: 1.479067vw;
  width: 0.693333rem;
  width: 6.933333vw;
  height: 0.147907rem;
  height: 1.479067vw;
  height: 0.693333rem;
  height: 6.933333vw;
  line-height: normal;
  border: 0.013333rem solid #ddd;
  border: 0.133333vw solid #ddd;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}
.index-supportWrap_2lTcxr2 > li:last-child {
  /* margin-right: .013333rem; */
  /* margin-right: .133333vw; */
}
.index-supportWrap_2lTcxr2 > li {
  position: relative;
  height: 0.346667rem;
  height: 3.466667vw;
  /* width: .346667rem; */
  width: 3.466667vw;
  /* margin-left: .08rem; */
  /* margin-left: .8vw; */
}

.index-line_2-iYR1A,
.index-main_N3FfcSz {
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: space-between;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  overflow: hidden;
}
.index-rateWrap_39dWx_g {
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.Rating-wrapper_TYbDrku_0 {
  position: relative;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
}
.Rating-actived_GBtiHkB_0,
.Rating-gray_1kpffd5_0 {
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.Rating-actived_GBtiHkB_0 svg,
.Rating-gray_1kpffd5_0 svg {
  width: 1.493333rem;
  width: 14.933333vw;
  height: 0.266667rem;
  height: 2.666667vw;
  -webkit-flex: none;
  -webkit-box-flex: 0;
  -ms-flex: none;
  flex: none;
}
.Rating-actived_GBtiHkB_0 {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}
.Rating-actived_GBtiHkB_0,
.Rating-gray_1kpffd5_0 {
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.Rating-actived_GBtiHkB_0 svg,
.Rating-gray_1kpffd5_0 svg {
  width: 1.493333rem;
  width: 14.933333vw;
  height: 0.266667rem;
  height: 2.666667vw;
  -webkit-flex: none;
  -webkit-box-flex: 0;
  -ms-flex: none;
  flex: none;
}
.index-rate_WsK58g8 {
  margin: 0 0.106667rem;
  margin: 0 1.066667vw;
}
.index-line_2-iYR1A,
.index-shopname_39Y7e3U {
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.index-line_2-iYR1A,
.index-main_N3FfcSz {
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: space-between;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  overflow: hidden;
}
.index-moneylimit_2fCq9W5 {
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
}
.index-moneylimit_2fCq9W5 span:nth-of-type(2) {
  overflow: hidden;
  max-width: 2.666667rem;
  max-width: 26.666667vw;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.index-moneylimit_2fCq9W5 span + span:before {
  margin: 0 0.017067rem;
  margin: 0 0.170667vw;
  margin: 0 0.08rem;
  margin: 0 0.8vw;
  color: #ddd;
  content: "|";
}
.index-timedistanceWrap_2Dp_kzY {
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #999;
}
.index-timedistanceWrap_2Dp_kzY span:first-child:after {
  margin: 0 0.017067rem;
  margin: 0 0.170667vw;
  margin: 0 0.08rem;
  margin: 0 0.8vw;
  color: #ddd;
  content: "|";
}
.index-activityWrap_3mo1GyG {
  padding-left: 2.266667rem;
  padding-left: 22.666667vw;
}
.index-tagLine_1rJw_lq {
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 0.266667rem 0.266667rem 0 0;
  margin: 2.666667vw 2.666667vw 0 0;
}
.index-tagLine_1rJw_lq > span {
  margin-right: 0.133333rem;
  margin-right: 1.333333vw;
}
.index-sourceTag_32NKya6 {
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 0.266667rem;
}
.index-sourceTag_32NKya6 img,
.index-sourceTag_32NKya6 svg {
  height: 0.266667rem;
  height: 2.666667vw;
  width: 0.266667rem;
  width: 2.666667vw;
  margin-right: 0.08rem;
  margin-right: 0.8vw;
}
.index-dashedline_7B79b3W {
  width: 100%;
  height: 0.4rem;
  height: 4vw;
  padding-right: 0.266667rem;
  padding-right: 2.666667vw;
}
.index-activities_25AUDsx,
.index-supportWrap_2lTcxr2 {
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.index-activities_25AUDsx {
  position: relative;
  -webkit-justify-content: space-between;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-align-content: stretch;
  -ms-flex-line-pack: stretch;
  align-content: stretch;
  overflow: hidden;
}
.index-activityList_1wvwwUY {
  -webkit-flex: 1;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding-right: 0.266667rem;
  padding-right: 2.666667vw;
  overflow: hidden;
}
.index-actRow_2f_uNNA {
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 0.293333rem;
  line-height: 0.48rem;
  line-height: 4.8vw;
}
.index-actRow_2f_uNNA .index-iconWrap_1xJuKaY {
  display: inline-block;
  position: relative;
  margin-right: 0.16rem;
  margin-right: 1.6vw;
  height: 0.373333rem;
  height: 3.733333vw;
  width: 0.373333rem;
  width: 3.733333vw;
  vertical-align: middle;
}
.index-actRow_2f_uNNA .index-icon_1fBCxBk {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  height: 0.746667rem;
  height: 7.466667vw;
  width: 0.746667rem;
  width: 7.466667vw;
  font-size: 0.56rem;
  color: #fff;
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-justify-content: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  border-radius: 0.106667rem;
  border-radius: 1.066667vw;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}
.index-actRow_2f_uNNA .index-desc_JLha7Vr {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: middle;
}
.index-activityBtn_tMk-e1C {
  padding: 0.08rem 0.266667rem 0 0;
  padding: 0.8vw 2.666667vw 0 0;
  color: #999;
  text-align: right;
  font-size: 0.266667rem;
  line-height: 1;
}
.index-activityBtn_tMk-e1C svg {
  width: 0.173333rem;
  width: 1.733333vw;
  height: 0.173333rem;
  height: 1.733333vw;
  opacity: 0.9;
  margin-left: 0.026667rem;
  margin-left: 0.266667vw;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  fill: currentColor;
  will-change: transform;
}
.index-activityBtn_tMk-e1C svg.index-open_33dKeGm {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
.logo-categoryQuantity_uaoPHzl_0 {
  position: absolute;
  right: -0.186667rem;
  right: -1.866667vw;
  top: -0.186667rem;
  top: -1.866667vw;
  color: #fff;
  background-image: -webkit-gradient(
    linear,
    right top,
    left top,
    from(#ff7416),
    color-stop(98%, #ff3c15)
  );
  background-image: -webkit-linear-gradient(right, #ff7416, #ff3c15 98%);
  background-image: linear-gradient(-90deg, #ff7416, #ff3c15 98%);
  border-radius: 0.2rem;
  border-radius: 2vw;
  font-size: 0.266667rem;
  font-weight: 700;
  text-align: center;
  min-width: 0.373333rem;
  min-width: 3.733333vw;
  padding: 0 0.106667rem;
  padding: 0 1.066667vw;
  line-height: 0.373333rem;
  line-height: 3.733333vw;
}
</style>
