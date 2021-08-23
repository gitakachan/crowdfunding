<template>
  <div class="process">
    <process-item :event="events[0]">
      <template v-slot:bg>
        <div
          class="bg h-100 w-100"
          :style="{
            backgroundImage:
              'url(' + require('@/assets/imgs/process/news01.jpg') + ')',
          }"
        ></div>
      </template>
    </process-item>
    <process-item :event="events[1]">
      <template v-slot:bg>
        <div
          class="bg w-100 h-100"
          :style="{
            backgroundImage:
              'url(' + require('@/assets/imgs/process/news02.jpg') + ')',
          }"
        ></div>
      </template>
    </process-item>
    <process-item :event="events[2]">
      <template v-slot:bg>
        <div
          class="bg w-100 h-100"
          :style="{
            backgroundImage:
              'url(' + require('@/assets/imgs/process/news03.jpg') + ')',
          }"
        ></div>
      </template>
    </process-item>
  </div>
</template>
<script>
import ProcessItem from "./ProcessItem.vue";
export default {
  name: "Process",
  data() {
    return {
      url: "http://google.com",
      events: [
        {
          title: "高雄體驗會｜免費參加送帆布袋",
          time: "2021-6-20",
          text:
            "大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！",
          linkUrl: "#",
        },
        {
          title: "高雄體驗會｜免費參加送帆布袋",
          time: "2021-6-20",
          text:
            "大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！",
          linkUrl: "#",
        },
        {
          title: "高雄體驗會｜免費參加送帆布袋",
          time: "2021-6-20",
          text:
            "大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！",
          linkUrl: "#",
        },
      ],
    };
  },
  components: {
    ProcessItem,
  },
};
</script>
<style lang="scss" scoped>
.process {
  .bg {
    background-color: #ccc;
    background-size: cover;
    background-position: center center;
    object-fit: cover;
  }
}
</style>
