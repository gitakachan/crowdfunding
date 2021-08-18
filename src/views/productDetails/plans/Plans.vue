<template>
  <div class="plans">
    <h4
      class="text-center bg-light border-start border-end border-4 border-warning rounded-3 fs-5 fw-bold mb-3"
    >
      選擇一個方案來支持
    </h4>
    <div class="items mb-times2">
      <div class="card rounded-3">
        <img
          src="../../../assets/imgs/plans/plan_img.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Plans",
  data() {
    return {};
  },
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
