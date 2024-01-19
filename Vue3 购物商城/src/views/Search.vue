<script setup>
import { ref } from 'vue'
import { get } from '@/utils/request'
import router from '@/router'

const localHistory = localStorage.history || '[]'
const history = ref(JSON.parse(localHistory))

const popular = ref([])
async function getHotWords () {
  const result = await get('/api/shop/search/hot-words')
  if (result?.errno === 0 && result?.data?.length) {
    popular.value = result.data
  }
}
getHotWords()

function handleSearch (searchFor) {
  if (!history.value.includes(searchFor)) {
    history.value.push(searchFor)
    localStorage.history = JSON.stringify(history.value)
  }
  router.push(`/searchList?keyword=${searchFor}`)
}

function cancelSearch () {
  router.back()
}

function clearHistory () {
  history.value = []
  localStorage.history = JSON.stringify([])
}
</script>

<script>
export default {
  name: 'SearchView'
}
</script>

<template>
  <div class="wrapper">
    <div class="search">
      <span class="iconfont">&#xe8ef;</span>
      <input
        class="search__area"
        type="search"
        placeholder="山姆会员商店优惠商品"
        @keyup.enter="handleSearch($event.target.value)">
      <span class="search__cancel" @click="cancelSearch">取消</span>
    </div>
    <div class="history" v-if="history.length">
      <h4 class="history__title">搜索历史</h4>
      <span class="history__clear" @click="clearHistory">清除搜索历史</span>
      <ul class="history__list">
        <li
          class="history__list__item"
          v-for="(searchFor, index) in history"
          :key="index"
          @click="router.push(`/searchList?keyword=${searchFor}`)"
        >
          {{ searchFor }}
        </li>
      </ul>
    </div>
    <div class="popular" v-if="popular.length">
      <h4 class="popular__title">热门搜索</h4>
      <ul class="popular__list">
        <li
          class="popular__list__item"
          v-for="(searchFor, index) in popular"
          :key="index"
          @click="handleSearch(searchFor)"
        >
          {{ searchFor }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../style/variables.scss';
.wrapper {
    margin: 0 .18rem;
}
.search {
  display: flex;
  position: relative;
  margin-top: .16rem;
  color: $content-fontcolor;
  .iconfont {
    position: absolute;
    top: .075rem;
    left: .16rem;
    color: $search-fontColor;
  }
  &__area {
    flex: 1;
    height: .32rem;
    border: none;
    border-radius: .16rem;
    background-color: $search-bgColor;
    outline: none;
    padding: .08rem .1rem .08rem .44rem;
    font-size: .14rem;
  }
  &__cancel {
    position: relative;
    top: .07rem;
    margin-left: .12rem;
    font-size: .16rem;
  }
}
.history {
  margin-top: .24rem;
  &__title {
    display: inline-block;
    margin: 0;
    font-size: .16rem;
    color: $content-fontcolor;
    line-height: .22rem;
  }
  &__clear {
    float: right;
    font-size: .14rem;
    line-height: .2rem;
  }
  &__list {
    margin: 0;
    margin-left: -.1rem;
    padding: 0;
    &__item {
      display: inline-block;
      margin-left: .1rem;
      margin-top: .12rem;
      background-color: $search-bgColor;
      border-radius: .02rem;
      padding: 0 .1rem;
      line-height: .32rem;
      font-size: .14rem;
      color: $light-fontColor;
    }
  }
}
.popular {
  margin-top: .24rem;
  &__title {
    display: inline-block;
    margin: 0;
    font-size: .16rem;
    color: $content-fontcolor;
    line-height: .22rem;
  }
  &__list {
    margin: 0;
    margin-left: -.1rem;
    padding: 0;
    &__item {
      display: inline-block;
      margin-left: .1rem;
      margin-top: .12rem;
      background-color: $search-bgColor;
      border-radius: .02rem;
      padding: 0 .1rem;
      line-height: .32rem;
      font-size: .14rem;
      color: $light-fontColor;
    }
  }
}
</style>
