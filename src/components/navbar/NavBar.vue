<template>
  <div class="border-bottom border-2 border-warning">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="../../assets/imgs/navbar/logo.jpg"
              style="width:111px;height:40px"
              alt=""
            />
          </a>
          <button
            class="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav flex-grow-1">
              <a
                class="nav-link"
                href="#"
                v-for="(item, index) in nav"
                :key="item"
                :class="{ active: index === currentIndex }"
                @click="navClick"
              >
                {{ item }}
              </a>
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#login"
                class="btn border-2 btn-warning rounded-pill ms-lg-auto"
                @click="showLogin = true"
              >
                登入
              </button>

              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#signup"
                class="btn border-2 btn-outline-secondary rounded-pill mt-2 mt-lg-0"
                @click="showSignup = true"
              >
                註冊
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <!-- login modal -->
    <div
      v-show="showLogin"
      class="modal fade "
      id="login"
      tabindex="-1"
      aria-labelledby="login"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div
          class="modal-content border-bottom-0 border-end-0 border-start-0 border-4 border-warning"
        >
          <div class="modal-header">
            <h5 class="modal-title fw-bold" id="login">登入</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="showLogin = false"
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
                />
              </div>
              <div class="mb-3">
                <label for="login-password" class="form-label">密碼</label>
                <input
                  type="password"
                  class="form-control"
                  id="login-password"
                />
              </div>
              <p class="text-secondary" style="font-size:14px">忘記密碼？</p>
              <button
                type="submit"
                style="font-size:20px"
                class="btn btn-warning flex-grow-1 rounded-pill w-100"
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
                      data-bs-toggle="modal"
                      data-bs-target="#signup"
                      @click="
                        showLogin = false;
                        showSignup = true;
                      "
                    >
                      註冊一個帳號</a
                    ></span
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- signup modal -->
    <div
      v-show="showSignup"
      class="modal fade "
      id="signup"
      tabindex="-1"
      aria-labelledby="signup"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div
          class="modal-content border-bottom-0 border-end-0 border-start-0 border-4 border-warning"
        >
          <div class="modal-header">
            <h5 class="modal-title fw-bold" id="signup">註冊</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="showSignup = false"
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
                />
              </div>
              <div class="mb-3">
                <label for="signuppassword" class="form-label">密碼</label>
                <input
                  type="password"
                  class="form-control"
                  id="signuppassword"
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
                  class="text-danger text-decoration-none"
                  data-bs-toggle="modal"
                  data-bs-target="#login"
                  @click="
                    showSignup = false;
                    showLogin = true;
                  "
                  >登入</a
                >
              </p>
              <button
                type="submit"
                style="font-size:20px"
                class="btn btn-warning flex-grow-1 rounded-pill w-100"
              >
                註冊
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  name: "",
  data() {
    return {
      showLogin: false,
      showSignup: false,

      nav: ["關於", "挖寶", "我有個大膽的想法"],
      currentIndex: 0,
    };
  },
  methods: {
    navClick(index) {
      this.currentIndex = index;
    },
  },
};
</script>
<style lang="scss">
.navbar-nav .btn {
  width: 96px;
  height: 38px;
  margin-right: 5px;
}

.modal-content {
  height: 444px;
  a {
    cursor: pointer;
  }

  .modal-body {
    input {
      background-color: #f7f7f7;
      border-radius: 4px;
      border: none;
    }
    .btn {
      height: 52px;
    }
  }
}
</style>
