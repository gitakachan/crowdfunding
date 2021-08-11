import Vue from "vue";
import VueRouter from "vue-router";

//通過Vue.use(插件) 安裝插件
Vue.use(VueRouter);

//創建vue router物件
const routes = [];

const router = new VueRouter({
  //配置路由和組件之間的應用關係
  routes,
});

//將路由物件傳入到vue實例中
export default router;
