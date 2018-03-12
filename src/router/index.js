import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/index/index';
import Entry from '@/pages/entry-detail/entry-detail';
import ShopDetail from '@/pages/shop-detail/shop-detail';
import Order from '@/pages/order/order';
import Discover from '@/pages/discover/discover';
import Profile from '@/pages/profile/profile';
import Home from '@/pages/home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        keepAlive: true
      },
      children: [
        {
          path: '/',
          name: '',
          component: Index
        },
        {
          path: '/discover',
          name: 'discover',
          component: Discover
        },
        {
          path: '/order',
          name: 'order',
          component: Order
        },
        {
          path: '/profile',
          name: 'profile',
          component: Profile
        }
      ]
    },
    {
      path: '/entry/:id',
      name: 'entry',
      component: Entry
    },
    {
      path: '/shop/:id',
      name: 'shop',
      component: ShopDetail
    }
  ]
});
