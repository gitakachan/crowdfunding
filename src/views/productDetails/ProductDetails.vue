<template>
  <div ref="productDetails" class="product-details container pt-times2 pt-lg-5">
    <div class="row gx-5">
      <div class="details col-12 col-lg-8">
        <div class="pb-times2 pb-lg-5">
          <router-view></router-view>
        </div>
        <div class="plans-sm-container col-12 col-lg-4 d-lg-none">
          <div class="plans-sm">
            <company></company>
            <plans></plans>
          </div>
        </div>
        <support></support>
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
</template>
<script>
import Company from "./company/Company.vue";
import Plans from "./plans/Plans.vue";
import Support from "./support/Support.vue";
export default {
  components: { Support, Company, Plans },
  name: "productDetails",
  inject: ["emitter"],
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
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.product-details {
  .plans-lg-container {
    .sticky {
      position: sticky;
      top: 80px;
      .plans-lg {
        overflow: auto;
        height: calc(100vh - 80px);
      }
    }
  }
}
</style>
