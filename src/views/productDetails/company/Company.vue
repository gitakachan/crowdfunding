<template>
  <div class="company container-fluid border border-1 rounded-3 p-3 mb-times2">
    <div class="d-flex align-items-center mb-3">
      <div
        class="company-img border border-4 border-warning rounded-circle me-3"
      >
        <img
          class="rounded-circle d-lg-none"
          style="width:70px; height:70px"
          src="@/assets/imgs/company/store_img.jpg"
          alt=""
        />
        <img
          class="rounded-circle d-none d-lg-block"
          style="width:100px; height:100px"
          src="@/assets/imgs/company/store_img.jpg"
          alt=""
        />
      </div>
      <div class="company-name">
        <h4>缺錢事務所</h4>
        <p>
          <a href="#" class="text-decoration-none fs-14" style="color:#373A3C"
            >已發起<span class="fw-bold">1</span>個專案</a
          >
        </p>
      </div>
    </div>
    <p
      class="d-none d-lg-block"
      style="color:#373A3C;letter-spacing: 0.7px;
text-align: justify;"
    >
      需要點錢錢做些酷酷的東西，拜託各位乾爹乾媽囉！
    </p>
    <!-- button style大部分寫在scss -->
    <div class="icons d-flex">
      <button type="button" class="btn-fb rounded-circle">
        <i class="bi bi-facebook"></i>
      </button>
      <button type="button" class="btn-yt rounded-circle">
        <i class="bi bi-youtube"></i>
      </button>
      <button
        type="button"
        class="btn btn-msg btn-outline-secondary rounded-pill border-1 d-flex align-items-center"
      >
        <i class="bi bi-chat-dots"></i>
        <span class="fs-12" style="margin-left:5px">聯絡我們</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Company",
};
</script>
<style lang="scss">
.company {
  .icons {
    display: flex;
    align-items: center;
    .btn-fb,
    .btn-yt {
      border: none;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .btn-fb {
      background-color: #fff;
      margin-right: 8px;

      i {
        font-size: 30px;
        color: #858377;
        line-height: 30px;
        transform: translateY(-1px);
      }
    }

    .btn-yt {
      background-color: #858377;
      i {
        color: #fff;
        font-size: 19px;
        line-height: 19px;
      }
    }

    .btn.btn-msg {
      margin-left: auto;
      &:hover {
        i {
          color: black;
        }
      }
    }
  }
}
</style>
