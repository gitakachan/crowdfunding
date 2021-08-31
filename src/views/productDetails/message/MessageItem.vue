<template>
  <div class="messageItem card mb-3 rounded-3 p-3">
    <div class="question">
      <div class="d-flex mb-2 mb-lg-3">
        <div class="headicon-container">
          <slot name="headIcon"></slot>
        </div>
        <div>
          <p class="name">{{ message.name }}</p>
          <p class="time text-secondary">{{ message.time }}</p>
        </div>
      </div>
      <p class="message">{{ message.message }}</p>
    </div>
    <div
      class="reply mt-2 mt-lg-3 p-3 rounded"
      v-if="message.reply.length !== 0"
    >
      <p class="title text-danger fs-lg-times2 mb-1 mb-lg-0">提案者回覆</p>
      <p>{{ message.reply }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "MessageItem",
  props: {
    message: {
      type: Object,
      //reqired: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.messageItem {
  border-color: #e5e5e5;

  .question {
    text-align: left;
    .name {
      letter-spacing: 1.6px;
    }
    .time {
      font-size: 12px;
      letter-spacing: 1.71px;
    }
    .message {
      letter-spacing: 0.7px;
      text-align: justify;
    }
  }
  .reply {
    background: #f8f9fa;
    letter-spacing: 0.7px;
    text-align: justify;

    .title {
      font-size: 12px;
      letter-spacing: 0.52px;
    }
  }
}

@media (min-width: 992px) {
  .messageItem {
    .question {
      .name {
        font-size: 20px;
      }
      .time {
        font-size: 14px;
        letter-spacing: 2px;
      }
    }
    .reply .title {
      font-size: 14px;
      letter-spacing: 0.61px;
    }
  }
}
</style>
