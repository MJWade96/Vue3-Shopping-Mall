<script setup>
import { ref } from 'vue'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo'

const nearbyList = ref([])

async function getNearbyList () {
  const result = await get('/api/shop/hot-list')
  if (result?.errno === 0 && result?.data?.length) {
    nearbyList.value = result.data
  }
}

getNearbyList()
</script>

<script>
export default {
  name: 'NearbyShop'
}
</script>

<template>
  <h3 class="nearby_shop_title">附近店铺</h3>
  <RouterLink :to="`/shop/${item._id}`" v-for="item in nearbyList" :key="item._id">
    <ShopInfo :item="item" />
  </RouterLink>
</template>

<style lang="scss" scoped>
@import '../../style/variables.scss';
.nearby_shop_title {
  margin: .16rem 0 .12rem 0;
  font-size: .18rem;
  font-weight: normal;
  color: $content-fontcolor;
}
a {
  text-decoration: none;
}
</style>
