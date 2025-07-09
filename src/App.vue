<script setup>
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



</script>

<template>
  <HeaderComponents />
  <JumbotronCompomemt />
  <div class="container mt-3">


    <RouterView />




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
