<template>
  <div class="product-nav-bar bg-white">
    <router-link to="/product/intro">
      專案介紹
    </router-link>
    <router-link to="/product/qa">
      常見問答
    </router-link>
    <router-link to="/product/process">
      目前進度
    </router-link>
    <router-link to="/product/message">
      留言
    </router-link>
  </div>
</template>
<script>
export default {
  name: "ProductNavBar",
  data() {
    return {};
  },
};
</script>
<style lang="scss"></style>
