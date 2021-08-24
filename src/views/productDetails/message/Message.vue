<template>
  <div class="message">
    <messageItem :message="messages[0]">
      <template v-slot:headIcon>
        <div class="headIcon">
          <img src="@/assets/imgs/message/user_img01.jpg" alt="user-img" />
        </div>
      </template>
    </messageItem>
    <messageItem :message="messages[1]">
      <template v-slot:headIcon>
        <div class="headIcon">
          <img src="@/assets/imgs/message/user_img02.jpg" alt="user-img" />
        </div>
      </template>
    </messageItem>
    <messageItem :message="messages[2]">
      <template v-slot:headIcon>
        <div class="headIcon">
          <img src="@/assets/imgs/message/user_img02.jpg" alt="user-img" />
        </div>
      </template>
    </messageItem>
    <messageItem :message="messages[3]">
      <template v-slot:headIcon>
        <div class="headIcon">
          <img src="@/assets/imgs/message/user_img02.jpg" alt="user-img" />
        </div>
      </template>
    </messageItem>
  </div>
</template>
<script>
import MessageItem from "./MessageItem.vue";

export default {
  name: "Message",
  data() {
    return {
      messages: [
        {
          name: "廖小杰",
          time: "2020年5月22日 11:32",
          message:
            "晚上起床上廁所看到照片裡的人一直動其實有點恐怖，希望可以有暫停或是定時的功能！",
          reply: "你要嘛起床的時候開燈，要嘛給我們更多錢開發阿",
        },
        {
          name: "卡阿伯",
          time: "2020年5月22日 11:32",
          message: "希望有更多花色可以選擇！我女兒最近喜歡綠色",
          reply: "",
        },
        {
          name: "賈師",
          time: "2020年5月22日 11:32",
          message:
            "晚上起床上廁所看到照片裡的人一直動其實有點恐怖，希望可以有暫停或是定時的功能！",
          reply: "",
        },
        {
          name: "俊俊",
          time: "2020年5月22日 11:32",
          message: "test123 看一下我是不是真的可以留言",
          reply: "",
        },
      ],
    };
  },
  components: {
    MessageItem,
  },
};
</script>
<style lang="scss" scoped>
.message {
  .headIcon img {
    width: 50px;
    height: 50px;
    margin-right: 14px;
  }
}

@media (min-width: 992px) {
  .message {
    .headIcon img {
      width: 60px;
      height: 60px;
      margin-right: 16px;
    }
  }
}
</style>
