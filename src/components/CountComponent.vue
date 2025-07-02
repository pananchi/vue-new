<script setup>
import { ref } from 'vue';

  const data = "abc";
  console.log(data);
  const count = ref(0);
  const add = () => {
    // 透過 ref() 所定義的變數
    // 取值時要透過value屬性
    count.value++;
  };
</script>

<template>
  <div>
    <button @click="add">{{ count }}</button>
  </div>
</template>

<style lang="css" scoped>

</style>