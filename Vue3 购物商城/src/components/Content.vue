<script setup>
import { ref, watchEffect, defineProps } from 'vue'
import { useRoute } from 'vue-router'
import { get } from '../utils/request'
import { useCart } from '../utils/useCart'
import store from '@/store'
// import store from '../store/index'

const route = useRoute()
const { cartList, changeCart } = useCart()

const categories = [{
  name: '全部商品',
  tab: 'all'
}, {
  name: '秒杀',
  tab: 'seckill'
}, {
  name: '新鲜水果',
  tab: 'fruit'
}]

defineProps(['shopName'])

const shopId = route.params.id

function changeCartItem (shopId, productId, productInfo, num, shopName) {
  changeCart(shopId, productId, productInfo, num)
  store.commit('changeShopName', {
    shopId,
    shopName
  })
}

function handleCategoryClick (category) {
  currentTab.value = category
  getCategory(category)
}

const contentList = ref([])
const currentTab = ref(categories[0].tab)

async function getCategory (category) {
  const result = await get(`/api/shop/${shopId}/products`, { category })
  if (result?.errno === 0 && result?.data?.length) {
    contentList.value = result.data
  }
}
watchEffect(() => getCategory(currentTab))
</script>

<script>
export default {
  name: 'ContentView'
}
</script>

<template>
  <div class="content">
    <div class="category">
      <div
        :class="{
          'category__item': true,
          'category__item--active': currentTab === category.tab
        }"
        v-for="category in categories"
        :key="category.name"
        @click="handleCategoryClick(category.tab)">
        {{ category.name }}
      </div>
    </div>
    <div class="product">
      <div
        class="product__item"
        v-for="item in contentList"
        :key="item._id"
      >
        <img class="product__item__img" :src="item.imgUrl" />
        <div class="product__item__detail">
          <span class="product__item__title">{{ item.name }}</span>
          <span class="product__item__sales">月售{{ item.sales }}件</span>
          <div class="product__item__price">
            <span class="product__item__yen">{{ item.price }}</span>
            <span class="product__item__origin">{{ item.oldPrice }}</span>
          </div>
        </div>
        <div class="product__number">
          <span
            class="product__number__minus iconfont"
            @click="() => { changeCartItem(shopId, item._id, item, -1, shopName) }"
          >&#xe648;</span>
            {{cartList?.[shopId]?.productList?.[item._id]?.count || 0}}
          <span
            class="product__number__plus iconfont"
            @click="() => { changeCartItem(shopId, item._id, item, 1, shopName) }"
          >&#xe7e0;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../style/variables.scss';
@import '../style/mixins.scss';
.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: .5rem;
}
.category {
  overflow-y: scroll;
  height: 100%;
  width: .76rem;
  background: $search-bgColor;
  &__item {
    line-height: .4rem;
    text-align: center;
    font-size: .14rem;
    color: #333;
    &--active {
      background: $bgColor;
    }
  }
}
.product {
  overflow-y: scroll;
  flex: 1;
  &__item {
    position: relative;
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    border-bottom: .01rem solid $content-bgColor;
    &__detail {
      overflow: hidden;
    }
    &__img {
      width: .68rem;
      height: .68rem;
      margin-right: .16rem;
    }
    &__title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }
    &__sales {
      display: block;
      margin: .06rem 0;
      font-size: .12rem;
      color: $content-fontcolor;
    }
    &__price {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $hightlight-fontColor;
    }
    &__yen {
      font-size: .12rem;
    }
    &__origin {
      margin-left: .06rem;
      line-height: .2rem;
      font-size: .12rem;
      color: $light-fontColor;
      text-decoration: line-through;
    }
    .product__number {
      position: absolute;
      right: 0;
      bottom: .12rem;
      &__minus {
        color: $medium-fontColor;
        margin-right: .05rem;
      }
      &__plus {
        position: relative;
        bottom: .005rem;
        color: $btn-bgColor;
        margin-left: .05rem;
      }
    }
  }
}
</style>
