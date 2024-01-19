<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo'
import Content from '../../components/Content'
import Cart from '../../components/Cart.vue'

const router = useRouter()
const route = useRoute()

const item = ref({})
async function getShopInfo () {
  const result = await get(`/api/shop/${route.params.id}`)
  if (result?.errno === 0 && result?.data) {
    item.value = result.data
  }
}
getShopInfo()

function handleBackClick () {
  router.back()
}
</script>

<script>
export default {
  name: 'ShopView'
}
</script>

<template>
  <div class="wrapper">
    <div class="search">
      <div
        class="search__back iconfont"
        @click="handleBackClick"
      >&#xe697;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe8ef;</span>
        <input
        class="search__content__input"
        placeholder="请输入商品名称"
      />
      </div>
    </div>
    <ShopInfo :item="item" :hideBorder="true" v-show="item.imgUrl" />
    <Content :shopName="item.name"/>
    <Cart />
  </div>
</template>

<style lang="scss" scoped>
@import '../../style/variables.scss';
.wrapper {
  padding: 0 .18rem;
}
.search {
  display: flex;
  margin: .2rem 0 .16rem 0;
  // line-height: .32rem;
  &__back {
    margin-top: .03rem;
    width: .3rem;
    font-size: .24rem;
    color: #B6B6B6;
  }
  &__content {
    display: flex;
    flex: 1;
    background: #F5F5F5;
    border-radius: .16rem;
    &__icon {
      position: relative;
      top: .075rem;
      left: .05rem;
      width: .44rem;
      text-align: center;
      color: #B7B7B7;
    }
    &__input {
      display: block;
      width: 100%;
      padding-right: .2rem;
      border: none;
      outline: none;
      background: none;
      height: .32rem;
      font-size: .14rem;
      color: $content-fontcolor;
      &::placeholder {
        color: $content-fontcolor;
      }
    }
  }
}
  </style>
