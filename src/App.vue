<template>
  <div id="app">
    <nav-bar></nav-bar>
    <product></product>
  </div>
</template>

<script>
import NavBar from "../src/components/navbar/NavBar.vue";
import Product from "./components/product/Product.vue";
export default {
  name: "App",
  components: { NavBar, Product },
};
</script>

<style lang="scss">
@import "./assets/scss/all.scss";
</style>
