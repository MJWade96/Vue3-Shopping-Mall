<script setup>
import { defineProps, reactive, toRefs } from 'vue'

defineProps(['message'])

</script>

<script>
export default {
  name: 'ToastView'
}

export const useToastEffect = () => {
  const toastData = reactive({
    show: false,
    toastMessage: ''
  })

  const showToast = (message) => {
    toastData.show = true
    toastData.toastMessage = message
    setTimeout(() => {
      toastData.show = false
      toastData.toastMessage = ''
    }, 2000)
  }

  const { show, toastMessage } = toRefs(toastData)

  return { show, toastMessage, showToast }
}
</script>

<template>
  <div class="toast">{{ message }}</div>
</template>

<style lang="scss" scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: .1rem;
  background: rgba(0, 0, 0, .35);
  border-radius: .05rem;
  color: #FFF;
}
</style>
