<script setup>
import { computed, ref } from 'vue';

const height = ref(0);
const weight = ref(0);
const calculate = computed(() => weight.value / (( height.value / 100 ) ** 2));
const bmiDisplay = computed(() => calculate.value.toFixed(2));
</script>

<template>
  <div>
    <!-- 我做的 -->
     <label>身高(公分)：<input type="text" v-model.lazy="height" /></label>
      <br>
      <label>體重(公斤)：<input type="text" v-model.lazy="weight" /></label>
      <p>BMI：{{ bmiDisplay }}</p>

      <!-- 老師做的 -->
       <div><label>體重(kg)：<input type="number" name="weight" v-model.lazy="weight"></label></div>
       <div><label>身高(cm)：<input type="number" name="height" v-model.lazy="height"></label></div>
       <p>BMI：{{  }}</p>
  </div>
</template>

<style lang="css" scoped>

</style>