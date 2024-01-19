<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { get } from '../../utils/request'
import EmptyMessage from '../../components/EmptyMessage.vue'

const router = useRouter()
const route = useRoute()

const addressList = ref([])
async function getAddressList () {
  const result = await get('/api/user/address')
  if (result?.errno === 0 && result?.data?.length) {
    addressList.value = result.data
  }
}
getAddressList()
</script>

<template>
  <div class="wrapper">
    <div class="header">
      <span class="header__title">选择地址</span>
    </div>
    <EmptyMessage v-if="!addressList.length" />
    <div
      class="address"
      v-for="address in addressList"
      :key="address._id"
    >
      <div class="userinfo" @click="router.push(`${route.query.path}?addressId=${address._id}`)">
        <span>{{ address.name }}</span>
        <span class="userinfo__phone">{{ address.phone }}</span>
      </div>
      <div class="address__detail">
        {{ address.city }} {{ address.department }}  {{ address.houseNumber}}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../style/variables.scss';
@import '../../style/mixins.scss';
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgb(248, 248,248);
}
.header {
  position: relative;
  text-align: center;
  background-color: $bgColor;
  &__title {
    @include title;
  }
}
.address {
  position: relative;
  margin: .12rem .18rem .16rem;
  padding: .18rem .16rem;
  background: $bgColor;
  border-radius: .04rem;
  .userinfo {
    line-height: .2rem;
    font-size: .14rem;
    color: $light-fontColor;
    &__phone {
      margin-left: .66rem;
    }
  }
  &__detail {
    margin-top: .08rem;
    margin-right: .55rem;
    line-height: .2rem;
    font-size: .14rem;
    color: $content-fontcolor;
  }
}
</style>
