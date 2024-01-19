<script setup>
import { defineEmits, defineProps } from 'vue'
defineEmits(['hide', 'confirmOrder', 'cancelOrder'])
defineProps(['show'])
</script>

<template>
  <div class="modal__mask" v-if="show">
    <div class="modal__wrapper" @click="$emit('hide')">
      <span class="modal__wrapper__title">确认要离开收银台?</span>
      <span class="modal__wrapper__notice">请尽快完成支付，否则将被取消</span>
      <button class="modal__wrapper__cancel" @click="$emit('cancelOrder')">取消订单</button>
      <button class="modal__wrapper__confirm" @click="$emit('confirmOrder')">确认支付</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../style/variables.scss';
.modal {
  &__mask {
    position: fixed;
    z-index: 1;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0, 0, 0, .5);
  }
  &__wrapper {
    position: absolute;
    top: 2.43rem;
    bottom: 2.67rem;
    left: .37rem;
    right: .37rem;
    width: 3.01rem;
    height: 1.57rem;
    background: $bgColor;
    &__title {
        display: block;
        color: $content-fontcolor;
        font-size: .18rem;
        line-height: .25rem;
        margin: .24rem .7rem 0 .7rem;
    }
    &__notice {
        display: block;
        color: $medium-fontColor;
        font-size: .14rem;
        line-height: .2rem;
        margin: .08rem .52rem 0 .53rem;
    }
    &__confirm {
        width: .8rem;
        height: .32rem;
        border: .01rem solid #4FB0F9;
        border-radius: .16rem;
        background: #4FB0F9;
        font-size: .14rem;
        color: $bgColor;
        line-height: .2rem;
        padding: .05rem .11rem .06rem;
    }
    &__cancel {
        margin: .24rem .24rem .24rem .59rem;
        width: .8rem;
        height: .32rem;
        border: .01rem solid #4FB0F9;
        border-radius: .16rem;
        background: $bgColor;
        font-size: .14rem;
        color: #4FB0F9;
        padding: .05rem .11rem .06rem;
    }
  }
}
</style>
