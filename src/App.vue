<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
    <bottom-nav></bottom-nav>
    <user-footer></user-footer>
  </div>
</template>
<script>
import NavBar from "../src/components/navbar/NavBar.vue";
import BottomNav from "./components/bottomNav/BottomNav.vue";
import ProductDetails from "./views/productDetails/ProductDetails.vue";

import mitt from "mitt";
import UserFooter from "./components/footer/UserFooter.vue";
const emitter = mitt();

export default {
  name: "App",
  components: {
    NavBar,
    ProductDetails,
    BottomNav,
    UserFooter,
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
</style>
