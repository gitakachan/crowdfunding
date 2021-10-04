<template>
  <div id="app">
    <nav-bar></nav-bar>
    <product></product>
    <product-nav-bar></product-nav-bar>
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-8">
          <product-details></product-details>
        </div>
        <div class="plans-lg-container col-12 col-lg-4 d-none d-lg-block">
          <div class="sticky">
            <div class="plans-lg">
              <div class="sticky">
                <company></company>
                <plans></plans>
              </div>
            </div>
          </div>
        </div>
      </div>
      <support></support>
    </div>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import NavBar from "../src/components/navbar/NavBar.vue";
import Company from "../src/components/company/Company.vue";
import Plans from "../src/components/plans/Plans.vue";
import Support from "../src/components/support/Support.vue";
import BottomNav from "./components/bottomNav/BottomNav.vue";
import Product from "./components/product/Product.vue";
import ProductNavBar from "./components/productNavBar/ProductNavBar.vue";
import ProductDetails from "./views/productDetails/ProductDetails.vue";

import mitt from "mitt";
const emitter = mitt();
export default {
  name: "App",
  components: {
    NavBar,
    Product,
    ProductNavBar,
    ProductDetails,
    BottomNav,
    Company,
    Plans,
    Support,
  },
  provide() {
    return {
      emitter,
    };
  },
};
</script>

<style lang="scss">
@import "./assets/scss/all.scss";
body {
  padding-bottom: 60px;

  .sticky {
    position: sticky;
    top: 80px;
    .plans-lg {
      overflow: auto;
      height: calc(100vh - 80px);
    }
  }
}
</style>
