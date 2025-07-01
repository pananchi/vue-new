<template>
  <h2 id="myH">第一個 Component</h2>
</template>

<style lang="css" scoped>
  h2{
    color: orange;
  }
</style>

<script setup>
import { onBeforeMount, onMounted } from 'vue';

// tad
// Component Lifecycle Hooks
onBeforeMount(() => {
  console.log('組件即將掛載');
});

onMounted(() => {
  console.log('組件已掛載，DOMTree 可用');

  const myH = document.querySelector('#myH');
  console.log("myH", myH);
});

</script>