<script setup>
import { ref } from 'vue';
import mycat from '@/assets/images/cat02.jpg'; // 建議匯入方式
  
const userName= ref('Jack');
const isAbmin = ref(false);
const dog = ref("/images/dog01.jpg")
const cat = ref("/src/assets/images/cat02.jpg")

</script>

<template>
  <div>
    <!-- // && || ? : -->
    <!-- 如果userName有姓名就顯示姓名，沒有姓名就顯示Guest -->
    <p> {{ userName || '訪客' }}</p>
    <!-- 如果isAdmin為true就顯示管理者登入，如果為false就不顯示任何內容 -->
    <p> {{ isAbmin ? '管理員登入':'' }}</p>
    <img :src= "dog" />
    <!-- assets 裡的靜態檔案 -->
    <img src="@/assets/images/cat02.jpg" title="不建議這樣使用"/>
    <img :src="cat" title="不建議這樣使用" /> 
    <img :src="mycat" title="建議這樣使用" />
  </div>
</template>

<style lang="css" scoped>
img{
  width: 100px;
}

</style>