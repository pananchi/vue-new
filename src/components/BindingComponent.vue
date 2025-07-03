<script setup>
import { ref } from 'vue';

console.log(new Date().getDate());



  
  const title = ref("Vue.js");
  const ispan = ref("https://www.ispan.com.tw/_next/image/?url=%2Fimages%2FiSpan_Logo_slogan.png&w=1080&q=75");
  const isDisabled = ref(true);
  const user = ref({
    firstName: "John",
    lasrName: "Wu"
  });

  const getName = () => {
    return `${user.value.lasrName} ${user.value.firstName}`;
  };

  const week = ref(["日", "一", "二", "三", "四", "五", "六"]);
  const author = ref({
    books: [
      'Vue 2 - Advanced Guide',
      'Vue 3 - Basic Guide',
      'Vue 4 - The Mystery'
    ]
  })
// console.log(author.value.books.length);
  

</script>

<template>
  <div>
    <h2>{{ title }} 執行中</h2>
    <p>{{`使用者姓名：${user.lasrName} ${user.firstName}`}}</p>
    <p>{{ getName() }}</p>
    <p>{{ false ? "abc" :"xyz" }}</p>
    <p>星期{{ week[new Date().getDate()] }}</p>
    <p>出版：{{ author.books.length > 0 ? "有" : "沒有" }}</p>
    <hr>
    <!-- 屬性繫節 -->
    <img :src="ispan" v-bind:title="title">
    <a href="" v-bind:title="title">ispan</a>
    <hr>
    <label for=""><input type="checkbox" v-model="isDisabled">同意條款</label>
    <button disabled="isDisabled">click</button>
  </div>

</template>

<style lang="css" scoped>

</style>