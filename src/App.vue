<template>
  <div id="app">
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import NavBar from "../src/components/navbar/NavBar.vue";
export default {
  name: "App",
  components: { NavBar },
};
</script>

<style lang="scss">
@import "./assets/scss/all.scss";
</style>
