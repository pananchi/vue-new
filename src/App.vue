<script setup>
import { ref } from 'vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import ApiStyle from "./components/ApiStyle.vue";
import BindingComponent from "./components/BindingComponent.vue";
import BindingDemo from "./components/BindingDemo.vue";
import BMIComponent from "./components/BMIComponent.vue";
import ClockComponents from "./components/ClockComponents.vue";
import ComputedDemo from "./components/ComputedDemo.vue";
import CountComponent from "./components/CountComponent.vue";
import EventBinding from "./components/EventBinding.vue";
import FirstComponent from "./components/FirstComponent.vue";
import SecondComponent from "./components/SecondComponent.vue";
import ThirdComponent from "./components/ThirdComponent.vue";
import AboutView from "./views/AboutView.vue";
import ContactView from "./views/ContactView.vue";
import HomeView from "./views/HomeView.vue";
import HeaderComponents from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import JumbotronCompomemt from './components/jumbotronCompomemt.vue';
import DirectiveComponent from './components/DirectiveComponent.vue';
import ChildComponent from './components/ChildComponent.vue';
import FancyButton from './components/FancyButton.vue';


const message = ref("這個訊息來自 App.vue")
const count = ref(50);
const myEventHandler = data => {
  // data 使用接收子組件傳過來的資料
  console.log(data);
}
const likesEventHandler = data => {
  count.value = data;
}
</script>

<template>
  <HeaderComponents />
  <JumbotronCompomemt />
  <div class="container mt-3">
    <RouterView />
    <hr>
    <!-- <FancyButton>送出 <i class="bi bi-arrow-up"></i></FancyButton>
    <FancyButton> 登入 <i class="bi bi-android"></i></FancyButton>
    <FancyButton> 加入購物車 <i class="bi bi-bag-plus"></i></FancyButton> -->
    <!-- <DirectiveComponent /> -->
    <!-- :message="message" -->
    <!-- message、likes 是自訂屬性 -->
    <!-- 用來將資料傳遞給子組件 -->
    <!-- <ChildComponent :message :likes="count" @myEvent="myEventHandler" @likesEvent="likesEventHandler" /> -->
    <!-- myEvent 自訂的事件、myEventHandler 是myEvent事件觸發後會執行的 function -->
    <!-- myEvent 事件會在子組件透過 emit("myEvent") 來觸發 -->



    <!-- <RouterLink to="/">首頁</RouterLink> |
    <RouterLink to="/about">關於我們</RouterLink> |
    <RouterLink to="/zxy">聯絡我們</RouterLink> |
    <hr>
    <RouterLink :to="{ name: 'home' }" activeClass="active">首頁</RouterLink> |
    <RouterLink :to="{ name: 'about' }" activeClass="active">關於我們</RouterLink> |
    <RouterLink :to="{ name: 'contact' }" activeClass="active">聯絡我們</RouterLink> |
    <RouterLink :to="{ name: 'member', params: { id: '10' } }" activeClass="active">會員中心</RouterLink> |
    <RouterLink :to="{ name: 'todos' }" activeClass="active">待辦事項</RouterLink> |
    <hr> -->



    <!-- <HomeView />
    <AboutView />
    <ContactView /> -->

    <!-- <ClockComponents />
    <BMIComponent />
    <ComputedDemo />
    <EventBinding />
    <FirstComponent />
    <SecondComponent />
    <ThirdComponent />
    <ApiStyle />
    <CountComponent />
    <BindingComponent />
    <BindingDemo /> -->
  </div>
  <FooterComponent />
</template>

<style scoped>
.active {
  color: #FFF;
  background: blue;
  padding: 1px;
  text-decoration: none;
}
</style>
