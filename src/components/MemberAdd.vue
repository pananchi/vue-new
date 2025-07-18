<script setup>
import { ref } from 'vue';

const emit = defineEmits(['addMember'])
const addFrom = ref(null); //DOM

const submitHamdler = () => {
  //方法一
  // const theForm = document.querySelector('#form1');
  // const formData = new FormData(theForm);
  // emit('addMember', formData);
  // theForm.reset();

  //方法二
  const formData = new FormData(addFrom.value);
  emit('addMember', formData);
  addFrom.value.reset();

  // alert('submit')
}
</script>

<template>
  <div>
    <form id="form1" ref="addFrom" @submit.prevent="submitHamdler">
      <div class="mb-3">
        <label for="InputName" class="form-label">姓名</label>
        <input type="text" class="form-control" id="InputName" name="name">
      </div>
      <div class="mb-3">
        <label for="InputEmail" class="form-label">電子郵件</label>
        <input type="email" class="form-control" id="InputEmail" name="email">
      </div>
      <div class="mb-3">
        <label for="InputAge" class="form-label">年齡</label>
        <input type="number" class="form-control" id="InputAge" name="age">
      </div>
      <div class="mb-3">
        <label for="InputPassword" class="form-label">密碼</label>
        <input type="password" class="form-control" id="InputPassword" name="password">
      </div>
      <div class="mb-3">
        <label for="InputPasswordConfirm" class="form-label">密碼確認</label>
        <input type="password" class="form-control" id="InputPasswordConfirm">
      </div>
      <div class="mb-3">
        <label for="formFile" class="form-label">頭像</label>
        <input class="form-control" type="file" id="formFile" name="file">
      </div>
      <button type="submit" class="btn btn-primary mx-3">新增</button>
      <button type="reset" class="btn btn-warning">清除</button>
    </form>
  </div>
</template>

<style lang="css" scoped></style>