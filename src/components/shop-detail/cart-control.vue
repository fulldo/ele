<template>
  <span class="cartbutton-entitybutton_2u6UF">
    <a v-if="foodCount > 0" @click="foodDel" href="javascript:" role="button" aria-label="删减商品">
      <svg>
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-add"></use>
      </svg>
    </a>
    <span v-if="foodCount > 0" role="button" aria-label="已选1份" class="cartbutton-entityquantity_1LX01">
      {{foodCount}}
    </span>
    <a @click="foodAdd" href="javascript:" role="button" aria-label="添加商品">
      <svg>
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-minus"></use>
      </svg>
    </a>
  </span>
</template>
<script>
export default {
  props: {
    food: {
      type: Object,
      default () {
        return {
          count: 0
        };
      }
    }
  },
  methods: {
    foodAdd (event) {
      // 添加当前点击的添加按钮的dom到state，用户确定飞球的起始位置和落地位置等一些信息
      this.$store.commit('SET_ADD_BUTTON', { element: event.target });
      this.$emit('foodAdd', this.food.item_id);
    },
    foodDel () {
      this.$emit('foodDel', this.food.item_id);
    }
  },
  computed: {
    foodCount () {
      return this.food && this.food.count;
    }
  }
};
</script>
<style>

</style>
