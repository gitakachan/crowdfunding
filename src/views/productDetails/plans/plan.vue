<template>
  <div class="plan card rounded-3">
    <div class="img mb-2">
      <img
        src="../../../assets/imgs/plans/plan_img.jpg"
        class="card-img-top"
        alt="..."
      />
    </div>
    <div class="card-body content pt-2">
      <p class="time d-flex text-dark fs-14">
        <span style="letter-spacing: 2px;">現時優惠</span>
        <span class="ms-auto">2 days 20:05:20</span>
      </p>
      <hr class="my-2" />
      <h5 class="card-title fw-bold fs-18" style="letter-spacing: 2px;">
        <slot name="title"></slot>
      </h5>
      <div class="price baloo fs-2 fw-bold">
        <slot name="price"></slot>
      </div>
      <div class="mb-2">
        <span
          class="badge fs-12 me-2 text-secondary fw-bold"
          style="background-color:#E8E8DB"
          >已被贊助88次</span
        >
        <span class="badge fs-12 bg-secondary text-white fw-bold"
          >限量<span class="text-warning">200</span>個</span
        >
      </div>
      <p class="card-text text-secondary lg-lg mb-3">
        受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。
      </p>
      <button type="button" class="btn btn-warning rounded-pill w-100">
        贊助此專案
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Plan",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.plan {
  .btn.btn-warning {
    height: 42px;
    letter-spacing: 1.1px;
    text-align: center;
    line-height: 21px;
    &:hover {
      background-color: #ff785e;
      border-color: #ff785e;
      color: #fff;
    }
  }
  .card-text {
    letter-spacing: 0.7px;
    text-align: justify;
  }
}
</style>
