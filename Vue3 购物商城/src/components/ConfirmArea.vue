<script setup>
import { ref, defineEmits } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useCart } from '../utils/useCart'
import { post } from '../utils/request'
import ConfirmModal from '../components/ConfirmModal.vue'

defineEmits(['showModal'])
const router = useRouter()
const route = useRoute()
const store = useStore()
const shopId = route.params.id
const { shopName, productList, calculations } = useCart(shopId) // change
const IfShowModal = ref(false)

const addressId = route.query.addressId
async function handleConfirmOrder (isCanceled) {
  const products = []
  for (const i in productList.value) {
    const product = productList.value[i]
    products.push({
      id: parseInt(product._id, 10),
      num: product.count
    })
  }
  try {
    const result = await post('/api/order', {
      addressId,
      shopId,
      shopName: shopName.value,
      isCanceled,
      products
    })
    if (result?.errno === 0) {
      const cartList = JSON.parse(localStorage.cartList || '{}')
      delete cartList[shopId]
      localStorage.cartList = JSON.stringify(cartList)
      store.commit('clearCartData', { shopId })
      router.push({ name: 'OrderList' })
    }
  } catch (err) {
    console.log('下单失败')
  }
}
</script>

<template>
  <div class="order">
    <div class="order__price">
      实付金额 <b>&yen;{{ calculations.totalPrice }}</b>
    </div>
    <button class="order__btn" @click="IfShowModal = true">
      提交订单
    </button>
  </div>
  <ConfirmModal
    :show="IfShowModal"
    @hide="IfShowModal=false"
    @confirmOrder="handleConfirmOrder(false)"
    @cancelOrder="handleConfirmOrder(true)"
  />
</template>

<style lang="scss" scoped>
@import '../style/variables.scss';
@import '../style/mixins.scss';
.order {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  height: .49rem;
  line-height: .49rem;
  background: $bgColor;
  &__price {
    flex: 1;
    text-indent: .24rem;
    font-size: .14rem;
    color: $content-fontcolor;
  }
  &__btn {
    width: .98rem;
    border: none;
    background: #4FB0F9;
    color: $bgColor;
    text-align: center;
    font-size: .14rem;
  }
}
</style>
