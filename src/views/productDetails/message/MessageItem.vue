<template>
  <div class="messageItem card mb-3 rounded-3">
    <div class="question">
      <div class=" d-flex">
        <div class="headicon-container">
          <slot name="headIcon"></slot>
        </div>
        <div>
          <p class="name">{{ message.name }}</p>
          <p class="time">{{ message.time }}</p>
        </div>
      </div>
      <p class="message">{{ message.message }}</p>
    </div>
    <div class="reply" v-if="message.reply.length !== 0">
      <p>提案者回覆</p>
      <p>{{ message.reply }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "MessageItem",
  data() {
    return {};
  },
  props: {
    message: {
      type: Object,
      //reqired: true,
    },
  },
};
</script>
<style lang="scss"></style>
