<script setup>
import { ref } from 'vue'
import TopArea from '../components/TopArea.vue'
import ProductList from '../components/ProductList.vue'
import ConfirmArea from '../components/ConfirmArea.vue'

const IfShowModal = ref(false)

</script>

<template>
  <div class="wrapper">
    <TopArea />
    <ProductList />
    <ConfirmArea @showModal="IfShowModal = !IfShowModal"/>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #eee;
  overflow-y: scroll;
}
</style>
