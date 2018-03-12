<template>
  <div class="app-dps8r_1">
    <div>
      <div class="shop-header-3Zr-__0">
        <nav class="shop-header-1fspV_0 shop-header-1swXn_0" :style="'background-image: url(https://fuss10.elemecdn.com/' + getLogoUrl(restaurant.image_path) + '?imageMogr/format/webp/thumbnail/!40p/blur/50x40/);'">
          <router-link :to="{path:'/',name:''}">
            <svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left"></use>
            </svg>
          </router-link>
        </nav>
        <div class="shop-header-1wVeP_0"><img class="shop-header-2hPPi_0" :src="'https://fuss10.elemecdn.com/' + getLogoUrl(restaurant.image_path) + '?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/'">
          <div class="shop-header-2EhEt_0">
            <h2 class="shop-header-3df9k_0">
              <span v-if="restaurant.is_premium" class="mini-tag-1Lyw4_0 shop-header-2D_B8_0">品牌
                <span class="shop-header-3O-AN_0 mini-tag-1ezSQ_0">品牌</span>
              </span>
              <span class="shop-header-3pPdD_0">{{restaurant.name}}</span>
              <i class="shop-header-2iVYi_0" @click="toggleShopInfoPopup"></i>
            </h2>
            <div class="shop-header-1SsQo_0">
              <span class="shop-header-qCsXg_0">{{restaurant.rating.toFixed(1)}}</span>
              <span class="shop-header-qCsXg_0">月售{{restaurant.rating_count}}单</span>
              <span class="shop-header-qCsXg_0">{{restaurant.delivery_mode.text}}
                <span>约{{restaurant.order_lead_time}}分钟</span>
              </span>
              <span class="shop-header-qCsXg_0">距离{{(restaurant.distance / 1000).toFixed()}}km</span>
            </div>
            <p class="shop-header-2JWG__0">{{restaurant.promotion_info}}</p>
          </div>
        </div>
        <div ubt-click="101178" class="shop-header-2GBKf_0" v-if="restaurant.activities[0]">
          <div class="shop-header-3clEd_0">
            <div class="activity-1hPHa_0 activity-2JHFT_0">
              <span class="mini-tag-1Lyw4_0 activity-N5WvH_0" :style="'background-color: #' + restaurant.activities[0].icon_color +';'">{{restaurant.activities[0].icon_name}}
                <span class="activity-yP-9y_0 mini-tag-1ezSQ_0">{{restaurant.activities[0].icon_name}}</span>
              </span>
              <span class="activity-3dUjU_0">{{restaurant.activities[0].tips}}</span>
            </div>
          </div>
          <div class="shop-header-2yEPX_0" @click="toggleActivitysPopup">
            {{restaurant.activities.length}}个优惠
          </div>
        </div>
        <div class="shop-header-18anF_0"></div>
      </div>
      <div wid="SHOP_BRIEF" class="brief-modal-1UPSd_0" v-if="isShowShopInfo">
        <transition name="shop-info">
          <div class="brief-modal-2Bnq8_0" v-if="isShowShopInfo2">
            <h2 class="brief-modal-3q0eZ_0">
              <i class="brief-modal-hfXEr_0" v-if="restaurant.is_premium">品牌</i>{{restaurant.name}}
            </h2>
            <ul class="brief-modal-2xF4D_0">
              <li class="brief-modal-2UtID_0">
                <h3 class="brief-modal-2BFwj_0">{{restaurant.rating.toFixed(1)}}</h3>
                <p class="brief-modal-1qI74_0">评分</p>
              </li>
              <li class="brief-modal-2UtID_0">
                <h3 class="brief-modal-2BFwj_0">{{restaurant.rating_count}}单</h3>
                <p class="brief-modal-1qI74_0">月售</p>
              </li>
              <li class="brief-modal-2UtID_0">
                <h3 class="brief-modal-2BFwj_0">{{restaurant.delivery_mode.text}}</h3>
                <p class="brief-modal-1qI74_0">约{{restaurant.order_lead_time}}分钟</p>
              </li>
              <li class="brief-modal-2UtID_0">
                <h3 class="brief-modal-2BFwj_0">{{restaurant.piecewise_agent_fee.rules[0].fee}}元</h3>
                <p class="brief-modal-1qI74_0">配送费</p>
              </li>
              <li class="brief-modal-2UtID_0">
                <h3 class="brief-modal-2BFwj_0">{{(restaurant.distance / 1000).toFixed()}}km</h3>
                <p class="brief-modal-1qI74_0">距离</p>
              </li>
            </ul>
            <!---->
            <h3 class="brief-modal-1DSTM_0">
              <span>公告</span>
            </h3>
            <div class="brief-modal-3xOZX_0">{{restaurant.promotion_info}}</div>
          </div>
        </transition>
        <div @click="toggleShopInfoPopup" class="brief-modal-D3-nE_0" style="background-image: url(&quot;https://fuss10.elemecdn.com/8/ba/bcfa8cc62b20e044bd2ea1c1c7f3dpng.png?imageMogr/format/webp/&quot;);"></div>
        <div @click="toggleShopInfoPopup" class="brief-modal-19pmB_0"></div>
      </div>

      <div class="activity-sheet-1DLzO_0" v-if="isShowAllactivitys">
        <transition name="shop-active">
          <div class="activity-sheet-P20dK_0" v-if="isShowAllactivitys2">
            <h2 class="activity-sheet-16wGp_0">优惠活动</h2>
            <div class="activity-sheet-1yI58_0">
              <div class="activity-1hPHa_0 activity-25cwN_0" v-for="(resItem, resKey) in restaurant.activities" :key="resKey">
                <span class="mini-tag-1Lyw4_0 activity-N5WvH_0" :style="'background-color: #' + resItem.icon_color +';'">{{resItem.icon_name}}
                  <span class="activity-yP-9y_0 mini-tag-1ezSQ_0">{{resItem.icon_name}}</span>
                </span>
                <span class="activity-3dUjU_0">{{resItem.tips}}</span>
              </div>
            </div>
            <div class="activity-sheet-33EGU_0" @click="toggleActivitysPopup">
              <svg>
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#gray-close"></use>
              </svg>
            </div>
          </div>
        </transition>
        <div class="activity-sheet-27F-l_0" @click="toggleActivitysPopup"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { getImgUrl } from '../../common/utils';
export default {
  props: {
    restaurant: {
      type: Object
    }
  },
  data () {
    return {
      isShowAllactivitys: false,
      isShowAllactivitys2: false,
      isShowShopInfo: false,
      isShowShopInfo2: false
    };
  },
  methods: {
    /**
     * 活动列表弹窗
     */
    toggleActivitysPopup () {
      this.isShowAllactivitys = !this.isShowAllactivitys;
      setTimeout(() => {
        this.isShowAllactivitys2 = !this.isShowAllactivitys2;
      }, 0);
    },
    /**
     * 商户信息弹窗
     */
    toggleShopInfoPopup () {
      this.isShowShopInfo = !this.isShowShopInfo;
      setTimeout(() => {
        this.isShowShopInfo2 = !this.isShowShopInfo2;
      }, 0);
    },
    /**
     * 格式化图片url
     */
    getLogoUrl (url) {
      return getImgUrl(url);
    }
  }
};
</script>
<style>
@keyframes shop-info {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(0.2);
  }
}
.shop-info-enter-active {
  transition: transform 0.3s;
  transform-origin: 50% 50%;
}
.shop-info-enter {
  transform: scale(0.5);
}
.shop-info-enter-to {
  transform: scale(1);
}
.shop-active-enter-active {
  transition: transform 0.3s;
  /* transform-origin: 100% 100%; */
}
.shop-active-enter {
  transform: translateY(100%);
}
.shop-active-enter-to {
  transform: translateY(0);
}
.app-1TQsf_1 {
  width: 100%;
  height: 100vh;
  padding-right: 0.226667rem;
  padding-right: 2.266667vw;
  box-sizing: content-box;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.shop-header-3Zr-__0 {
  padding-bottom: 0.213333rem;
  padding-bottom: 2.133333vw;
  color: #333;
  font-size: 0.293333rem;
  background-color: #fff;
}
.shop-header-1swXn_0 {
  background-size: cover;
  background-repeat: no-repeat;
}
.shop-header-1fspV_0 {
  padding: 0.106667rem 0.266667rem;
  padding: 1.066667vw 2.666667vw;
  height: 1.6rem;
  height: 16vw;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: justify;
  align-items: justify;
  position: relative;
}
.shop-header-1swXn_0:before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(119, 103, 137, 0.43);
}
a {
  outline: 0;
  color: inherit;
  text-decoration: none;
}
.shop-header-1fspV_0 svg {
  position: absolute;
  width: 0.666667rem;
  width: 6.666667vw;
  height: 0.666667rem;
  height: 6.666667vw;
}
.shop-header-1wVeP_0 {
  padding: 0.8rem 0.4rem 0;
  padding: 8vw 4vw 0;
  position: relative;
  display: -webkit-flex;
  display: flex;
  background-color: #fff;
  text-align: center;
}
.shop-header-2hPPi_0 {
  width: 1.733333rem;
  width: 17.333333vw;
  height: 1.733333rem;
  height: 17.333333vw;
  border-radius: 0.053333rem;
  border-radius: 0.533333vw;
  box-shadow: 0 0 0.04rem 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 0.4vw 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -1rem;
  margin-left: -10vw;
  margin-top: -1.2rem;
  margin-top: -12vw;
}
img {
  max-width: 100%;
}
.shop-header-2EhEt_0 {
  -webkit-flex: 1;
  flex: 1;
  width: 7.2rem;
  width: 72vw;
}
.shop-header-3df9k_0 {
  margin: 0;
  font-size: 0.546667rem;
  line-height: 1.2em;
  font-weight: 700;
  white-space: nowrap;
  position: relative;
  padding-right: 0.266667rem;
  padding-right: 2.666667vw;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
}
.shop-header-3df9k_0 .shop-header-2D_B8_0 {
  margin-right: 0.16rem;
  margin-right: 1.6vw;
}
.shop-header-2D_B8_0 {
  border-radius: 0.026667rem;
  border-radius: 0.266667vw;
  background-image: linear-gradient(90deg, #fff100, #ffe339);
  width: 0.96rem;
  width: 9.6vw;
  height: 0.48rem;
  height: 4.8vw;
}
.mini-tag-1Lyw4_0 {
  position: relative;
  font-size: 0.266667rem;
  color: transparent;
  white-space: nowrap;
}
.shop-header-3O-AN_0 {
  color: #6a3709;
  font-style: normal;
  font-weight: 700;
  font-size: 0.64rem !important;
}
.mini-tag-1ezSQ_0 {
  position: absolute;
  left: 0;
  top: 0;
  right: -100%;
  bottom: -100%;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  font-size: 0.533333rem;
}
.shop-header-3df9k_0 .shop-header-3pPdD_0 {
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
}
.shop-header-3df9k_0 .shop-header-2iVYi_0 {
  width: 0.4rem;
  width: 4vw;
  position: relative;
  height: 0.653333rem;
  height: 6.533333vw;
}
.shop-header-3df9k_0 .shop-header-2iVYi_0:after {
  content: "";
  border-style: solid;
  border-width: 0.146667rem 0 0.146667rem 0.173333rem;
  border-width: 1.466667vw 0 1.466667vw 1.733333vw;
  border-color: transparent transparent transparent rgba(0, 0, 0, 0.67);
  position: absolute;
  left: 0.16rem;
  left: 1.6vw;
  top: 0.213333rem;
  top: 2.133333vw;
}
.shop-header-1SsQo_0 {
  white-space: nowrap;
  height: 0.32rem;
  height: 3.2vw;
  margin-top: 0.173333rem;
  margin-top: 1.733333vw;
  font-size: 0.293333rem;
  color: #333;
}
.shop-header-qCsXg_0:not(:last-child):after {
  content: " \B7 ";
  opacity: 0.2;
}
.shop-header-2JWG__0 {
  width: 5.813333rem;
  width: 58.133333vw;
  font-size: 0.293333rem;
  font-weight: 300;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0.226667rem auto 0.266667rem;
  margin: 2.266667vw auto 2.666667vw;
  padding: 0;
  white-space: nowrap;
}
.shop-header-2GBKf_0 {
  display: -webkit-flex;
  display: flex;
  border-radius: 1px;
  border: 1px solid #eee;
  padding: 0.133333rem 0.213333rem;
  padding: 1.333333vw 2.133333vw;
  font-size: 0.293333rem;
  color: #666;
  margin: 0 0.64rem;
  margin: 0 6.4vw;
  -webkit-align-items: center;
  align-items: center;
}
.shop-header-3clEd_0 {
  -webkit-flex: 1;
  flex: 1;
  overflow: hidden;
}
.activity-2JHFT_0 {
  -webkit-align-items: center;
  align-items: center;
}

.activity-1hPHa_0 {
  display: -webkit-flex;
  display: flex;
  font-size: 0.346667rem;
  -webkit-align-items: center;
  align-items: center;
}
.activity-N5WvH_0 {
  margin-right: 0.16rem;
  margin-right: 1.6vw;
  font-size: 0.24rem;
  padding: 0.053333rem 0.12rem;
  padding: 0.533333vw 1.2vw;
  height: 0.346667rem;
  height: 3.466667vw;
  display: inline-block;
  box-sizing: border-box;
  border-radius: 0.026667rem;
  border-radius: 0.266667vw;
}
.mini-tag-1Lyw4_0 {
  position: relative;
  font-size: 0.266667rem;
  color: transparent;
  white-space: nowrap;
}
.activity-yP-9y_0 {
  font-size: 0.48rem !important;
  color: #fff;
}
.mini-tag-1ezSQ_0 {
  position: absolute;
  left: 0;
  top: 0;
  right: -100%;
  bottom: -100%;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  font-size: 0.533333rem;
}
.activity-2JHFT_0 .activity-3dUjU_0 {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.shop-header-2yEPX_0 {
  width: 1.626667rem;
  width: 16.266667vw;
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
  position: relative;
  padding-right: 0.293333rem;
  padding-right: 2.933333vw;
  text-align: right;
}
.shop-header-2yEPX_0:after {
  content: "";
  display: block;
  border-style: solid;
  border-width: 0.106667rem 0.093333rem 0;
  border-width: 1.066667vw 0.933333vw 0;
  border-color: rgba(0, 0, 0, 0.57) transparent transparent;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 0;
}
.shop-header-18anF_0 {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  margin-top: 0.213333rem;
  margin-top: 2.133333vw;
}

.brief-modal-1UPSd_0 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;
  z-index: 52;
  -webkit-flex-direction: column;
  flex-direction: column;
}
.brief-modal-2Bnq8_0 {
  position: relative;
  width: 80%;
  max-height: 8.533333rem;
  max-height: 85.333333vw;
  padding: 0.706667rem 0.666667rem 0.746667rem;
  padding: 7.066667vw 6.666667vw 7.466667vw;
  border-radius: 0.106667rem;
  border-radius: 1.066667vw;
  overflow: hidden;
  background: #fff;
  z-index: 99;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  /* transition: -webkit-transform 0.2s;
  transition: transform 0.2s;
  transition: transform 0.2s, -webkit-transform 0.2s;
  will-change: transform; */
  animation: shop-info 0.2s linear 0;
}
.brief-modal-3q0eZ_0 {
  font-size: 0.6rem;
  line-height: 0.666667rem;
  line-height: 6.666667vw;
  color: #333;
  text-align: center;
  font-weight: bolder;
}
.brief-modal-3q0eZ_0 .brief-modal-hfXEr_0 {
  position: relative;
  top: -0.053333rem;
  top: -0.533333vw;
  margin-right: 0.16rem;
  margin-right: 1.6vw;
}

.brief-modal-hfXEr_0 {
  border-radius: 0.026667rem;
  border-radius: 0.266667vw;
  background-image: linear-gradient(90deg, #fff100, #ffe339);
  color: #6a3709;
  font-style: normal;
  padding: 0.08rem;
  padding: 0.8vw;
  font-weight: 700;
  font-size: 0.32rem;
}
.brief-modal-2xF4D_0 {
  display: -webkit-flex;
  display: flex;
  margin: 0.506667rem -0.666667rem 0;
  margin: 5.066667vw -6.666667vw 0;
}
.brief-modal-2xF4D_0 .brief-modal-2UtID_0 {
  -webkit-flex: 1;
  flex: 1;
  text-align: center;
}
.brief-modal-2xF4D_0 .brief-modal-2UtID_0 .brief-modal-2BFwj_0 {
  font-size: 0.4rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.16rem;
  margin-bottom: 1.6vw;
}
.brief-modal-2xF4D_0 .brief-modal-2UtID_0 .brief-modal-1qI74_0 {
  font-size: 0.293333rem;
  color: #999;
}
.brief-modal-1DSTM_0 {
  position: relative;
  text-align: center;
  margin: 0.48rem auto 0.266667rem;
  margin: 4.8vw auto 2.666667vw;
  width: 2.026667rem;
  width: 20.266667vw;
  background-image: linear-gradient(90deg, #fff, #333 50%, #fff);
  background-size: 100% 1px;
}
.brief-modal-1DSTM_0,
.brief-modal-D3-nE_0 {
  background-position: 50%;
  background-repeat: no-repeat;
}
.brief-modal-1DSTM_0 span {
  font-size: 0.32rem;
  padding: 0 0.106667rem;
  padding: 0 1.066667vw;
  color: #999;
  background-color: #fff;
}
.brief-modal-3xOZX_0 {
  text-align: left;
  font-size: 0.346667rem;
  line-height: 1.54;
  color: #333;
  max-height: 2.666667rem;
  max-height: 26.666667vw;
  overflow-y: auto;
}
.brief-modal-1DSTM_0,
.brief-modal-D3-nE_0 {
  background-position: 50%;
  background-repeat: no-repeat;
}
.brief-modal-D3-nE_0 {
  margin-top: 0.8rem;
  margin-top: 8vw;
  width: 0.8rem;
  width: 8vw;
  height: 0.8rem;
  height: 8vw;
  background-size: 100%;
  z-index: 2;
}
.brief-modal-19pmB_0 {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.activity-sheet-1DLzO_0 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
}
.activity-sheet-P20dK_0 {
  position: absolute;
  background-color: #f5f5f5;
  box-shadow: 0 -1px 5px 0 rgba(0, 0, 0, 0.4);
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 0.533333rem 0.693333rem;
  padding: 5.333333vw 6.933333vw;
  box-sizing: border-box;
  /* transition: -webkit-transform 0.2s;
  transition: transform 0.2s;
  transition: transform 0.2s, -webkit-transform 0.2s;
  will-change: transform; */
}
.activity-sheet-P20dK_0 .activity-sheet-16wGp_0 {
  text-align: center;
  font-size: 0.453333rem;
  font-weight: 600;
  margin-bottom: 0.413333rem;
  margin-bottom: 4.133333vw;
}
.activity-sheet-1yI58_0 {
  height: 5.08rem;
  height: 50.8vw;
  overflow-y: scroll;
}
.activity-25cwN_0 {
  margin-bottom: 0.306667rem;
  margin-bottom: 3.066667vw;
}
.activity-1hPHa_0 {
  display: -webkit-flex;
  display: flex;
  font-size: 0.346667rem;
  -webkit-align-items: center;
  align-items: center;
}
.activity-25cwN_0 .activity-N5WvH_0 {
  height: 0.426667rem;
  height: 4.266667vw;
  padding: 0.053333rem 0.16rem;
  padding: 0.533333vw 1.6vw;
}
.activity-N5WvH_0 {
  margin-right: 0.16rem;
  margin-right: 1.6vw;
  font-size: 0.24rem;
  padding: 0.053333rem 0.12rem;
  padding: 0.533333vw 1.2vw;
  height: 0.346667rem;
  height: 3.466667vw;
  display: inline-block;
  box-sizing: border-box;
  border-radius: 0.026667rem;
  border-radius: 0.266667vw;
}
.mini-tag-1Lyw4_0 {
  position: relative;
  font-size: 0.266667rem;
  color: transparent;
  white-space: nowrap;
}
.activity-25cwN_0 .activity-yP-9y_0 {
  font-size: 0.64rem !important;
}
.activity-yP-9y_0 {
  font-size: 0.48rem !important;
  color: #fff;
}
.mini-tag-1ezSQ_0 {
  position: absolute;
  left: 0;
  top: 0;
  right: -100%;
  bottom: -100%;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  font-size: 0.533333rem;
}
.activity-25cwN_0 .activity-3dUjU_0 {
  font-size: 0.346667rem;
  line-height: 1.38;
}
.activity-sheet-33EGU_0 {
  position: absolute;
  height: 0.64rem;
  height: 6.4vw;
  width: 0.64rem;
  width: 6.4vw;
  right: 0.266667rem;
  right: 2.666667vw;
  top: 0.266667rem;
  top: 2.666667vw;
}
.activity-sheet-33EGU_0 svg {
  height: 100%;
  width: 100%;
}
.activity-sheet-27F-l_0 {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
