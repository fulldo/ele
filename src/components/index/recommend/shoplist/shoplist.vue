<template>
  <section class="shoplist" @scroll.native="scrollHandle">
    <Item @enterDetail="itemClick" v-for="(item, key) in restaurantList" :key="key" :restaurant="item.restaurant" />
    <div class="LoadMore-wrapper_3WFhfHy" ref="bottomBlock">
      <!---->
      <svg class="LoadMore-icon_cLUJieG LoadMore-animate_ej_aD1y" :class="{loading:loading}" v-show="hasMore">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#loading.001898b"></use>
      </svg>
      <span>{{hasMore ? '正在加载...': '没有更多了...'}}</span>
      <!---->
      <!---->
    </div>
  </section>
</template>
<script>
import Item from '../item/item';
import { getRestaurants } from '../../../../api/home/home';

export default {
  data () {
    return {
      restaurantList: [],
      loading: true,
      hasMore: true,
      currPage: 0
    };
  },
  methods: {
    getRestaurants (offset) {
      getRestaurants(offset).then((response) => {
        let items = response.data.items;
        if (!items.length) {
          this.hasMore = false;
          return;
        }
        this.restaurantList.push(...response.data.items);
      });
    },
    scrollHandle () {
      const bottomBlock = this.$refs.bottomBlock;
      if (!bottomBlock) {
        return;
      }
      console.log('scroll');
      const winHeight = window.innerHeight;// 屏幕高度
      const bottomBlockTop = bottomBlock.getBoundingClientRect().top;// “加载更多”距离屏幕顶部的高度
      if (winHeight > bottomBlockTop && bottomBlockTop > 0) {
        // 当winHeight > bottomBlockTop，证明已经接近底部
        // 如果加载完毕没有更多数据就return
        if (!this.hasMore) {
          return;
        }
        console.log('到底');
        this.loading = true;
        // 加载下一页
        this.getRestaurants(++this.currPage);
      }
    },
    onScroll () {
      window.onscroll = () => {
        // 节流
        if (this._timeId) {
          clearTimeout(this._timeId);
        }
        this._timeId = setTimeout(() => {
          this.scrollHandle();
        }, 50);
      };
    },
    removeScroll () {
      window.onscroll = null;
    },
    itemClick (id) {
      this.$router.push({
        name: 'shop',
        params: {
          id
        }
      });
    }
  },
  created () {
    // 加载首页
    this.getRestaurants(this.currPage);
    // 绑定滚动事件
    this.$nextTick().then(() => {
      this.onScroll();
    });
  },
  destroyed () {
    this.removeScroll();
  },
  components: {
    Item
  }
};
</script>
<style>
.shoplist {
  background-color: #fff;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zd…J6TTgwOCAxODRoMjQydjMwSDgwOHpNOTE3IDQ4aDEzM3YzN0g5MTd6Ii8+PC9nPjwvc3ZnPg==);
  background-size: 100% auto;
}
.LoadMore-wrapper_3WFhfHy {
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
  min-height: 1.066667rem;
  min-height: 10.666667vw;
  background-color: #fff;
  color: #555;
  font-size: 0.346667rem;
}
.LoadMore-icon_cLUJieG {
  display: block;
  margin-right: 0.2rem;
  margin-right: 2vw;
  width: 0.4rem;
  width: 4vw;
  height: 0.4rem;
  height: 4vw;
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  will-change: transform;
}
.LoadMore-icon_cLUJieG.loading {
  animation: rotate 0.5s linear infinite;
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(180deg);
  }
}
</style>
