<script setup>
import { ref } from 'vue';

const members = ref([]);

const apiUrl = `${import.meta.env.VITE_API_BASEURL}/Members`;
const staticUrl = `${import.meta.env.VITE_STATICURL}/images`;

const loadMember = async () => {
  const response = await fetch(apiUrl);
  const datas = await response.json();
  members.value = datas;
}

loadMember();

</script>

<template>
  <div>
    <h3>會員管理</h3>
    <table class="table table-bordered table-hover table-striped">
      <thead>
        <tr>
          <th>頭像</th>
          <th>姓名</th>
          <th>電子郵件</th>
          <th>年紀</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="member in members" :key="member.memberId">
          <td><img :src="`${staticUrl}/${member.fileName}`" style="width: 150px;" /></td>
          <td>{{ member.name }}</td>
          <td>{{ member.email }}</td>
          <td>{{ member.age }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="css" scoped></style>