<template>
  <div id="app">
    <nav-bar></nav-bar>
    <product></product>
    <product-nav-bar></product-nav-bar>

    <div class="product-details container">
      <div class="row">
        <div class="left col-12 col-lg-8">
          <router-view></router-view>
        </div>
        <div class="right col-12 col-lg-4 bg-primary">kk</div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../src/components/navbar/NavBar.vue";
import Product from "./components/product/Product.vue";
import ProductNavBar from "./components/productNavBar/ProductNavBar.vue";
export default {
  name: "App",
  components: { NavBar, Product, ProductNavBar },
};
</script>

<style lang="scss">
@import "./assets/scss/all.scss";
</style>
