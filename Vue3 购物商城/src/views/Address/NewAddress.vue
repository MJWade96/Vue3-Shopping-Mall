<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { get } from '../../utils/request'
import Docker from '@/components/Docker.vue'
import EmptyMessage from '../../components/EmptyMessage.vue'

const router = useRouter()
function goBack () {
  router.back()
}

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
      <div
        class="iconfont header__back"
        @click="goBack"
      >
        &#xe697;
      </div>
      <span class="header__title">管理收货地址</span>
      <RouterLink to="/editAddress">
        <span class="header__new">新建</span>
      </RouterLink>
    </div>
    <EmptyMessage v-if="!addressList.length" />
    <div
      class="address"
      v-for="address in addressList"
      :key="address._id"
    >
      <div class="userinfo" @click="router.push(`/editAddress?id=${address._id}`)">
        <span>{{ address.name }}</span>
        <span class="userinfo__phone">{{ address.phone }}</span>
      </div>
      <div class="address__detail">
        {{ address.city }} {{ address.department }}  {{ address.houseNumber}}
      </div>
      <span class="iconfont">&#xe697;</span>
    </div>
  </div>
  <Docker></Docker>
</template>

<style lang="scss" scoped>
@import '../../style/variables.scss';
@import '../../style/mixins.scss';
.wrapper {
  overflow-y: auto;
  @include fix-position;
  background: rgb(248, 248,248);
}
.header {
  position: relative;
  text-align: center;
  background-color: $bgColor;
  &__back {
    position: absolute;
    top: .1rem;
    left: .18rem;
    font-size: .22rem;
    color: black;
  }
  &__title {
    @include title;
  }
  &__new {
    position: absolute;
    line-height: .2rem;
    top: .12rem;
    bottom: .12rem;
    right: .18rem;
    font-size: .14rem;
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
  .iconfont {
    transform: rotate(180deg);
    position: absolute;
    right: .16rem;
    top: .44rem;
    color: $medium-fontColor;
    font-size: .2rem;
  }
}
a {
  color: $content-fontcolor;
  text-decoration: none;
}
</style>
