<template>
  <div id="app">
    <nav-bar></nav-bar>
    <product></product>
    <product-nav-bar></product-nav-bar>
    <product-details></product-details>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import NavBar from "../src/components/navbar/NavBar.vue";
import BottomNav from "./components/bottomNav/BottomNav.vue";
import Product from "./components/product/Product.vue";
import ProductNavBar from "./components/productNavBar/ProductNavBar.vue";
import ProductDetails from "./views/productDetails/ProductDetails.vue";
export default {
  name: "App",
  components: { NavBar, Product, ProductNavBar, ProductDetails, BottomNav },
};
</script>

<style lang="scss">
@import "./assets/scss/all.scss";
body {
  padding-bottom: 60px;
}
</style>
