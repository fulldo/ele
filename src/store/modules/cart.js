// shape: [{ id, quantity }]
const state = {
  cartMap: {},
  addButton: null,
  distributioFee: 0
};

// getters
const getters = {
  /**
   * 获取购物车
   */
  shopCart: (state) => ({ shopId }) => {
    let shop = state.cartMap[shopId];
    return shop;
  },
  totalCount: (state) => shopId => {
    let cartMap = state.cartMap;
    let sum = 0;
    if (cartMap[shopId]) {
      for (let k = 0; k < cartMap.length; k++) {
        const foodInCart = cartMap[k];
        sum += foodInCart.count;
      }
    }
    return sum;
  },
  addButton (state) {
    return state.addButton;
  },
  distributioFee (state) {
    return state.distributioFee;
  }
};

// actions
const actions = {
  changeFoodCount (context, { shopId, foodId, foodCount }) {
    let food = state.cartMap[shopId].find(item => item.id === foodId);
    if (food) {
      context.commit('CHANGE_FOOD_COUNT', { shopId, foodId, foodCount });
      // 如果数量为0
      if (!food.count) {
        context.commit('DELETE_FOOD', { shopId, foodId });
      }
    }
  }
};

// mutations
const mutations = {
  CHANGE_FOOD_COUNT (state, { shopId, foodId, foodCount }) {
    let food = state.cartMap[shopId].find(item => item.id === foodId);
    if (food) {
      food.count = foodCount;
    }
  },
  /**
   * 删除商户的商品记录
   * @param {*} state
   * @param {*} payload
   */
  DELETE_FOOD (state, { shopId, foodId }) {
    let cartMap = state.cartMap;
    const foods = cartMap[shopId];
    if (!foods) {
      return;
    }
    const foodIndex = cartMap[shopId].indexOf(
      cartMap[shopId].find(item => item.id === foodId)
    );
    // 删除一条记录
    foods.splice(foodIndex, 1);
  },
  /**
   * 增加商品
   * @param {*} state
   * @param {*} payload  {shopId, food}
   */
  ADD_FOOD (state, { shopId, food }) {
    let cartMap = state.cartMap;
    let shop = cartMap[shopId];
    shop.push(food);
  },
  INIT_A_SHOP (state, { shopId }) {
    state.cartMap[shopId] || (state.cartMap[shopId] = []);
  },
  CLEAR_A_SHOP (state, { shopId }) {
    state.cartMap[shopId].splice(0);
  },
  SET_ADD_BUTTON (state, { element }) {
    state.addButton = element;
  },
  SET_DISTRIBUTIO_FEE (state, { fee }) {
    state.distributioFee = fee;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
