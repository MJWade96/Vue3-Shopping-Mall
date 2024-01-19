<script setup>
import { ref, defineProps } from 'vue'
import { get } from '../utils/request'
import HomeDocker from '../components/Docker.vue'

defineProps(['shopId'])

const list = ref([])
const getNearbyList = async () => {
  const result = await get('/api/order')
  if (result?.errno === 0 && result?.data?.length) {
    const orderList = result.data
    orderList.forEach((order) => {
      const products = order.products || []
      let totalPrice = 0
      let totalNumber = 0
      products.forEach((productItem) => {
        totalNumber += (productItem?.orderSales || 0)
        totalPrice += ((productItem?.product?.price * productItem?.orderSales) || 0)
      })
      order.totalPrice = totalPrice
      order.totalNumber = totalNumber
    })
    list.value = result.data
  }
}
getNearbyList()

</script>

<template>
  <div class="wrapper">
    <div class="title">我的订单</div>
    <div class="orders">
      <div
        class="order"
        v-for="(order, index) in list"
        :key="index"
      >
        <div class="order__title">
          {{ order.shopName }}
          <span class="order__status">
            {{order.isCanceled ? '已取消' : '已下单'}}
          </span>
        </div>
        <div class="order__content">
          <div class="order__content__imgs">
            <template
              v-for="(productItem, productIndex) in order.products"
              :key="productIndex"
            >
              <img
                class="order__content__img"
                :src="productItem.product.img"
                v-if="productIndex <= 3"
              />
            </template>
          </div>
          <div class="order__content__info">
            <div class="order__content__price">¥ {{ order.totalPrice }}</div>
            <div class="order__content__count">共 {{ order.totalNumber }} 件</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <HomeDocker :DockerIndex="2"/>
</template>

<style lang="scss" scoped>
@import '../style/variables.scss';
@import '../style/mixins.scss';
.wrapper {
  overflow-y: auto;
  @include fix-position;
  background: rgb(248, 248,248);
}
.title {
  @include title
}
.order {
  margin: .16rem .18rem;
  padding: .16rem;
  background: $bgColor;
  &__title {
    margin-bottom: .16rem;
    line-height: .22rem;
    font-size: .16rem;
    color: $content-fontcolor;
  }
  &__status {
    float: right;
    font-size: .14rem;
    color: $light-fontColor;
  }
  &__content {
    display: flex;
    &__imgs {
      flex: 1;
    }
    &__img {
      width: .4rem;
      height: .4rem;
      margin-right: .12rem;
    }
    &__info {
      width: .7rem;
    }
    &__price {
      margin-bottom: .04rem;
      line-height: .2rem;
      font-size: .14rem;
      color: $hightlight-fontColor;
      text-align: right;
    }
    &__count {
      line-height: .14rem;
      font-size: .12rem;
      color: $content-fontcolor;
      text-align: right;
    }
  }
}
</style>
