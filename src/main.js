import Vue from "vue";
import router from "./router";
import App from "./App.vue";
import "bootstrap/dist/js/bootstrap.bundle";
import "/node_modules/bootstrap-icons/font/bootstrap-icons.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
