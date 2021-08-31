<template>
  <div class="support" id="support">
    <div class="icon text-center">
      <img
        src="https://hexschool.github.io/boootstrap5WebLayout/assets/hezuo.svg"
        alt=""
      />
    </div>
    <div class="title mb-3  mb-lg-4">
      <div class="position-relative">
        <div
          class="progress bg-warning position-absolute top-50 start-50 translate-middle w-100"
          style="height: 3px;"
        >
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 0%;"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <h4 class="bg-white mx-auto text-center">
          贊助專案
        </h4>
      </div>
    </div>
    <form>
      <div class="mb-3">
        <label class="form-label">贊助方案</label>
        <select name="plan" class="form-select" aria-label="select" required>
          <option selected disabled value="">請選擇一個方案</option>
          <option value="planA">方案ㄧ</option>
          <option value="planB">方案二</option>
          <option value="planC">方案三</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="name" class="form-label">收件人姓名</label>
        <input type="text" class="form-control" id="name" required />
      </div>
      <div class="mb-3">
        <label for="mobile" class="form-label">聯絡電話</label>
        <input name="mobile" id="mobile" required class="form-control" />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">聯絡信箱</label>
        <input type="email" class="form-control" id="email" required />
      </div>
      <div class="mb-3">
        <label class="form-label">付款方式</label>
        <select name="payment" class="form-select" aria-label="select" required>
          <option selected disabled value="">請選擇付款方式</option>
          <option value="card">信用卡付款</option>
          <option value="atm">ATM轉帳</option>
          <option value="paypal">PayPal轉帳</option>
        </select>
      </div>
      <!-- block button:
      https://bootstrap5.hexschool.com/docs/5.0/components/buttons/#block-buttons -->
      <div class="d-grid col-12 d-lg-flex justify-content-md-center">
        <button
          type="submit"
          class="btn btn-warning fs-5 mt-times2 mt-lg-2 text-dark fw-bold"
        >
          贊助專案
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "Support",
};
</script>
<style lang="scss">
.support {
  label {
    color: #373a3c;
  }
  input,
  select {
    background-color: #f7f7f7;
    border: none;
  }
  select {
    color: #999999;
    option {
      color: #494846;
    }
  }
  .btn {
    border-radius: 26px;
  }

  .title {
    height: 36px;
    .progress {
      z-index: -1;
    }
    h4 {
      width: 120px; //104 + padding-x (16px) = 120px
      line-height: 36px;
      letter-spacing: 1.92px;
    }
  }
}

@media screen and (min-width: 992px) {
  .support {
    .btn {
      width: 176px;
      height: 52px;
    }
  }
}
</style>
