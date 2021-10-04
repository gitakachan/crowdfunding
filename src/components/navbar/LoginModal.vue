<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    ref="modal"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div
        class="modal-content border-bottom-0 border-end-0 border-start-0 border-4 border-warning"
      >
        <div class="modal-header">
          <h5 class="modal-title fw-bold">登入</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="login-email" class="form-label">帳號</label>
              <input
                type="email"
                class="form-control"
                id="login-email"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div class="mb-3">
              <label for="login-password" class="form-label">密碼</label>
              <input
                type="password"
                class="form-control"
                id="login-password"
                required
              />
            </div>
            <p class="text-secondary" style="font-size:14px">忘記密碼？</p>
            <button
              type="button"
              style="font-size:20px"
              class="btn btn-warning flex-grow-1 rounded-pill w-100"
              @click="$emit('hideModal', 'loginModal')"
            >
              登入
            </button>
          </form>
          <div class="position-relative pt-5">
            <div class="position-relative m-4">
              <div class="progress" style="height: 1px;">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style="width: 0%;"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <p
                class="text-secondary  bg-white position-absolute start-50 translate-middle px-2"
                style="font-size:14px"
              >
                還沒有帳號？
                <span>
                  <a
                    class="text-danger text-decoration-none"
                    @click="$emit('openSignup')"
                  >
                    註冊一個帳號</a
                  >
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ModalMixin from "@/mixins/modalMixin";
export default {
  name: "LoginModal",
  mixins: [ModalMixin],
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
