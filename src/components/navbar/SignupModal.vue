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
          <h5 class="modal-title fw-bold">註冊</h5>
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
              <label for="signupemail" class="form-label">信箱</label>
              <input
                type="email"
                class="form-control"
                id="signupemail"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div class="mb-3">
              <label for="signuppassword" class="form-label">密碼</label>
              <input
                type="password"
                class="form-control"
                id="signuppassword"
                required
              />
            </div>
            <div class="mb-3">
              <label for="signup-re-password" class="form-label"
                >驗證密碼</label
              >
              <input
                type="password"
                class="form-control"
                id="signup-re-password"
              />
            </div>
            <p style="font-size:14px">
              <a
                type="button"
                class="text-danger text-decoration-none"
                @click="$emit('openLogin')"
                >登入</a
              >
            </p>
            <button
              type="button"
              style="font-size:20px"
              class="btn btn-warning flex-grow-1 rounded-pill w-100"
              @click="$emit('hideModal', 'signupModal')"
            >
              註冊
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ModalMixin from "@/mixins/modalMixin";
export default {
  name: "SignupModal",
  mixins: [ModalMixin],
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>
