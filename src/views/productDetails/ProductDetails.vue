<template>
  <div class="product-details container overflow-hidden pt-times2 pt-lg-5">
    <div class="row gx-5">
      <div class="details col-12 col-lg-8 pb-times2 pb-lg-5">
        <router-view></router-view>
      </div>
      <div class="plans col-12 col-lg-4">
        <company></company>
        <plans></plans>
      </div>
      <div class="support col-12 col-lg-8">
        <support></support>
      </div>
    </div>
  </div>
</template>
<script>
import Company from "./company/Company.vue";
import Plans from "./plans/Plans.vue";
import Support from "./support/Support.vue";
export default {
  components: { Support, Company, Plans },
  name: "productDetails",
  data() {
    return {};
  },
};
</script>
<style lang="scss"></style>
