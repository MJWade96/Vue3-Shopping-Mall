<script setup>
import { onBeforeMount, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { get } from '../utils/request'

const router = useRouter()
function goBack () {
  router.back()
}

const route = useRoute()
function selectAddress () {
  router.push(`/selectAddress?path=${route.path}`)
}

const id = route.query.addressId
const hasAddress = !!id

const address = ref({})
onBeforeMount(async () => {
  if (hasAddress) {
    const result = await get(`/api/user/address/${id}`)
    if (result?.errno === 0) {
      Object.assign(address.value, result.data)
    }
  }
})
</script>

<template>
  <div class="top">
    <div class="top__header">
      <div
        class="iconfont top__header__back"
        @click="goBack"
      >
        &#xe697;
      </div>
        确认订单
    </div>
    <div class="top__receiver">
      <div class="top__receiver__title">收货地址</div>
      <div class="top__receiver__address">{{ hasAddress ? `${address.city} ${address.department} ${address.houseNumber}` : '请选择收货地址' }}</div>
      <div v-if="hasAddress" class="top__receiver__info">
        <span class="top__receiver__info__name">{{ address.name }}</span>
        <span class="top__receiver__info__name">{{ address.phone }}</span>
      </div>
        <div class="iconfont top__receiver__icon" @click="selectAddress">&#xe697;</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../style/variables.scss';
.top {
  position: relative;
  height: 1.96rem;
  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg, rgba(0,145,255,0.00) 4%, #0091FF 50%);
  background-repeat: no-repeat;
  &__header {
    position: relative;
    padding-top: .26rem;
    line-height: .24rem;
    color: $bgColor;
    text-align: center;
    font-size: .16rem;
    &__back {
      position: absolute;
      left: .18rem;
      font-size: .22rem;
    }
  }
  &__receiver {
    position: absolute;
    left: .18rem;
    right: .18rem;
    bottom: 0;
    height: 1.11rem;
    background: $bgColor;
    border-radius: .04rem;
    &__title {
      line-height: .22rem;
      padding: .16rem 0 .14rem .16rem;
      font-size: .16rem;
      color: $content-fontcolor;
    }
    &__address {
      line-height: .2rem;
      padding: 0 .4rem 0 .16rem;
      font-size: .14rem;
      color: $content-fontcolor;
    }
    &__info {
      padding: .06rem 0 0 .16rem;
      &__name {
        margin-right: .06rem;
        line-height: .18rem;
        font-size: .12rem;
        color: $medium-fontColor;
      }
    }
    &__icon {
      transform: rotate(180deg);
      position: absolute;
      right: .16rem;
      top: .5rem;
      color: $medium-fontColor;
      font-size: .2rem;
    }
  }
}
</style>
