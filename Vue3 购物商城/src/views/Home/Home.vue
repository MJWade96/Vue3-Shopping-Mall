<script>
import HomeHeader from './Header.vue'
import NearbyShop from './NearbyShop.vue'
import HomeDocker from '../../components/Docker'

export default {
  name: 'HomeView',
  components: {
    HomeHeader,
    NearbyShop,
    HomeDocker
  }
}
</script>

<template>
    <div class="wrapper">
        <HomeHeader />
        <NearbyShop />
    </div>
    <HomeDocker :DockerIndex="0"/>
</template>

<style lang="scss" scoped>
@import '../../style/variables.scss';
@import '../../style/mixins.scss';
.wrapper {
  overflow-y: auto;
  @include fix-position;
  padding: 0 .18rem;
}
</style>
