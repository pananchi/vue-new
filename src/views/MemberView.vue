<script setup>
import MemberAdd from '@/components/MemberAdd.vue';
import MemberEdit from '@/components/MemberEdit.vue';
import { ref } from 'vue';


const members = ref([]);
const editMember = ref({});

const apiUrl = `${import.meta.env.VITE_API_BASEURL}/Members`;
const staticUrl = `${import.meta.env.VITE_STATICURL}/images`;

//讀取所有會員資料
const loadMembers = async () => {
  const response = await fetch(apiUrl); //GET
  const datas = await response.json();
  members.value = datas;
}

//刪除會員資料
const deleteHandler = async (id) => {
  if (!window.confirm('真的要刪除嗎?')) return;

  const deleteApi = `${apiUrl}/${id}`;
  const response = await fetch(deleteApi, {
    method: 'DELETE'
  })

  if (response.ok) {
    alert('會員刪除成功!!');
    loadMembers();
  }
}

//新增會員資料
const addMemberHandler = async (fd) => {
  const response = await fetch(apiUrl, {
    method: 'POST',
    body: fd
  })
  if (response.ok) {
    alert('會員新增成功');
    loadMembers();
  }
}

//編輯會員資料
const editHandler = member => {
  editMember.value = member;
}

//修改會員資料
//PUT https://localhost:7282/api/Members/{Id}
const updateMemberHandler = async (member) => {
  const updateApi = `${apiUrl}/${member.memberId}`;
  const response = await fetch(updateApi, {
    method: 'PUT',
    body: JSON.stringify(member),
    headers: { 'Content-Type': 'application/json' }
  })
  if (response.ok) {
    alert('會員修改成功');
    loadMembers();
  }
}

loadMembers();

</script>

<template>
  <div>
    <h3>會員管理</h3>
    <div class="row">
      <div class="col-9">
        <table class="table table-bordered table-hover table-striped">
          <thead>
            <tr>
              <th>頭像</th>
              <th>姓名</th>
              <th>電子郵件</th>
              <th>年紀</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="member in members" :key="member.memberId">
              <td><img :src="`${staticUrl}/${member.fileName}`" style="width: 150px;" /></td>
              <td>{{ member.name }}</td>
              <td>{{ member.email }}</td>
              <td>{{ member.age }}</td>
              <td>
                <button @click="editHandler(member)" data-bs-toggle="modal" data-bs-target="#editModel"
                  class="btn btn-secondary mx-3"><i class="bi bi-usb-plug"></i></button>

                <button @click="deleteHandler(member.memberId)" class="btn btn-danger"><i
                    class="bi bi-trash"></i></button>

              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-3">
        <MemberAdd @addMember="addMemberHandler" />
      </div>
    </div>
  </div>

  <MemberEdit :member="editMember" @updateMember="updateMemberHandler" />
</template>

<style lang="css" scoped></style>