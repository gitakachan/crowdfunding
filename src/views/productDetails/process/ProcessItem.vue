<template>
  <div class="processItem card mb-3 rounded-3">
    <div class="row gx-0">
      <div class="col-4">
        <slot name="bg"></slot>
      </div>
      <div class="col-8 pb-2 pb-lg-3">
        <div class="card-body pb-0">
          <h5 class="card-title fw-bold text-align-left fs-6">
            {{ event.title }}
          </h5>
          <p class="time fs-14 mb-2 text-secondary baloo text-align-left">
            {{ event.time }}
          </p>
          <p class="card-text d-none d-lg-block mb-lg-3">{{ event.text }}</p>
          <p class="card-text ">
            <small class="text-muted">
              <a
                @click.prevent
                :href="`${event.link}`"
                class="text-decoration-none fw-bold text-danger"
                >MORE</a
              >
            </small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProcessItem",
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.processItem {
  .img {
    background: #ccc;
  }
  .card-title {
    letter-spacing: 0.7px;
  }
  p.time {
    letter-spacing: 0.49px;
  }
}
</style>
