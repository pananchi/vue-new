<!-- <script>
import { ref } from 'vue';

  export default {
    // Options API
    //  data() {
    //     return {
    //       message:"Hello, Vue!!"
    //     };
    //   },

    // Composition API
    setup() {
      const message = ref("Hello, Vue!!") ;
      return { message };
    }
  };
</script> -->

<script setup>
import { ref } from 'vue';


const message = ref("Hello, Vue!!"); 
</script>

<template>
  <div>
    <h2>{{ message }}</h2>
    <input type="text" v-model="message" />
  </div>
</template>

<style lang="css" scoped>

</style>