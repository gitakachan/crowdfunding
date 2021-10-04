<template>
  <div ref="productDetails" class="product-details container pt-times2 pt-lg-5">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "productDetails",
  inject: ["emitter"],
  watch: {
    "$route.path": {
      handler() {
        this.emitter.all.clear();
        this.emitter.on("toTop", () => {
          this.returnTop(this.$refs.productDetails);
        });
      },
    },
  },
  methods: {
    returnTop(ref) {
      var top = ref.offsetTop;
      window.scrollTo(0, top - 40);
    },
  },
};
</script>
<style lang="scss" scoped></style>
