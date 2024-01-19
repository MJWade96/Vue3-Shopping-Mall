<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { get } from '../utils/request'
import ShopInfo from '../components/ShopInfo'

const router = useRouter()
const route = useRoute()

const searchList = ref([])

const keyword = ref(route.query.keyword || '')

async function getSearchList (keyword) {
  const result = await get('/api/shop/search', {
    keyword
  })

  if (result?.errno === 0 && result?.data?.length) {
    searchList.value = result.data
  }
}

getSearchList(keyword.value)
</script>

<template>
  <div class="wrapper">
    <div class="search">
      <div
        class="search__back iconfont"
        @click="router.back()"
      >
        &#xe697;
      </div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe8ef;</span>
        <input
          class="search__content__input"
          placeholder="请输入商品名称"
      />
      </div>
    </div>
    <RouterLink :to="`/shop/${item._id}`" v-for="item in searchList" :key="item._id">
      <div class="shop__wrapper">
        <ShopInfo :item="item" :hideBorder="true"/>
        <div class="products" v-if="item.products">
          <div class="products__product" v-for="product in item.products" :key="product._id">
            <img class="products__product__img" :src="product.imgUrl">
            <span class="products__product__title">{{ product.name }}</span>
            <div class="products__product__price">
              <span class="products__product__price__newPrice"><span class="yen">&yen;</span>{{ product.price }}</span>
              <span class="products__product__price__oldPrice"><span class="yen">&yen;</span>{{ product.oldPrice }}</span>
            </div>
          </div>
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
@import '../style/variables.scss';
@import '../style/mixins.scss';
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
      top: .08rem;
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
a {
  text-decoration: none;
  color: $content-fontcolor;
}
.shop__wrapper {
  border-bottom: .01rem solid $content-bgColor;
  margin-bottom: .12rem;
}
.products {
  // display: flex;
  margin: -.04rem .07rem .12rem .54rem;
  overflow: hidden;
  &__product {
    float: left;
    box-sizing: border-box;
    width: .76rem;
    margin-left: .16rem;
    &__img {
      width: 100%;
      height: .76rem;
    }
    &__title {
      display: block;
      margin-top: .04rem;
      line-height: .17rem;
      font-size: .12rem;
      color: $content-fontcolor;
      @include ellipsis;
    }
    &__price {
      @include ellipsis;
      &__newPrice {
        display: inline-block;
        margin-top: .05rem;
        line-height: .14rem;
        font-size: .14rem;
        color: $hightlight-fontColor;
      }
      &__oldPrice {
        margin-left: .06rem;
        line-height: .14rem;
        font-size: .1rem;
        color: $light-fontColor;
        text-decoration: line-through;
      }
      .yen {
        font-size: .12rem;
      }
    }
  }
}
</style>
