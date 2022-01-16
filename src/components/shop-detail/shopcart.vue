<template>
  <div>
    <button type="button" class="menuview-essentialTip_2S-dD" style="display: none;">去点必选品</button>
    <footer class="cartview-cartview_xUNA6">
      <transition name="mask">
        <div @click="toggleCartStatus" class="cartview-cartmask_3rV-M" style="z-index: 10;" v-show="cartShow && cart.length"></div>
      </transition>
      <div :class="{'cartview-cartbody_15r9z':true,'cartview-cartbodyNoTip_3gVWf':true,'cartview-cartbodyOpen_b6tnR':cartShow&&cart.length}" style="z-index: 11;">
        <!-- <section class="discount-tip-discountTip_1IcZ7_0" style="" opened="true">满99减30</section> -->
        <div style="opacity: 1;">
          <div class="cartview-cartheader_342ET">
            <div class="cartview-headerText_3abxn">
              <span class="cartview-title_2uj0T">已选商品</span>
              <!---->
              <!---->
            </div>
            <a @click="clearCart" href="javascript:" ubt-click="101179" class="cartview-cartheaderRemove_2WfO3">
              <svg>
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-remove"></use>
              </svg>
              <span>清空</span>
            </a>
          </div>
          <div class="entityList-cartbodyScroller_GxeX__0">
            <!---->
            <ul>
              <li v-if="food.count > 0" class="entityList-entityrow_3f6oE_0" v-for="(food, foodKey) in cart" :key="foodKey">
                <span class="entityList-entityname_3EB7j_0">
                  <em class="entityList-name_3WPWD_0">{{food.name}}</em>
                  <!---->
                  <!---->
                  <p class="entityList-entityspecs_11gLJ_0"> </p>
                </span>
                <span class="entityList-entitytotal_1xh48_0">
                  <!---->
                  <span class="entityList-entitytotalDiscount_2OrZA_0">{{(food.price * food.count).toFixed(2)}}</span>
                </span>
                <span class="entityList-entitycartbutton_kxRm0_0">
                  <CartControl @foodAdd="foodAdd" @foodDel="foodDel" :food="getFood(food.id)" />
                </span>
              </li>
            </ul>
            <!---->
          </div>
        </div>
      </div>
      <div class="bottomNav-cartfooter_1qvQh_0" style="z-index: 11;">
        <span ref="cartLogo" @click="toggleCartStatus" role="button" aria-label="购物车" :attr-quantity="totalFoodCount" :class="{'bottomNav-carticon_2xfrl_0':true,'bottomNav-empty_-atZ2_0':!cart.length}"></span>
        <div role="button" aria-label="购物车有商品1件，共12.5元，配送费&amp;yen;9。" class="bottomNav-cartInfo_135aa_0">
          <p class="bottomNav-carttotal_1nOFY_0">
            <span>¥{{totalPrice}}</span>
            <!---->
          </p>
          <p class="bottomNav-cartdelivery_Gsj2c_0">{{piecewiseAgentFee.description}}</p>
        </div>
        <a @click="pay" role="button" href="javascript:;" :class="{'submit-btn-submitbutton_1dW2t_0':true, 'submit-btn-disabled_3y1tV_0':!isEnough}">
          <span>{{submitText}}</span>
        </a>
      </div>
    </footer>
    <!---->
  </div>
</template>
<script>
import CartControl from './cart-control';
import { mapGetters } from 'vuex';

export default {
  props: {
    cart: {
      type: Array
    },
    piecewiseAgentFee: {}
  },
  data () {
    return {
      cartShow: false
    };
  },
  computed: {
    /**
     * 选择的全部商品的总价
     */
    totalPrice () {
      let total = this.getDataFromCart('price');
      return total > 0 ? total.toFixed(2) : total;
    },
    /**
     * 选择的某一商品的总价
     */
    totalFoodCount () {
      return this.getDataFromCart('count');
    },
    /**
     * 是否满足起送价
     */
    isEnough () {
      return this.totalPrice > this.piecewiseAgentFee.rules[0].price;// 价格是否满足
    },
    /**
     * 提交按钮的文字
     */
    submitText () {
      if (this.isEnough) {
        return '去结算';
      } else if (this.cart.length === 0) {
        return `¥${this.piecewiseAgentFee.rules[0].price}起送`;
      } else {
        return `还差¥${(this.piecewiseAgentFee.rules[0].price - this.totalPrice).toFixed(2)}起送`;
      }
    },
    /**
     * 配送费
     */
    ...mapGetters([
      'distributioFee'
    ])
  },
  methods: {
    getDataFromCart (key) {
      let cart = this.cart;
      let sum = 0;
      for (let k = 0; k < cart.length; k++) {
        const foodInCart = cart[k];
        let base = 1;
        if (key === 'price') {
          base = foodInCart.count;
        }
        sum += (foodInCart[key] * base);
      }
      return sum;
    },
    toggleCartStatus () {
      if (!this.cart.length) {
        return;
      }
      this.cartShow = !this.cartShow;
    },
    getFood (id) {
      return this.$parent.getFood(id);
    },
    foodAdd (id) {
      this.$parent.foodAdd(id, true);
    },
    foodDel (id) {
      this.$parent.foodDel(id, false);
    },
    clearCart () {
      this.cartShow = false;
      this.$emit('clearCart');
    },
    /**
     * 用户付款
     */
    pay () {
      if (this.isEnough) {
        alert(`付款${(+this.totalPrice + this.distributioFee).toFixed(2)}元`);
        this.clearCart();
      }
    }
  },
  components: {
    CartControl
  }
};
</script>
<style>
.cartview-cartbodyOpen_b6tnR {
  -webkit-transform: translateZ(0) !important;
  transform: translateZ(0) !important;
  bottom: 1.28rem;
  bottom: 12.8vw;
}
.menuview-essentialTip_2S-dD {
  position: fixed;
  bottom: 2rem;
  bottom: 20vw;
  right: 0.133333rem;
  right: 1.333333vw;
  color: #fff;
  padding: 0.133333rem 0.266667rem;
  padding: 1.333333vw 2.666667vw;
  -webkit-box-shadow: 0 0.013333rem 0.026667rem #ddd;
  -webkit-box-shadow: 0 0.133333vw 0.266667vw #ddd;
  box-shadow: 0 0.013333rem 0.026667rem #ddd;
  box-shadow: 0 0.133333vw 0.266667vw #ddd;
  font-size: 0.32rem;
  font-weight: 700;
  background-color: #ff6000;
  -webkit-appearance: none;
  outline: none;
  border: 0.08rem solid #fff;
  border: 0.8vw solid #fff;
  border-radius: 0.666667rem;
  border-radius: 6.666667vw;
  z-index: 10;
  -webkit-transition: opacity 0.3s ease;
  transition: opacity 0.3s ease;
}
.cartview-cartview_xUNA6 {
  font-size: 0.426667rem;
}
.cartview-cartmask_3rV-M {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000;
  opacity: 0.4;
  -webkit-transition: opacity 0.3s ease;
  transition: opacity 0.3s ease;
}
.cartview-cartbody_15r9z {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  -webkit-transition: -webkit-transform 0.3s ease;
  transition: -webkit-transform 0.3s ease;
  transition: transform 0.3s ease;
  transition: transform 0.3s ease, -webkit-transform 0.3s ease;
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
  bottom: 1.813333rem;
  bottom: 18.133333vw;
}
.discount-tip-discountTip_1IcZ7_0 {
  background-color: #fffad6;
  border-top: 1px solid #f9e8a3;
  opacity: 0.96;
  line-height: 0.533333rem;
  line-height: 5.333333vw;
  font-size: 0.266667rem;
  text-align: center;
}
.cartview-cartheader_342ET,
.cartview-headerText_3abxn {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.cartview-cartheader_342ET {
  padding: 0 0.333333rem;
  padding: 0 3.333333vw;
  border-bottom: 1px solid #ddd;
  background-color: #eceff1;
  color: #666;
  height: 1.066667rem;
  height: 10.666667vw;
}
.cartview-headerText_3abxn {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.cartview-cartheader_342ET,
.cartview-headerText_3abxn {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.cartview-title_2uj0T {
  padding-left: 0.133333rem;
  padding-left: 1.333333vw;
  border-left: 0.093333rem solid #2395ff;
  border-left: 0.933333vw solid #2395ff;
  -webkit-box-flex: 0;
  -webkit-flex: none;
  -ms-flex: none;
  flex: none;
}
.cartview-cartheaderRemove_2WfO3 {
  -webkit-box-flex: 0;
  -webkit-flex: none;
  -ms-flex: none;
  flex: none;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  padding-left: 0.4rem;
  padding-left: 4vw;
  color: #666;
  text-decoration: none;
  font-size: 0.346667rem;
  line-height: 0.4rem;
  line-height: 4vw;
}
.cartview-cartheaderRemove_2WfO3 svg {
  width: 0.4rem;
  width: 4vw;
  height: 0.4rem;
  height: 4vw;
  fill: #ddd;
  margin-right: 0.08rem;
  margin-right: 0.8vw;
}
.entityList-cartbodyScroller_GxeX__0 {
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  max-height: 8rem;
  max-height: 80vw;
}
.menuview-menuview_2hUkG ul {
  padding: 0 0 1.066667rem;
  padding: 0 0 10.666667vw;
  list-style: none;
  -webkit-box-flex: 0;
  -webkit-flex: none;
  -ms-flex: none;
  flex: none;
}
.entityList-entityrow_3f6oE_0:not(:last-child) {
  border-bottom: 1px solid #eee;
}

.entityList-entityrow_3f6oE_0 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0.2rem 0.333333rem 0.2rem 0;
  padding: 2vw 3.333333vw 2vw 0;
  min-height: 1.466667rem;
  min-height: 14.666667vw;
  margin-left: 0.333333rem;
  margin-left: 3.333333vw;
}
.entityList-entityname_3EB7j_0 {
  -webkit-box-flex: 5.5;
  -webkit-flex: 5.5;
  -ms-flex: 5.5;
  flex: 5.5;
  line-height: normal;
}
.entityList-entityname_3EB7j_0 .entityList-name_3WPWD_0 {
  display: inline-block;
  font-style: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
  max-width: 4.666667rem;
  max-width: 46.666667vw;
}
.menuview-menuview_2hUkG h3,
.menuview-menuview_2hUkG p,
.menuview-menuview_2hUkG ul {
  margin: 0;
}
.entityList-entityspecs_11gLJ_0 {
  white-space: nowrap;
  line-height: 0.333333rem;
  line-height: 3.333333vw;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #999;
  font-size: 0.266667rem;
}
.entityList-entitytotal_1xh48_0 {
  -webkit-box-flex: 2.5;
  -webkit-flex: 2.5;
  -ms-flex: 2.5;
  flex: 2.5;
  color: #f60;
  text-align: right;
  white-space: nowrap;
  font-weight: 700;
}
.entityList-entitytotalDiscount_2OrZA_0:before {
  content: "\A5";
  font-size: 0.266667rem;
  color: currentColor;
}
.entityList-entitycartbutton_kxRm0_0 {
  -webkit-box-flex: 3;
  -webkit-flex: 3;
  -ms-flex: 3;
  flex: 3;
  text-align: right;
}
.cartbutton-entitybutton_2u6UF {
  display: inline-block;
  font-size: 0.346667rem;
  white-space: nowrap;
}
.cartbutton-entitybutton_2u6UF a {
  display: inline-block;
  padding: 0.093333rem;
  padding: 0.933333vw;
  vertical-align: middle;
  text-decoration: none;
}
[data-dpr="2"] .cartbutton-entitybutton_2u6UF svg {
  width: 40px;
  height: 40px;
}
.cartbutton-entitybutton_2u6UF svg {
  width: 20px;
  height: 20px;
  vertical-align: middle;
  fill: #2395ff;
}
.cartbutton-entityquantity_1LX01 {
  display: inline-block;
  text-align: center;
  color: #666;
  vertical-align: middle;
  font-size: 0.373333rem;
  min-width: 0.4rem;
  min-width: 4vw;
  max-width: 2em;
  overflow: hidden;
}
.cartbutton-entitybutton_2u6UF a {
  display: inline-block;
  padding: 0.093333rem;
  padding: 0.933333vw;
  vertical-align: middle;
  text-decoration: none;
}
[data-dpr="2"] .cartbutton-entitybutton_2u6UF svg {
  width: 40px;
  height: 40px;
}
.cartbutton-entitybutton_2u6UF svg {
  width: 20px;
  height: 20px;
  vertical-align: middle;
  fill: #2395ff;
}
.bottomNav-cartfooter_1qvQh_0 {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  padding-left: 2.106667rem;
  padding-left: 21.066667vw;
  background-color: rgba(61, 61, 63, 0.9);
  -webkit-backdrop-filter: blur(0.266667rem);
  -webkit-backdrop-filter: blur(2.666667vw);
  height: 1.28rem;
  height: 12.8vw;
}
.bottomNav-carticon_2xfrl_0 {
  position: absolute;
  left: 0.32rem;
  left: 3.2vw;
  bottom: 0.2rem;
  bottom: 2vw;
  width: 1.333333rem;
  width: 13.333333vw;
  height: 1.333333rem;
  height: 13.333333vw;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 100%;
  background-color: #3190e8;
  border: 0.133333rem solid #444;
  border: 1.333333vw solid #444;
  -webkit-box-shadow: 0 -0.08rem 0.053333rem 0 rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 -0.8vw 0.533333vw 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 -0.08rem 0.053333rem 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 -0.8vw 0.533333vw 0 rgba(0, 0, 0, 0.1);
  will-change: transform;
}
.bottomNav-carticon_2xfrl_0:before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNTggNTgiPjxkZWZzPjxmaWx0ZXIgaWQ9ImEiIHdpZHRoPSIyMDAlIiBoZWlnaHQ9IjIwMCUiIHg9Ii01MCUiIHk9Ii01MCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+PGZlT2Zmc2V0IGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz48ZmVHYXVzc2lhbkJsdXIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIiBzdGREZXZpYXRpb249IjEuNSIvPjxmZUNvbG9yTWF0cml4IGluPSJzaGFkb3dCbHVyT3V0ZXIxIiByZXN1bHQ9InNoYWRvd01hdHJpeE91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA4IDAiLz48ZmVNZXJnZT48ZmVNZXJnZU5vZGUgaW49InNoYWRvd01hdHJpeE91dGVyMSIvPjxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIvPjwvZmVNZXJnZT48L2ZpbHRlcj48cGF0aCBpZD0iYiIgZD0iTTcuNjE0IDQuMDUxYy0xLjA2Ni4wODYtMS40NTItLjM5OC0xLjc1Mi0xLjU4NEM1LjU2MiAxLjI4LjMzIDUuODguMzMgNS44OGwzLjcxIDE5LjQ3NmMwIC4xNDgtMS41NiA3LjUxNS0xLjU2IDcuNTE1LS40ODkgMi4xOS4yOTIgNC4yNyAzLjU2IDQuMzIgMCAwIDM2LjkxNy4wMTcgMzYuOTIuMDQ3IDEuOTc5LS4wMTIgMi45ODEtLjk5NSAzLjAxMy0zLjAzOS4wMy0yLjA0My0xLjA0NS0yLjk3OC0yLjk4Ny0yLjk5M0w4LjgzIDMxLjE5MnMuODYtMy44NjUgMS4wNzctMy44NjVjMCAwLTUuNzg4LjEyMiAzMi4wNjUtMS45NTYuNjA2LS4wMzMgMi4wMTgtLjc2NCAyLjI5OC0xLjg0OCAxLjExMy00LjMxNyA0LjAwOC0xMy4yNiA0LjQ1OC0xNS42NC45MzItNC45MjUgMi4wNjEtOC41NTgtNC4yOC03LjQwNSAwIDAtMzUuNzY4IDMuNDg3LTM2LjgzMyAzLjU3M3oiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWx0ZXI9InVybCgjYSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMikiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMDM4IDcuODA4KSI+PG1hc2sgaWQ9ImMiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2IiLz48L21hc2s+PHVzZSBmaWxsPSIjRkZGIiB4bGluazpocmVmPSIjYiIvPjxwYXRoIGZpbGw9IiMyMDczQzEiIGQ9Ik01My45NjIgNy43NzRsLTUuNzAxIDE5LjMwNS00MC43OCAxLjU3NHoiIG1hc2s9InVybCgjYykiIG9wYWNpdHk9Ii4xIi8+PC9nPjxwYXRoIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjYiIGQ9Ik05LjM3NCAxOC43MjJTNy44NjggMTEuMjgzIDcuMzIzIDguNzFDNi43NzggNi4xMzYgNS44NiA1LjMzIDMuOTc4IDQuNTIgMi4wOTYgMy43MTMuMzY3IDIuMjg2LjM2NyAyLjI4NiIvPjxjaXJjbGUgY3g9IjQ2IiBjeT0iNTEiIHI9IjQiIGZpbGw9IiNGRkYiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjUxIiByPSI0IiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)
    50% no-repeat;
  background-size: 0.6rem;
  background-size: 6vw;
  content: "";
}
.bottomNav-carticon_2xfrl_0:after {
  position: absolute;
  right: -0.12rem;
  right: -1.2vw;
  top: -0.133333rem;
  top: -1.333333vw;
  line-height: 1;
  background-image: -webkit-gradient(
    linear,
    right top,
    left top,
    from(#ff7416),
    color-stop(98%, #ff3c15)
  );
  background-image: -webkit-linear-gradient(right, #ff7416, #ff3c15 98%);
  background-image: linear-gradient(-90deg, #ff7416, #ff3c15 98%);
  color: #fff;
  border-radius: 0.32rem;
  border-radius: 3.2vw;
  padding: 0.053333rem 0.133333rem;
  padding: 0.533333vw 1.333333vw;
  content: attr(attr-quantity);
  font-size: 0.266667rem;
}
.bottomNav-cartInfo_135aa_0 {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.menuview-menuview_2hUkG h3,
.menuview-menuview_2hUkG p,
.menuview-menuview_2hUkG ul {
  margin: 0;
}
.bottomNav-carttotal_1nOFY_0 {
  text-align: left;
  font-size: 0.48rem;
  line-height: normal;
  color: #fff;
}
.bottomNav-cartdelivery_Gsj2c_0 {
  text-align: left;
  color: #999;
  font-size: 0.266667rem;
}
.submit-btn-submitbutton_1dW2t_0 {
  height: 100%;
  width: 2.8rem;
  width: 28vw;
  background-color: #4cd964;
  color: #fff;
  text-align: center;
  text-decoration: none;
  font-size: 0.4rem;
  font-weight: 700;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  line-height: 1.28rem;
  line-height: 12.8vw;
}
.submit-btn-submitbutton_1dW2t_0.submit-btn-disabled_3y1tV_0 {
  background-color: #535356;
}
.bottomNav-carticon_2xfrl_0:before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNTggNTgiPjxkZWZzPjxmaWx0ZXIgaWQ9ImEiIHdpZHRoPSIyMDAlIiBoZWlnaHQ9IjIwMCUiIHg9Ii01MCUiIHk9Ii01MCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+PGZlT2Zmc2V0IGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz48ZmVHYXVzc2lhbkJsdXIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIiBzdGREZXZpYXRpb249IjEuNSIvPjxmZUNvbG9yTWF0cml4IGluPSJzaGFkb3dCbHVyT3V0ZXIxIiByZXN1bHQ9InNoYWRvd01hdHJpeE91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA4IDAiLz48ZmVNZXJnZT48ZmVNZXJnZU5vZGUgaW49InNoYWRvd01hdHJpeE91dGVyMSIvPjxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIvPjwvZmVNZXJnZT48L2ZpbHRlcj48cGF0aCBpZD0iYiIgZD0iTTcuNjE0IDQuMDUxYy0xLjA2Ni4wODYtMS40NTItLjM5OC0xLjc1Mi0xLjU4NEM1LjU2MiAxLjI4LjMzIDUuODguMzMgNS44OGwzLjcxIDE5LjQ3NmMwIC4xNDgtMS41NiA3LjUxNS0xLjU2IDcuNTE1LS40ODkgMi4xOS4yOTIgNC4yNyAzLjU2IDQuMzIgMCAwIDM2LjkxNy4wMTcgMzYuOTIuMDQ3IDEuOTc5LS4wMTIgMi45ODEtLjk5NSAzLjAxMy0zLjAzOS4wMy0yLjA0My0xLjA0NS0yLjk3OC0yLjk4Ny0yLjk5M0w4LjgzIDMxLjE5MnMuODYtMy44NjUgMS4wNzctMy44NjVjMCAwLTUuNzg4LjEyMiAzMi4wNjUtMS45NTYuNjA2LS4wMzMgMi4wMTgtLjc2NCAyLjI5OC0xLjg0OCAxLjExMy00LjMxNyA0LjAwOC0xMy4yNiA0LjQ1OC0xNS42NC45MzItNC45MjUgMi4wNjEtOC41NTgtNC4yOC03LjQwNSAwIDAtMzUuNzY4IDMuNDg3LTM2LjgzMyAzLjU3M3oiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWx0ZXI9InVybCgjYSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMikiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMDM4IDcuODA4KSI+PG1hc2sgaWQ9ImMiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2IiLz48L21hc2s+PHVzZSBmaWxsPSIjRkZGIiB4bGluazpocmVmPSIjYiIvPjxwYXRoIGZpbGw9IiMyMDczQzEiIGQ9Ik01My45NjIgNy43NzRsLTUuNzAxIDE5LjMwNS00MC43OCAxLjU3NHoiIG1hc2s9InVybCgjYykiIG9wYWNpdHk9Ii4xIi8+PC9nPjxwYXRoIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjYiIGQ9Ik05LjM3NCAxOC43MjJTNy44NjggMTEuMjgzIDcuMzIzIDguNzFDNi43NzggNi4xMzYgNS44NiA1LjMzIDMuOTc4IDQuNTIgMi4wOTYgMy43MTMuMzY3IDIuMjg2LjM2NyAyLjI4NiIvPjxjaXJjbGUgY3g9IjQ2IiBjeT0iNTEiIHI9IjQiIGZpbGw9IiNGRkYiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjUxIiByPSI0IiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)
    50% no-repeat;
  background-size: 0.6rem;
  background-size: 6vw;
  content: "";
}
.cartview-cartbodyNoTip_3gVWf {
  bottom: 1.28rem;
  bottom: 12.8vw;
}
.bottomNav-carticon_2xfrl_0.bottomNav-empty_-atZ2_0:before {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNTggNTgiPjxkZWZzPjxmaWx0ZXIgaWQ9ImEiIHdpZHRoPSIyMDAlIiBoZWlnaHQ9IjIwMCUiIHg9Ii01MCUiIHk9Ii01MCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+PGZlT2Zmc2V0IGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz48ZmVHYXVzc2lhbkJsdXIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIiBzdGREZXZpYXRpb249IjEuNSIvPjxmZUNvbG9yTWF0cml4IGluPSJzaGFkb3dCbHVyT3V0ZXIxIiByZXN1bHQ9InNoYWRvd01hdHJpeE91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA4IDAiLz48ZmVNZXJnZT48ZmVNZXJnZU5vZGUgaW49InNoYWRvd01hdHJpeE91dGVyMSIvPjxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIvPjwvZmVNZXJnZT48L2ZpbHRlcj48cGF0aCBpZD0iYiIgZD0iTTcuNjE0IDQuMDUxYy0xLjA2Ni4wODYtMS40NTItLjM5OC0xLjc1Mi0xLjU4NEM1LjU2MiAxLjI4LjMzIDUuODguMzMgNS44OGwzLjcxIDE5LjQ3NmMwIC4xNDgtMS41NiA3LjUxNS0xLjU2IDcuNTE1LS40ODkgMi4xOS4yOTIgNC4yNyAzLjU2IDQuMzIgMCAwIDM2LjkxNy4wMTcgMzYuOTIuMDQ3IDEuOTc5LS4wMTIgMi45ODEtLjk5NSAzLjAxMy0zLjAzOS4wMy0yLjA0My0xLjA0NS0yLjk3OC0yLjk4Ny0yLjk5M0w4LjgzIDMxLjE5MnMuODYtMy44NjUgMS4wNzctMy44NjVjMCAwLTUuNzg4LjEyMiAzMi4wNjUtMS45NTYuNjA2LS4wMzMgMi4wMTgtLjc2NCAyLjI5OC0xLjg0OCAxLjExMy00LjMxNyA0LjAwOC0xMy4yNiA0LjQ1OC0xNS42NC45MzItNC45MjUgMi4wNjEtOC41NTgtNC4yOC03LjQwNSAwIDAtMzUuNzY4IDMuNDg3LTM2LjgzMyAzLjU3M3oiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWx0ZXI9InVybCgjYSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMikiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMDM4IDcuODA4KSI+PG1hc2sgaWQ9ImMiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2IiLz48L21hc2s+PHVzZSBmaWxsPSIjNUY1RjYzIiB4bGluazpocmVmPSIjYiIvPjxwYXRoIGZpbGw9IiNFQkVFRjMiIGQ9Ik01My45NjIgNy43NzRsLTUuNzAxIDE5LjMwNS00MC43OCAxLjU3NHoiIG1hc2s9InVybCgjYykiIG9wYWNpdHk9Ii4wNSIvPjwvZz48cGF0aCBzdHJva2U9IiM1RjVGNjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSI2IiBkPSJNOS4zNzQgMTguNzIyUzcuODY4IDExLjI4MyA3LjMyMyA4LjcxQzYuNzc4IDYuMTM2IDUuODYgNS4zMyAzLjk3OCA0LjUyIDIuMDk2IDMuNzEzLjM2NyAyLjI4Ni4zNjcgMi4yODYiLz48Y2lyY2xlIGN4PSI0NiIgY3k9IjUxIiByPSI0IiBmaWxsPSIjNUY1RjYzIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSI1MSIgcj0iNCIgZmlsbD0iIzVGNUY2MyIvPjwvZz48L3N2Zz4=);
}
.bottomNav-carticon_2xfrl_0.bottomNav-empty_-atZ2_0 {
  background-image: -webkit-radial-gradient(
    circle,
    #363636 0.626667rem,
    #444 0
  );
  background-image: -webkit-radial-gradient(circle, #363636 6.266667vw, #444 0);
  background-image: radial-gradient(circle, #363636 0.626667rem, #444 0);
  background-image: radial-gradient(circle, #363636 6.266667vw, #444 0);
}
.bottomNav-carticon_2xfrl_0.bottomNav-empty_-atZ2_0:after {
  visibility: hidden;
}
.addingfood {
  animation: addingFood 1s linear infinite;
}
@keyframes addingFood {
  0% {
    transform: scale(1);
  }
  49%{
    transform: scale(1);
  }
  50% {
    transform: scale(0.8);
  }
  67% {
    transform: scale(1.1);
  }
  84% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
.mask-enter {
  opacity: 0;
}
.mask-enter-to {
  opacity: 0.4;
}
.mask-leave {
  opacity: 0.4;
}
.mask-leave-to {
  opacity: 0;
}
</style>
