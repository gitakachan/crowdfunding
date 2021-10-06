<template>
  <div class="product-details pb-times4">
    <product></product>
    <product-nav-bar></product-nav-bar>
    <div ref="productDetails" class="container pt-times2 pt-lg-5">
      <div class="row">
        <div class="col-12 col-lg-8">
          <div class="mb-times2">
            <router-view></router-view>
          </div>
          <div class="plans-sm-container d-lg-none">
            <company></company>
            <plans></plans>
          </div>
          <div ref="support"><support></support></div>
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
    <div :class="{ 'd-none': isHide }"><bottom-nav></bottom-nav></div>
  </div>
</template>
<script>
import Product from "./product/Product.vue";
import ProductNavBar from "./productNavBar/ProductNavBar.vue";
import Support from "./support/Support.vue";
import Company from "./company/Company.vue";
import Plans from "./plans/Plans.vue";
import BottomNav from "../../components/bottomNav/BottomNav.vue";
export default {
  name: "productDetails",
  inject: ["emitter"],
  components: { Product, ProductNavBar, Support, Company, Plans, BottomNav },
  data() {
    return {
      isHide: false,
    };
  },
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
    hideBottomNav() {
      if (window.scrollY > this.$refs.support.offsetTop - 100) {
        // console.log(window.scrollY, this.$refs.support.offsetTop); //頁面垂直位移量, support距最上方距離
        this.isHide = true;
      } else {
        this.isHide = false;
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.hideBottomNav);
  },

  destroyed() {
    window.removeEventListener("scroll", this.hideBottomNav);
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
