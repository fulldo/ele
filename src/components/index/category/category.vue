<template>
  <div class="mint-swipe foodentry">
    <swiper :options="swiperOption">
      <swiper-slide class="mint-swipe-items-wrap" v-for="(item, indexOfItem) in entryList" :key="indexOfItem">
        <router-link :to="{ name: 'entry', params: { id: entry.id }}" v-for="(entry, indexOfEntry) in entryList[indexOfItem]" :key="indexOfEntry">
          <div class="container">
            <img :src="encodeURI('https://fuss10.elemecdn.com/' + entry.image_hash + '?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/')">
            <!---->
          </div>
          <span class="title">{{entry.name}}</span>
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
// require styles
import 'swiper/dist/css/swiper.css';

import { swiper, swiperSlide } from 'vue-awesome-swiper';
import { getEntries } from '../../../api/home/home';
import { getImgUrl } from '../../../common/utils';

const MAX_LEN = 10;

export default {
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
        // autoplay: 3000,
        // loop: true
      },
      entryList: []
    };
  },
  created () {
    this.getEntrise();
  },
  methods: {
    getEntrise () {
      getEntries().then(response => {
        // 缓存entry列表
        let _entryList = response.data[0].entries;
        // 缓存处理好的entry列表，最后赋值给this.entryList
        let entryCacheList = [];
        // 分页并且处理数据
        while (_entryList.length) {
          let arrCache = _entryList.splice(0, MAX_LEN);
          entryCacheList.push(this.adapterData(arrCache));
        }
        this.entryList = entryCacheList;
      });
    },
    adapterData (arrCache) {
      return arrCache.map(element => {
        let imageUrl = element.image_hash;
        element.image_hash = getImgUrl(imageUrl);
        return element;
      });
    }
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>
<style>
.mint-swipe,
.mint-swipe-items-wrap {
  overflow: hidden;
  position: relative;
  height: 100%;
}
.foodentry {
  overflow: hidden;
  height: 4.72rem;
  height: 47.2vw;
  background-color: #fff;
  text-align: center;
}
.foodentry a {
  position: relative;
  float: left;
  margin-top: 0.293333rem;
  margin-top: 2.933333vw;
  width: 20%;
}
.foodentry .container {
  position: relative;
  display: inline-block;
  width: 1.2rem;
  width: 12vw;
  height: 1.2rem;
  height: 12vw;
}
.foodentry .container img {
  width: 100%;
  height: 100%;
}

.foodentry .title {
  display: block;
  margin-top: 0.133333rem;
  margin-top: 1.333333vw;
  color: #666;
  font-size: 0.32rem;
}
.swiper-pagination {
  position: static;
}
</style>
