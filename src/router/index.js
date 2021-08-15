import Vue from "vue";
import VueRouter from "vue-router";

const Intro = () => import("../views/productDetails/intro/Intro.vue");
const Qa = () => import("../views/productDetails/qa/Qa.vue");
const Process = () => import("../views/productDetails/process/Process.vue");
const Message = () => import("../views/productDetails/message/Message.vue");

//通過Vue.use(插件) 安裝插件
Vue.use(VueRouter);

//創建vue router物件
const routes = [
  {
    path: "/",
    redirect: "/product/intro",
  },
  {
    path: "/crowdfunding",
    redirect: "/product/intro",
  },

  {
    path: "/product/intro",
    name: "intro",
    component: Intro,
  },
  {
    path: "/product/qa",
    name: "qa",
    component: Qa,
  },
  {
    path: "/product/process",
    name: "process",
    component: Process,
  },
  {
    path: "/product/message",
    name: "message",
    component: Message,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

//將路由物件傳入到vue實例中
export default router;
