<script setup>
import { defineProps } from 'vue'

defineProps(['DockerIndex'])

const dockerItemList = [
  {
    name: '首页',
    iconCode: '&#xe638;',
    to: { name: 'Home' }
  },
  {
    name: '购物车',
    iconCode: '&#xe73d;',
    to: { name: 'UserCart' }
  },
  {
    name: '订单',
    iconCode: '&#xe8ae;',
    to: { name: 'OrderList' }
  },
  {
    name: '我的',
    iconCode: '&#xe62f;',
    to: { name: 'Login' }
  }
]
</script>

<script>
export default {
  name: 'HomeDocker'
}
</script>

<template>
    <div class="docker">
      <div
      v-for="({name, iconCode, to},index) in dockerItemList"
      :key=index
      :class="{
        'docker__item': true,
        'docker__item--active': index === DockerIndex
      }">
        <RouterLink :to="to">
          <div class="iconfont" v-html="iconCode"></div>
          <div class="docker__title">{{ name }}</div>
        </RouterLink>
      </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../style/variables.scss';
@import '../style/mixins.scss';
.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 .18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .49rem;
  border-top: .01rem solid $content-bgColor;
  &__item {
    flex: 1;
    text-align: center;
    a {
      color: $content-fontcolor;
      text-decoration: none;
    }
    .iconfont {
      margin: .07rem 0 .02rem 0;
      font-size: .18rem;
    }
    &--active {
      a {
        color: #1FA4FC;
      }
    }
  }
  &__title {
    font-size: .2rem;
    transform: scale(.5, .5);
    transform-origin: center top;
  }
}
</style>
