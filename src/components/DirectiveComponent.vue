<script setup>
import { ref } from 'vue'

const message = ref('<u>Hello, Vue!!</u>')
const isLoading = ref(true);
const isLoggedIn = ref(true);
setInterval(() => {
  isLoading.value = false;
}, 3000);
const regions = ref([
  { 'code': '100', 'name': '中正區' },
  { 'code': '103', 'name': '大同區' },
  { 'code': '104', 'name': '中山區' },
  { 'code': '106', 'name': '大安區' }
]);

const selectRegion = ref("");
const user = ref({ "name": "Jack", "age": 30, "emeail": "jack@gmail.com" })
const bgColor = ref("yellow");
const isS1 = ref(false);
const isS2 = ref(false);
const isUnder = ref(false);
const isItalic = ref(false);
const fontSize = ref(16);
const keyword = ref("");
const enterHandler = event => {
  console.log(keyword.value);
};
const clearHandler = () => {
  keyword.value = "";
  console.log("清除輸入框");
};

</script>

<template>
  <div>
    <h3>{{ message }}</h3>
    <h3 v-text="message"></h3>
    <h3 v-html="message"></h3>
    <img src="/images/loading.gif" alt="loading" v-show="isLoading" />
    <div v-if="isLoggedIn">
      <button>登出</button>
    </div>
    <div v-else>
      <button>登入</button>
    </div>
    <!-- v-for 讀取陣列-->
    <select v-model="selectRegion">
      <option value="">請選擇</option>
      <!-- region 表示 { 'code': '100', 'name': '中正區' } -->
      <option v-for="(region, idx) in regions" :key="region.code" :value="region">{{ idx }}-{{ region.name }}
      </option>
    </select>
    <span>{{ selectRegion }} {{ selectRegion.name }}{{ selectRegion.code }}</span>
    <ul>
      <li v-for="(value, key) in user">{{ key }} {{ value }}</li>
    </ul>
    <!-- v-for 產生數字-->
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" v-for="i in 5"><a class="page-link" href="#">{{ i }}</a></li>
      </ul>
    </nav>
    <!-- style -->
    <input type="color" v-model="bgColor" />
    <div style="width: 200px;height: 200px;border: 1px solid green" :style="{ backgroundColor: bgColor }"></div>
    <!-- class -->
    <input type="checkbox" v-model="isS2"> 背景色
    <input type="checkbox" v-model="isS1"> 字的顏色
    <input type="checkbox" v-model="isUnder"> 下底線
    <input type="checkbox" v-model="isItalic"> 斜體字
    <button @click="fontSize += 2">A+</button>
    <button @click="fontSize -= 2">A-</button>
    <h3 :class="{ s1: isS1, s2: isS2, underline: isUnder, itakic: isItalic }" :style="{ fontSize: `${fontSize}px` }">
      Class 樣式處理</h3>

    <input type="text" v-model="keyword" @keyup.enter="enterHandler" @keyup.delete="clearHandler" />

  </div>
</template>

<style lang="css" scoped>
.s1 {
  color: green;
}

.s2 {
  background: lightblue;
}

.underline {
  text-decoration: underline;
}

.itakic {
  font-style: italic;
}
</style>