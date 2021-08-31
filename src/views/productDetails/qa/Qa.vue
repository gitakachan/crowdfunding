<template>
  <div class="qa">
    <div class="accordion" id="accordion">
      <div
        v-for="(item, index) in qas"
        :key="item.id"
        class="accordion-item mb-3"
        :class="{ currentExpend: index === currentExpend }"
      >
        <h2 class="accordion-header" :id="`q+${item.id}`">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="`#collapse${item.id}`"
            aria-expanded="false"
            :aria-controls="`collapse${item.id}`"
            @click="btnClick(index)"
          >
            <span class="number bg-warning me-3 fw-bold">
              {{ "Q" + item.id }}
            </span>
            <span class="text"> {{ item.q }}</span>
          </button>
        </h2>
        <div
          :id="`collapse${item.id}`"
          class="accordion-collapse collapse"
          :aria-labelledby="`heading${item.id}`"
          data-bs-parent="#accordion"
        >
          <div class="accordion-body">
            {{ item.a }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Qa",
  data() {
    return {
      currentExpend: 0,
      qas: [
        {
          id: 1,
          q: "影片拍完之後可以編輯嗎？",
          a:
            "可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！",
        },
        {
          id: 2,
          q: "有提供保固或維修服務嗎？",
          a:
            "受就以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。",
        },
        {
          id: 3,
          q: "補充包底片要去哪裡購買呢？",
          a:
            "受就以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。",
        },
        {
          id: 4,
          q: "印出來的拍立得照片需要充電嗎？",
          a:
            "受就以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。",
        },
        {
          id: 5,
          q: "運送方式及付款方式有哪些呢？",
          a:
            "受就以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。",
        },
        {
          id: 6,
          q: "退換貨方式及規則",
          a:
            "受就以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。",
        },
      ],
    };
  },
  methods: {
    btnClick(i) {
      this.currentExpend = i;
      // console.log(this.currentExpend);
    },
  },
};
</script>
<style lang="scss" scoped>
.qa {
  .accordion {
    .accordion-item {
      border: 1px solid #e5e5e5;
      border-radius: 8px;
      overflow: hidden; //裡面 botton 的邊角會跑出來
      &.currentExpend {
        //搭配 btnClick methods 動態給 button 父層的 accordion 綁定 currentExpend class
        box-shadow: 0 0 8px 0 rgba(73, 72, 70, 0.15);
        border-radius: 4px;
      }
      button {
        background: #fff;
        color: #494846;
        .number {
          width: 28px;
          height: 28px;
          line-height: 28px;
          text-align: center;
        }
        &:focus {
          border-bottom: 1px solid #e5e5e5;
          box-shadow: none;
        }
      }
    }
  }
}
</style>
