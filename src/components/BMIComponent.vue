<script setup>
import { computed, ref } from 'vue';

const height = ref(170);
const weight = ref(70);
const bmi = computed(() => (weight.value / (( height.value / 100 ) ** 2)).toFixed(2));
</script>

<template>
  <div>
    <!-- 我做的 -->
     <!-- <label>身高(公分)：<input type="text" v-model.lazy="height" /></label>
      <br>
      <label>體重(公斤)：<input type="text" v-model.lazy="weight" /></label>
      <p>BMI：{{ bmi }}</p> -->

      <!-- 老師做的 -->
       <div><label>體重(kg)：<input type="number" name="weight" v-model.lazy.number="weight"></label></div>
       <div><label>身高(cm)：<input type="number" name="height" v-model.lazy.number="height"></label></div>
       <!-- <p>BMI：{{ (weight / (( height / 100 ) ** 2)) .toFixed(2) }}</p> -->
       <p>BMI：{{ bmi }}</p>
  </div>
</template>

<style lang="css" scoped>

</style>