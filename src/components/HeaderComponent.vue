<script setup>
import { useTodoStore } from '@/stores/todo';
const storeTodo = useTodoStore()
</script>

<template>
  <div class="container">
    <header
      class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div class="col-md-3 mb-2 mb-md-0"> <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
          <svg class="bi" width="40" height="32" role="img" aria-label="Bootstrap">
            <use xlink:href="#bootstrap"></use>
          </svg> </a> </div>
      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <RouterLink :to="{ name: 'home' }" activeClass="active" class="nav-link px-2 link-secondary">首頁</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'about' }" activeClass="active" class="nav-link px-2">關於我們</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'contact' }" activeClass="active" class="nav-link px-2">聯絡我們</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'member', params: { id: '10' } }" activeClass="active" class="nav-link px-2">會員中心
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'todos' }" activeClass="active" class="nav-link px-2">待辦事項 <span
              class="badge text-bg-secondary">{{ storeTodo.unfinishedQty }}</span></RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'tabs' }" activeClass="active" class="nav-link px-2">TabsView</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'members' }" activeClass="active" class="nav-link px-2">會員管理</RouterLink>
        </li>
      </ul>
      <div class="col-md-3 text-end"> <button type="button" class="btn btn-outline-primary me-2">Login</button> <button
          type="button" class="btn btn-primary">Sign-up</button> </div>
    </header>
  </div>
</template>

<style lang="css" scoped></style>