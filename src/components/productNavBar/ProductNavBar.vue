<template>
  <div class="product-nav-bar bg-white border">
    <div class="container w-100 d-flex">
      <router-link
        class="text-decoration-none text-center flex-grow-1 flex-lg-grow-0 link-dark"
        style="width:96px"
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
      currentIndex: 0,
      links: [
        { title: "專案介紹", path: "/product/intro" },
        { title: "常見問答", path: "/product/qa" },
        { title: "目前進度", path: "/product/process" },
        { title: "留言", path: "/product/message" },
      ],
    };
  },
  methods: {
    navClick(idx) {
      this.currentIndex = idx;
      console.log(this.currentIndex);
    },
  },
};
</script>
<style lang="scss">
.product-nav-bar {
  a {
    height: 70px;
    line-height: 70px;

    &.router-link-active {
      font-weight: bold;
      border-bottom: 2px solid #ffdf65;
    }
  }
}

@media screen and (max-width: 1024px) {
  .product-nav-bar a {
    height: 52px;
    line-height: 52px;
  }
}
</style>
