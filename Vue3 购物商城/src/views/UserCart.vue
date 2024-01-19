<script setup>
import { useRouter } from 'vue-router'
import HomeDocker from '../components/Docker.vue'
import EmptyMessage from '../components/EmptyMessage.vue'

const cartList = JSON.parse(localStorage.cartList || '[]')
function getTotalCount () {
  for (const i in cartList) {
    let totalCount = 0
    const cart = cartList[i]
    const productList = cart.productList
    for (const j in productList) {
      totalCount += productList[j].count
    }
    cart.totalCount = totalCount
  }
}
getTotalCount()

const router = useRouter()
function handleCartClick (shopId) {
  router.push(`/confirmOrder/${shopId}`)
}
</script>

<template>
  <div class="wrapper">
    <div class="title">我的全部购物车</div>
    <div
      class="cart"
      v-for="(cart, shopId) in cartList"
      :key="shopId"
      @click="handleCartClick(shopId)"
    >
      <div class="cart__title">
        {{ cart.shopName }}
      </div>
      <div
        class="cart__item"
        v-for="item in cart.productList"
        :key="item._id"
      >
        <img class="cart__item__img" :src="item.imgUrl" />
        <div class="cart__item__detail">
          <span class="cart__item__title">{{ item.name }}</span>
          <div class="cart__item__price">
            <span class="yen">&yen;</span>{{ item.price }} × {{ item.count }}
            <div class="cart__item__total"><span class="yen">&yen;</span>{{ (item.price * item.count).toFixed(2) }}</div>
          </div>
        </div>
      </div>
      <div class="total">共计{{ cart.totalCount }}件</div>
    </div>
    <EmptyMessage v-if="!cartList.length" />
  </div>
  <HomeDocker :DockerIndex="1"/>
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
  @include title;
}
.cart {
  margin: .16rem;
  padding-bottom: .2rem;
  background: $bgColor;
  .yen {
    font-size: .12rem;
  }
  &__title {
    padding: .16rem;
    line-height: .22rem;
    font-size: .16rem;
    color: $content-fontcolor;
    @include ellipsis;
  }
  &__item {
    display: flex;
    padding: 0 0 0 .16rem;
    &__img {
      width: .46rem;
      height: .46rem;
      margin-right: .16rem;
    }
    &__detail {
      flex: 1;
      margin-right: .16rem;
    }
    &__title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }
    &__price {
      margin: 0 0 0 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $hightlight-fontColor;
    }
    &__total {
      float: right;
      color: $dark-fontColor;
    }
  }
}
.yen {
  position: relative;
  top: -.01rem;
  font-size: .12rem;
  line-height: .2rem;
  margin-right: .02rem;
}
.total {
  margin: .16rem;
  margin-bottom: 0;
  background-color: $search-bgColor;
  line-height: .2rem;
  font-size: .14rem;
  color: $light-fontColor;
  padding: .04rem 0;
  text-align: center;
}
</style>
