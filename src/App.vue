<script setup>
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


</script>

<template>
  <h2>Hello,Vue!!</h2>
  <RouterLink to="/">首頁</RouterLink> |
  <RouterLink to="/about">關於我們</RouterLink> |
  <RouterLink to="/zxy">聯絡我們</RouterLink> |
  <hr>
  <RouterLink :to="{ name:'home' }">首頁</RouterLink> |
  <RouterLink :to="{ name:'about' }">關於我們</RouterLink> |
  <RouterLink :to="{ name:'contact' }">聯絡我們</RouterLink> |
  <RouterLink :to="{ name:'member',params:{ id: '10'} }">會員中心</RouterLink> |
  <hr>
  <RouterView />

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

</template>

<style scoped>
</style>
