<template>
  <div class="product-details pb-time4">
    <product></product>
    <product-nav-bar></product-nav-bar>
    <div ref="productDetails" class="container pt-times2 pt-lg-5">
      <div class="row">
        <div class="col-12 col-lg-8">
          <router-view></router-view>
          <div class="plans-sm-container d-lg-none">
            <company></company>
            <plans></plans>
          </div>
          <support></support>
        </div>
        <div class="plans-lg-container col-12 col-lg-4 d-none d-lg-block">
          <div class="sticky">
            <div class="plans-lg">
              <company></company>
              <plans></plans>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Product from "@/components/product/Product.vue";
import ProductNavBar from "@/components/productNavBar/ProductNavBar.vue";
import Support from "@/components/support/Support.vue";
import Company from "./company/Company.vue";
import Plans from "./plans/Plans.vue";
export default {
  name: "productDetails",
  inject: ["emitter"],
  components: { Product, ProductNavBar, Support, Company, Plans },
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
<style lang="scss" scoped>
.sticky {
  position: sticky;
  top: 80px;
  .plans-lg {
    overflow: auto;
    height: calc(100vh - 80px);
  }
}
</style>
