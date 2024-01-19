import { computed } from 'vue'
import { useStore } from 'vuex'

export const useCart = (shopId) => {
  const store = useStore()
  const cartList = store.state.cartList
  const changeCart = (shopId, productId, productInfo, num) => {
    store.commit('changeCart', {
      shopId, productId, productInfo, num
    })
  }
  const productList = computed(() => {
    const productList = cartList[shopId]?.productList || []
    const finalList = {}
    for (const productId in productList) {
      const product = productList[productId]
      if (product.count > 0) {
        finalList[productId] = product
      }
    }
    return finalList
  })

  const shopName = computed(() => cartList[shopId]?.shopName || '')

  const calculations = computed(() => {
    const result = {
      totalCount: 0,
      totalPrice: 0,
      allChecked: true
    }
    const productList = cartList[shopId]?.productList
    if (productList) {
      for (const productId in productList) {
        const product = productList[productId]
        result.totalCount += product.count
        if (product.check) {
          result.totalPrice += product.count * product.price
        }
        if (!product.check && product.count > 0) {
          result.allChecked = false
        }
      }
    }
    result.totalPrice = result.totalPrice.toFixed(2)
    return result
  })
  return { cartList, changeCart, productList, shopName, calculations }
}
