<template>
  <div class="product">
    <div class="container pb-times2">
      <!-- product heders -->
      <div class="row">
        <div class="col pt-5">
          <h5>
            <span class="badge bg-secondary">魔法科技</span>
          </h5>
        </div>
      </div>
      <div class="row">
        <div class="col pb-4">
          <h1 class="fw-bold" style="letter-spacing:3px">
            拍出會動的照片｜<span class=" d-block d-lg-inline"
              >LivePhotos 魔法拍立得</span
            >
          </h1>
        </div>
      </div>
      <!-- img and content -->
      <div class="row">
        <!-- img on the left-->
        <div class="col col-lg-7">
          <img
            class="img-fluid"
            style="border-radius:40px"
            src="@/assets/imgs/product/produt.jpg"
            alt="產品圖片"
          />
        </div>
        <!-- content on the right -->
        <div class="col-lg-5">
          <div class="content pt-3 pt-lg-0">
            <!-- target -->
            <div class="target fs-14 text-dark mb-1 mb-lg-0">
              目標 <span class="baloo">${{ setNum(600000) }}</span>
            </div>
            <div
              class="baloo fs-times2 fw-bold"
              style="color:#53524F; height:56px; line-height:56px"
            >
              ${{ setNum(280047) }}
            </div>
            <!-- progress bar -->
            <div class="progress mb-2 mb-lg-20">
              <div
                class="progress-bar bg-warning fs-14 fw-bold text-secondary"
                role="progressbar"
                style="width: 41%;"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                41%
              </div>
              <!-- counts -->
            </div>
            <!-- conuts -->
            <div class="counts d-flex fw-bold" style="margin-bottom:9px">
              <div class="people flex-grow-1">
                <div class="text-dark fs-14">贊助人數</div>
                <div class="fs-2 fw-bold">
                  <!-- 數字套用baloo字體後高度比較小 所以再放大 -->
                  <span class="baloo fs-1">{{ setNum(1374) }}</span> 人
                </div>
              </div>
              <div class="countdown flex-grow-1">
                <div class="text-dark fs-14">募資倒數</div>
                <div class="fs-2 fw-bold">
                  <!-- 數字套用baloo字體後高度比較小 所以再放大 -->
                  <span class="baloo fs-1">{{ setNum(27) }}</span> 天
                </div>
              </div>
            </div>
            <!-- icons -->
            <div class="icons text-center mb-3">
              <div class="mobile d-block d-lg-none d-flex">
                <div
                  class="iconContainer flex-fill d-flex align-items-center"
                  v-for="item in icons"
                  :key="item.title"
                >
                  <img :src="item.link" alt="" />
                  <span class="mx-auto d-lg-none fs-12">{{ item.title }}</span>
                  <span class="mx-auto d-none d-lg-block fs-14">{{
                    item.title
                  }}</span>
                </div>
              </div>
              <div class="laptop d-none d-lg-block">
                <div class="d-flex">
                  <button
                    v-for="item in icons"
                    :key="item.title"
                    class="btn p-0"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    :title="item.title"
                  >
                    <img
                      style="width:24px; height:24px"
                      :src="item.link"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
            <!-- message -->
            <p
              class="rounded bg-white border-start border-4 border-warning p-3 text-dark mb-3 mb-lg-4"
            >
              專案募資中！<br />
              在
              <span class="baloo fw-bold fs-5" style="line-height:20px"
                >&nbsp;2021/06/14 23:59&nbsp;</span
              >
              募資結束前，您都可以贊助我們！
            </p>

            <!-- buttons -->
            <div class="btns">
              <div class="mb-2">
                <button class="btn btn-warning rounded-pill w-100 fs-18 btn-lg">
                  贊助專案
                </button>
              </div>
              <div class="row gx-2">
                <div class="col col-lg-7">
                  <button
                    class="btn btn-outline-secondary rounded-pill fs-18 w-100 btn-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-heart-fill me-2"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                      />
                    </svg>
                    追蹤專案
                  </button>
                </div>
                <div class="col col-lg-5">
                  <button
                    class="btn btn-outline-secondary rounded-pill fs-18 w-100 btn-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-share-fill me-2"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"
                      />
                    </svg>
                    分享
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import tooltip from "@/methods/tooltip.js";
import toLocaleStringMixin from "@/mixins/toLocaleStringMixin";
export default {
  name: "Product",
  mixins: [toLocaleStringMixin],
  data() {
    return {
      icons: [
        {
          link:
            "https://hexschool.github.io/boootstrap5WebLayout/assets/icon_good01.svg",
          title: "認證標章",
        },
        {
          link:
            "https://hexschool.github.io/boootstrap5WebLayout/assets/icon_good02.svg",
          title: "品質保證",
        },
        {
          link:
            "https://hexschool.github.io/boootstrap5WebLayout/assets/icon_good03.svg",
          title: "原生創意",
        },
        {
          link:
            "https://hexschool.github.io/boootstrap5WebLayout/assets/icon_good04.svg",
          title: "人氣王",
        },
      ],
    };
  },
  mounted() {
    tooltip();
  },
};
</script>
<style lang="scss" scoped>
//buttons
$secondary: #858377;
$danger: #ff785e;
$warning: #ffdf65;

@mixin btnHover($color, $bgColor) {
  color: $color;
  background-color: $bgColor;
  border-color: $bgColor;
}

.product {
  background-color: #f8f9fa;

  .content {
    .icons {
      .mobile .iconContainer {
        margin-right: 20px;

        &:last-child {
          margin-right: 0;
        }
      }
      .laptop {
        img {
          margin-right: 25px;
        }
      }
    }
    .btns {
      .btn-warning:hover {
        @include btnHover(#fff, $danger);
      }
      .btn-outline-secondary:hover {
        @include btnHover($secondary, $warning);
        svg {
          color: $danger;
        }
      }
    }
  }
}
</style>
