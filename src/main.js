import Vue from "vue";
import router from "./router";
import App from "./App.vue";
//import "bootstrap";
import BootstrapJS from "bootstrap/dist/js/bootstrap.bundle.min.js";

import "/node_modules/bootstrap-icons/font/bootstrap-icons.css";

//vue tooltip
import VTooltip from "v-tooltip";
Vue.use(VTooltip);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
