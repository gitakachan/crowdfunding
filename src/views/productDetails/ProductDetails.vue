<template>
  <div class="product-details container overflow-hidden pt-times2 pt-lg-5">
    <div class="row gx-5">
      <div class="details col-12 col-lg-8 pb-times2 pb-lg-5">
        <router-view></router-view>
      </div>
      <div class="plan col-12 col-lg-4"><div class="bg-primary">kk</div></div>
      <div class="support col-12 col-lg-8">
        <support></support>
      </div>
    </div>
  </div>
</template>
<script>
import Support from "./support/Support.vue";
export default {
  components: { Support },
  name: "productDetails",
  data() {
    return {};
  },
};
</script>
<style lang="scss"></style>
