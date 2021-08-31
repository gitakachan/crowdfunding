<template>
  <div class="plans mb-times2">
    <h4
      class="text-center bg-light border-start border-end border-4 border-warning rounded-3 fs-5 fw-bold mb-3"
    >
      選擇一個方案來支持
    </h4>
    <div class="items">
      <plan class="mb-3">
        <template v-slot:title>買一送一，只有兩百組別錯過</template>
        <template v-slot:price>$1600</template>
      </plan>
      <plan class="mb-3">
        <template v-slot:title>買一送一，只有兩百組別錯過</template>
        <template v-slot:price>$1600</template>
      </plan>
      <plan>
        <template v-slot:title>買一送一，只有兩百組別錯過</template>
        <template v-slot:price>$1600</template>
      </plan>
    </div>
  </div>
</template>
<script>
import plan from "./plan.vue";
export default {
  components: { plan },
  name: "Plans",
};
</script>

<style lang="scss" scoped>
.plans {
  h4 {
    height: 40px;
    line-height: 40px;
    letter-spacing: 2px;
  }

  .items {
    .card {
      //border-radius: 14px;
      img {
        border-radius: 8px;
      }
    }
  }
}
</style>
