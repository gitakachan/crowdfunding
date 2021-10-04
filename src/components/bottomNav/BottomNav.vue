<template>
  <ul class="nav d-lg-none position-fixed fixed-bottom bg-warning">
    <li class="nav-item w-100">
      <a
        class="nav-link w-100 text-center text-dark fw-bold"
        href="#"
        @click.prevent="toBottom"
        style="height:44px"
        >贊助專案</a
      >
    </li>
  </ul>
</template>
<script>
export default {
  name: "BottomNav",
  methods: {
    toBottom() {
      window.scrollTo(0, document.body.scrollHeight);
    },
  },
};
</script>
<style lang="scss"></style>
