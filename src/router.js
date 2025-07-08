import { createRouter, createWebHistory } from "vue-router";
// 引入vue-router的createRouter和createWebHistory
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import ContactView from "./views/ContactView.vue";

//URL <> component
// 路由的對應表
const routes = [
  // http://localhost:5173/
  { path: "/", component: HomeView }, //首頁
  // http://localhost:5173/about
  { path: "/about", component: AboutView }, //關於
  // http://localhost:5173/contact
  { path: "/contact", component: ContactView } //聯絡

]

const router = createRouter({
  history: createWebHistory(),  // 使用HTML5的history模式
  routes // 路由對應表    
});

export default router; // 將router導出
// 讓其他檔案可以使用這個router