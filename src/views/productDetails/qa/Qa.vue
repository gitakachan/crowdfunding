<template>
  <div class="qa">
    <div class="accordion" id="accordion">
      <div class="accordion-item mb-3">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <span class="number bg-warning me-3 fw-bold">
              Q1
            </span>
            <span class="text">影片拍完之後可以編輯嗎？</span>
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordion"
        >
          <div class="accordion-body ps-lg-time4">
            可以進行簡易的編輯，內建 5
            種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！
          </div>
        </div>
      </div>
      <div class="accordion-item mb-3">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            <span class="number bg-warning me-3">
              Q1
            </span>
            <span class="text"> 有提供保固或維修服務嗎？</span>
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordion"
        >
          <div class="accordion-body">
            受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.qa {
  .accordion {
    .accordion-item {
      border: 1px solid #e5e5e5;
      border-radius: 8px;
      overflow: hidden; //裡面botton的邊角會跑出來

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
