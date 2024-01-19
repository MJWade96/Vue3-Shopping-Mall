import Vuex from 'vuex'

const setLocalCartList = (state) => {
  localStorage.cartList = JSON.stringify(state.cartList)
}

const getLocalCartList = () => {
  const cartList = localStorage.cartList
  if (cartList) {
    return JSON.parse(cartList)
  } else {
    return {}
  }
}

export default Vuex.createStore({
  state: {
    cartList: getLocalCartList()
  },
  getters: {
  },
  mutations: {
    changeCart (state, payload) {
      const { shopId, productId, productInfo, num } = payload
      const cartList = state.cartList
      const shopInfo = cartList[shopId] || {
        shopName: '',
        productList: {}
      }
      let product = shopInfo.productList[productId]
      if (!product) {
        productInfo.count = 0
        product = productInfo
      }
      product.count += num
      if (product.count < 0) {
        product.count = 0
      }
      if (num === 1) {
        product.check = true
      }
      shopInfo.productList[productId] = product
      state.cartList[shopId] = shopInfo
      setLocalCartList(state)
    },
    changeShopName (state, payload) {
      const { shopId, shopName } = payload
      const shopInfo = state.cartList[shopId] || {
        shopName: '', productList: {}
      }
      shopInfo.shopName = shopName
      state.cartList[shopId] = shopInfo
      setLocalCartList(state)
    },
    handleCheck (state, payload) {
      const { shopId, productId } = payload
      const product = state.cartList[shopId].productList[productId]
      product.check = !product.check
    },
    checkAll (state, payload) {
      const { shopId } = payload
      const shop = state.cartList[shopId]
      for (const productId in shop.productList) {
        const product = shop.productList[productId]
        product.check = true
      }
      setLocalCartList(state)
    },
    clearAll (state, payload) {
      const { shopId } = payload
      state.cartList[shopId].productList = {}
      setLocalCartList(state)
    },
    clearCartData (state, payload) {
      const { shopId } = payload
      delete state.cartList[shopId]
    }
  },
  actions: {
  },
  modules: {
  }
})
