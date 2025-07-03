<script setup>
import { ref } from 'vue';

  
  const userName= ref('Jack');
  const isAbmin = ref(false);
</script>

<template>
  <div>
    <!-- // && || ? : -->
    <!-- 如果userName有姓名就顯示姓名，沒有姓名就顯示Guest -->
    <p> {{ isAbmin ? userName:"Guest" }}</p>
    <!-- 如果isAdmin為true就顯示管理者登入，如果為false就不顯示任何內容 -->
    <p></p>
  </div>
</template>

<style lang="css" scoped>

</style>