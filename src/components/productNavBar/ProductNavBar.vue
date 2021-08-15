<template>
  <div class="product-nav-bar bg-white border">
    <div class="container">
      <router-link
        class="text-decoration-none"
        v-for="item in links"
        :key="item.title"
        :to="item.path"
        >{{ item.title }}</router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductNavBar",
  data() {
    return {
      links: [
        { title: "專案介紹", path: "/product/intro" },
        { title: "常見問答", path: "/product/qa" },
        { title: "目前進度", path: "/product/process" },
        { title: "留言", path: "/product/message" },
      ],
    };
  },
};
</script>
<style lang="scss">
.product-nav-bar {
  height: 70px;
}
</style>
