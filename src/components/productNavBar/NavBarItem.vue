<template>
  <div class="nav-bar-item">
    <router-link to="/product/intro">
      <slot name="item"></slot>
      <!-- <p>{{ link }}</p> -->
    </router-link>
  </div>
</template>
<script>
export default {
  name: "NavBarItem",
  props: {
    link: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.nav-bar-item {
  list-style: none;
}
</style>
