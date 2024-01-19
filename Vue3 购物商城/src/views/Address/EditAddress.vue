<script setup>
import { onBeforeMount, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Toast, { useToastEffect } from '@/components/Toast.vue'
import Docker from '@/components/Docker.vue'
import { get, post } from '@/utils/request'

const router = useRouter()
function goBack () {
  router.back()
}

const route = useRoute()
const id = route.query.id

const addressInfo = ref({
  city: '',
  houseNumber: '',
  department: '',
  name: '',
  phone: ''
})

onBeforeMount(async () => {
  if (id) {
    const result = await get(`/api/user/address/${id}`)
    if (result?.errno === 0) {
      const addressInformation = addressInfo.value
      addressInformation.city = result.data.city
      addressInformation.houseNumber = result.data.houseNumber
      addressInformation.department = result.data.department
      addressInformation.name = result.data.name
      addressInformation.phone = result.data.phone
    }
  }
})

const { show, toastMessage, showToast } = useToastEffect()
async function save () {
  let isFilled = true
  for (const key in addressInfo.value) {
    if (addressInfo.value[key] === '') {
      isFilled = false
      break
    }
  }
  if (!isFilled) {
    showToast('所有选项必填')
  } else {
    let url = ''
    if (id) {
      url = `/api/user/address/${id}`
    } else {
      url = '/api/user/address'
    }
    const result = await post(url, addressInfo.value)
    if (result?.errno === 0) {
      goBack()
    }
  }
}

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
      <span class="header__title">{{ id ? '编辑' : '新增' }}收货地址</span>
      <RouterLink to="/editAddress">
        <span class="header__new" @click="save">保存</span>
      </RouterLink>
    </div>
    <div class="edit">
      <div>
        <label for="city">所在城市：</label>
        <input type="text" name="city" placeholder="请输入所在城市" v-model="addressInfo.city">
      </div>
      <div>
        <label for="address">小区/大厦/学校：</label>
        <input type="text" name="address" placeholder="请输入小区/大厦/学校" v-model="addressInfo.department">
      </div>
      <div>
        <label for="houseNumber">楼号-门牌号：</label>
        <input type="text" name="houseNumber" placeholder="请输入楼号-门牌号" v-model="addressInfo.houseNumber">
      </div>
      <div>
        <label for="name">收货人：</label>
        <input type="text" name="name" placeholder="请输入姓名" v-model="addressInfo.name">
      </div>
      <div>
        <label for="phone">所在城市：</label>
        <input type="tel" name="phone" placeholder="请输入手机号" v-model="addressInfo.phone">
      </div>
    </div>
    <Toast v-if="show" :message="toastMessage"/>
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
.edit {
  margin: .12rem 0 0;
  padding: 0 .18rem;
  background-color: $bgColor;
  div {
    display: flex;
    height: .44rem;
    line-height: .44rem;
    border-bottom: .01rem solid $content-bgColor;
    label {
      line-height: .44rem;
      font-size: .14rem;
      color: $medium-fontColor;
    }
    input {
      flex: 1;
      border: none;
      outline: none;
      font-size: .14rem;
      color: #151515;
      line-height: .2rem;
    }
  }
}
</style>
