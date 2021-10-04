<template>
  <div class="border-bottom border-5 border-warning">
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
            ref="collapseBtn"
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
                @click="
                  navClick();
                  collapse();
                "
              >
                {{ item }}
              </a>
              <button
                type="button"
                class="btn border-2 btn-warning rounded-pill ms-lg-auto"
                @click="
                  showModal('loginModal');
                  collapse();
                "
                :backdrop="true"
              >
                登入
              </button>

              <button
                type="button"
                class="btn border-2 btn-outline-secondary rounded-pill mt-2 mt-lg-0"
                @click="
                  showModal('signupModal');
                  collapse();
                "
              >
                註冊
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <!-- login modal -->
    <login-modal
      ref="loginModal"
      @openSignup="openSignup"
      @hideModal="hideModal"
    ></login-modal>
    <!-- signup modal -->
    <signup-modal
      ref="signupModal"
      @openLogin="openLogin"
      @hideModal="hideModal"
    ></signup-modal>
  </div>
</template>
<script>
import LoginModal from "./LoginModal.vue";
import SignupModal from "./SignupModal.vue";
export default {
  name: "NavBar",
  components: { LoginModal, SignupModal },
  data() {
    return {
      nav: ["關於", "挖寶", "我有個大膽的想法"],
      currentIndex: 0,
    };
  },
  methods: {
    navClick(index) {
      this.currentIndex = index;
    },
    showModal(ref) {
      this.$refs[ref].showModal();
    },
    hideModal(ref) {
      this.$refs[ref].hideModal();
    },
    openLogin() {
      this.hideModal("signupModal");
      this.showModal("loginModal");
    },
    openSignup() {
      this.hideModal("loginModal");
      this.showModal("signupModal");
    },
    collapse() {
      if (window.innerWidth < 992) {
        //折疊斷點設為lg 992px
        this.$refs.collapseBtn.click();
      }
    },
  },
};
</script>
<style lang="scss" scoped>
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
