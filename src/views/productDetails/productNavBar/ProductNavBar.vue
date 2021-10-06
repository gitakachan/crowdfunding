<template>
  <div class="product-nav-bar bg-white border position-sticky sticky-top">
    <div class="container w-100 d-flex">
      <a
        class="text-decoration-none text-center flex-grow-1 flex-lg-grow-0 link-dark"
        style="width:96px"
        v-for="(item, index) in links"
        :key="item.id"
        @click="routerAction(item.path, index)"
        :class="{ active: index == active }"
        >{{ item.title }}</a
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductNavBar",
  inject: ["emitter"],
  data() {
    return {
      active: 0,
      links: [
        { id: "intro", title: "專案介紹", path: "/product/intro" },
        { id: "qa", title: "常見問答", path: "/product/qa" },
        {
          id: "process",
          title: "目前進度",
          path: "/product/process",
        },
        { id: "message", title: "留言", path: "/product/message" },
      ],
    };
  },
  methods: {
    routerAction(path, index) {
      this.emitter.emit("toTop");
      this.active = index;
      if (this.$route.fullPath === path) {
        return;
      } else {
        this.$router.push(path);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.product-nav-bar {
  a {
    height: 70px;
    line-height: 70px;

    &.active {
      font-weight: bold;
      border-bottom: 2px solid #ffdf65;
    }
  }
}

@media screen and (max-width: 992px) {
  .product-nav-bar a {
    height: 52px;
    line-height: 52px;
  }
}
</style>
