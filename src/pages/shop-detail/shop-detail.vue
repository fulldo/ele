<template>
  <div>
    <div v-if="loading" data-server-rendered="true" class="shell"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNzUgNjAzIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yKSI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTIgNjloMzc1djUzNEgyeiIvPjxwYXRoIGZpbGw9IiNFRUUiIGQ9Ik0yIDBoMzc1djY5SDJ6Ii8+PHJlY3Qgd2lkdGg9IjY2IiBoZWlnaHQ9IjY2IiB4PSIxNTciIHk9IjIzIiBmaWxsPSIjRjZGNkY2IiByeD0iMiIvPjxwYXRoIGZpbGw9IiNFRUUiIGQ9Ik02NSA5OWgyNTB2MjRINjV6bTAgMzFoMjUwdjEzSDY1eiIvPjxwYXRoIGZpbGw9IiNGNkY2RjYiIGQ9Ik02NSAxNTBoMjUwdjEzSDY1ek0yIDMwMGg3N3YzMDNIMnoiLz48cGF0aCBzdHJva2U9IiNGNkY2RjYiIGQ9Ik0yNi41IDE3Mi41aDMyNnYyOGgtMzI2eiIvPjxwYXRoIGZpbGw9IiNFRUUiIGQ9Ik01MCAxODBoMjgwdjEzSDUweiIvPjxwYXRoIHN0cm9rZT0iI0Y2RjZGNiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgZD0iTS41IDI0OC41aDM3OS4wMDUiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4OCAyNzgpIj48cGF0aCBmaWxsPSIjRUVFIiBkPSJNMjY3IDgydi0zLjk5OGEuOTk5Ljk5OSAwIDEgMC0yIDBWODJoLTMuOTk4YS45OTkuOTk5IDAgMSAwIDAgMkgyNjV2My45OThhLjk5OS45OTkgMCAxIDAgMiAwVjg0aDMuOTk4YS45OTkuOTk5IDAgMSAwIDAtMkgyNjd6bS0xIDEyYy02LjA3NSAwLTExLTQuOTI1LTExLTExczQuOTI1LTExIDExLTExIDExIDQuOTI1IDExIDExLTQuOTI1IDExLTExIDExeiIvPjxyZWN0IHdpZHRoPSI3NCIgaGVpZ2h0PSI3NCIgeD0iMSIgeT0iMTMiIGZpbGw9IiNGNkY2RjYiIHJ4PSIyIi8+PHBhdGggZmlsbD0iI0VFRSIgZD0iTTg3IDEzaDE0MHYxNkg4N3ptMCAyNWgxMjZ2MTFIODd6bTAgMzFoMzN2MThIODd6Ii8+PHBhdGggc3Ryb2tlPSIjRjZGNkY2IiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBkPSJNLjQ3MyAxLjVoMjkzLjAzMiIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4OCAzOTMpIj48cGF0aCBmaWxsPSIjRUVFIiBkPSJNMjY3IDgydi0zLjk5OGEuOTk5Ljk5OSAwIDEgMC0yIDBWODJoLTMuOTk4YS45OTkuOTk5IDAgMSAwIDAgMkgyNjV2My45OThhLjk5OS45OTkgMCAxIDAgMiAwVjg0aDMuOTk4YS45OTkuOTk5IDAgMSAwIDAtMkgyNjd6bS0xIDEyYy02LjA3NSAwLTExLTQuOTI1LTExLTExczQuOTI1LTExIDExLTExIDExIDQuOTI1IDExIDExLTQuOTI1IDExLTExIDExeiIvPjxyZWN0IHdpZHRoPSI3NCIgaGVpZ2h0PSI3NCIgeD0iMSIgeT0iMTMiIGZpbGw9IiNGNkY2RjYiIHJ4PSIyIi8+PHBhdGggZmlsbD0iI0VFRSIgZD0iTTg3IDEzaDE0MHYxNkg4N3ptMCAyNWgxMjZ2MTFIODd6bTAgMzFoMzN2MThIODd6Ii8+PHBhdGggc3Ryb2tlPSIjRjZGNkY2IiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBkPSJNLjQ3MyAxLjVoMjkzLjAzMiIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4OCA1MDkpIj48cGF0aCBmaWxsPSIjRUVFIiBkPSJNMjY3IDgydi0zLjk5OGEuOTk5Ljk5OSAwIDEgMC0yIDBWODJoLTMuOTk4YS45OTkuOTk5IDAgMSAwIDAgMkgyNjV2My45OThhLjk5OS45OTkgMCAxIDAgMiAwVjg0aDMuOTk4YS45OTkuOTk5IDAgMSAwIDAtMkgyNjd6bS0xIDEyYy02LjA3NSAwLTExLTQuOTI1LTExLTExczQuOTI1LTExIDExLTExIDExIDQuOTI1IDExIDExLTQuOTI1IDExLTExIDExeiIvPjxyZWN0IHdpZHRoPSI3NCIgaGVpZ2h0PSI3NCIgeD0iMSIgeT0iMTMiIGZpbGw9IiNGNkY2RjYiIHJ4PSIyIi8+PHBhdGggZmlsbD0iI0VFRSIgZD0iTTg3IDEzaDE0MHYxNkg4N3ptMCAyNWgxMjZ2MTFIODd6bTAgMzFoMzN2MThIODd6Ii8+PHBhdGggc3Ryb2tlPSIjRjZGNkY2IiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBkPSJNLjQ3MyAxLjVoMjkzLjAzMiIvPjwvZz48cGF0aCBmaWxsPSIjRUVFIiBkPSJNNTAgMjIyaDI5djE2SDUwem0zOSAzNWgyOXYxNkg4OXpNOSAyNjdoNTB2MTVIOXptMCA1NGg1MHYxNUg5em0wIDQ5aDUwdjE1SDl6bTAgMTAxaDUwdjE1SDl6bTAtNDloNTB2MTVIOXptMCAxMDFoNTB2MTVIOXptMCA1MGg1MHYxNUg5em0xNjYtMzUxaDI5djE2aC0yOXptMTI2IDBoMjl2MTZoLTI5eiIvPjxwYXRoIGZpbGw9IiNGNUY1RjUiIGQ9Ik0yIDU1NmgzNzV2NDdIMnoiLz48L2c+PC9zdmc+" class="shellAnimation shell-3VL_g_0"></div>
    <div v-if="!loading">
      <Header :restaurant="restaurant" />
      <Tab @tabToggle="tabToggle" />
      <Foods v-show="0===tabIndex" :restaurant-id="restaurantId" :piecewiseAgentFee="restaurant.piecewise_agent_fee" />
      <Ratings v-show="1===tabIndex" />
      <Seller v-show="2===tabIndex" />
    </div>
  </div>
</template>
<script>
import Header from '@/components/shop-detail/header';
import Tab from '@/components/shop-detail/tab';
import Foods from '@/components/shop-detail/foods';
import Ratings from '@/components/shop-detail/ratings';
import Seller from '@/components/shop-detail/seller';
import { getShopDetail } from '../../api/shop-detail/shop-detail';
export default {
  created () {
    this.updateData();
  },
  data () {
    return {
      restaurant: {},
      loading: true,
      tabIndex: 0,
      restaurantId: undefined
    };
  },
  methods: {
    // 获取商家信息
    getShopDetail (shopId) {
      if (!shopId) {
        return;
      }
      this.loading = true;
      getShopDetail(shopId).then((response) => {
        return response.data;
      }).then(result => {
        this.restaurant = result;
        // 设置运费
        this.$store.commit('SET_DISTRIBUTIO_FEE', { fee: this.restaurant.piecewise_agent_fee.rules[0].fee });
        this.loading = false;
      });
    },
    tabToggle (index) {
      this.tabIndex = index;
    },
    updateData () {
      this.getShopDetail(this.$route.params.id);
      this.restaurantId = this.$route.params.id;
    }
  },
  components: {
    Header,
    Foods,
    Ratings,
    Seller,
    Tab
  },
  // 监听路由参数变化（再次进入该组件的时候不能刷新）
  watch: {
    '$route' (to, from) {
      this.updateData();
    }
  }
};
</script>
<style>

</style>
