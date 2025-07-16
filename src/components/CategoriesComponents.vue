<script setup>
import { onMounted, ref, watchEffect } from 'vue';


const categories = ref([]);

//從 .env 環境變數的值
const baseUel = import.meta.env.VITE_API_BASEURL;
const apiUrl = `${baseUel}/Categories`;

console.log(apiUrl);

// fetch(apiUrl)
//   .then(response => response.json())
//   .then(datas => categories.value = datas);

//Component 載入時不會執行
// watch(categories,()={})

//監看Component中的響應式資料的異動
//Component載入時就會被執行
// watchEffect(async () => {
//   const response = await fetch(apiUrl);
//   const datas = await response.json();
//   categories.value = datas;
// })

// //Component 掛載到 DOM 時
// onMounted(async () => {
//   // 用DOM語法控制Component
//   const response = await fetch(apiUrl);
//   const datas = await response.json();
//   categories.value = datas;
// })

//IIFE
(async () => {
  const response = await fetch(apiUrl);
  const datas = await response.json();
  categories.value = datas;
})();

</script>

<template>
  <div>
    <h3>Categories</h3>
    <ul>
      <li v-for="category in categories" :key="category.categoryId">{{ category.categoryName }}</li>
    </ul>
  </div>
</template>

<style lang="css" scoped></style>