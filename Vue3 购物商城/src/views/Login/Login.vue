<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../../utils/request.js'
import Toast, { useToastEffect } from '../../components/Toast.vue'

const router = useRouter() // should be a global variable in <script setup>

const data = reactive({
  username: '',
  password: ''
})

const { show, toastMessage, showToast } = useToastEffect()

async function handleLogin () {
  try {
    const result = await post('/api/user/login', {
      username: data.username,
      password: data.password
    })
    if (result?.errno === 0) {
      localStorage.isLogin = true
      router.push({ name: 'Home' })
    } else {
      showToast('登录失败')
    }
  } catch (e) {
    showToast('请求失败')
  }
}

function handleRegister () {
  router.push({ name: 'Register' })
}
</script>

<script>
export default {
  name: 'LoginView'
}
</script>

<template>
    <div class="wrapper">
      <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png"/>
      <div class="wrapper__input">
        <input
          class="wrapper__input__content"
          placeholder="用户名"
          v-model="data.username"
        />
      </div>
      <div class="wrapper__input">
        <input
          type="password"
          class="wrapper__input__content"
          placeholder="请输入密码"
          v-model="data.password"
        />
      </div>
      <div class="wrapper__login-button" @click="handleLogin">登陆</div>
      <div class="wrapper__login-link" @click="handleRegister">立即注册</div>
    </div>
    <Toast v-if="show" :message="toastMessage"/>
</template>

<style lang="scss" scoped>
@import '../../style/variables.scss';
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img {
    display: block;            // <img> has "display:inline" by default => margin only applies to block element ?
    margin: 0 auto .4rem auto; // left/right marign set to "auto" for centering the image
    width: .66rem;
    height: .66rem;
  }
  &__input {
    height: .48rem;
    margin: 0 .4rem .16rem .4rem;
    padding: 0 .16rem;
    background: #F9F9F9;
    border: .01rem solid rgba(0,0,0,0.10);
    border-radius: .06rem;
    border-radius: .06rem;
    &__content {
      line-height: .48rem;
      border: none;
      outline: none;
      width: 100%;
      background: none;
      color: $content-notice-fontcolor;
      &::placeholder {
        color: $content-notice-fontcolor;
        font-size: .16rem;
      }
    }
  }
  &__login-button {
    margin: .32rem .4rem .16rem .4rem;
    line-height: .48rem;
    background: #0091FF;
    box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
    border-radius: .04rem;
    // border-radius: .04rem;
    color: #fff;
    font-size: .16rem;
    text-align: center;
  }
  &__login-link {
    text-align: center;
    font-size: .14rem;
    color: $content-notice-fontcolor;
  }
}
</style>
