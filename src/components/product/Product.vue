<template>
  <div class="product">
    <div class="container pb-5">
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
        <!-- img in the left-->
        <div class="col col-lg-7">
          <img
            class="img-fluid"
            style="border-radius:40px"
            src="../../assets/imgs/product/produt.jpg"
            alt=""
          />
        </div>
        <!-- content in the right -->
        <div class="col-lg-5">
          <div class="content">
            <div class="target">
              目標 $600,000
            </div>
            <div>$280,047</div>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 41%;"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                41%
              </div>
            </div>
            <div class="counts d-flex">
              <div class="people flex-grow-1">
                <div>贊助人數</div>
                <div>1374人</div>
              </div>
              <div class="countdown flex-grow-1">
                <div>募資倒數</div>
                <div>27天</div>
              </div>
            </div>

            <div class="icons text-center">
              <div class="mobile d-block d-lg-none d-flex">
                <div
                  class="iconContainer flex-fill d-flex align-items-center"
                  v-for="item in icons"
                  :key="item.title"
                >
                  <img :src="item.link" alt="" />
                  <span class="mx-auto" style="font-size:12px">{{
                    item.title
                  }}</span>
                </div>
              </div>
              <div class="laptop d-none d-lg-block">
                <div class="d-flex">
                  <img
                    style="width:24px; height:24px"
                    v-for="item in icons"
                    :key="item.title"
                    :src="item.link"
                    alt=""
                    v-tooltip="item.title"
                  />
                </div>
              </div>
            </div>
            <div>
              專案募資中！<br />
              在 2021/06/14 23:59 募資結束前，您都可以贊助我們！
            </div>

            <div class="btns">
              <button>贊助專案</button>
              <button>追蹤專案</button>
              <button>分享</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Product",
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
};
</script>
<style lang="scss">
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
  }
}
//tooltip style
.tooltip {
  display: block !important;
  z-index: 10000;
}

.tooltip .tooltip-inner {
  background: #494846;
  border-radius: 4px;
  padding: 5px 10px 4px;
  font-weight: 200;
  letter-spacing: 2px;
}

.tooltip .tooltip-arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
  border-color: black;
}

.tooltip[x-placement^="top"] {
  margin-bottom: 5px;
}

.tooltip[x-placement^="top"] .tooltip-arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  bottom: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="bottom"] {
  margin-top: 5px;
}

.tooltip[x-placement^="bottom"] .tooltip-arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  top: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="right"] {
  margin-left: 5px;
}

.tooltip[x-placement^="right"] .tooltip-arrow {
  border-width: 5px 5px 5px 0;
  border-left-color: transparent !important;
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  left: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[x-placement^="left"] {
  margin-right: 5px;
}

.tooltip[x-placement^="left"] .tooltip-arrow {
  border-width: 5px 0 5px 5px;
  border-top-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  right: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[aria-hidden="true"] {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.15s, visibility 0.15s;
}

.tooltip[aria-hidden="false"] {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.15s;
}
</style>
