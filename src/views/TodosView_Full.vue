<script setup>
import { computed, ref, watchEffect } from 'vue';
import TodoAdd from '../components/TodoAdd.vue'
import TodoFooter from '@/components/TodoFooter.vue';
import { useTodoStore } from '@/stores/todo';
const storeTodo = useTodoStore();


// const todos = ref(
//   [
//     { "id": "m21uwqfprb0ncx4", "title": "買菜", "completed": false },
//     { "id": "m21w6x73hw2tvrc", "title": "看電視", "completed": true },
//     { "id": "m21w6x73hw2abcd", "title": "睡覺", "completed": true },
//   ]
// )
// 把資料寫進localStorage
// localStorage.setItem('todos', JSON.stringify(todos.value));

// 從localStorage讀取待辦事項
const todos = ref(JSON.parse(localStorage.getItem('todos')));

//取得唯一值
const uniqueId = () => Date.now().toString(36) + Math.random().toString(36).substring(2, 9);

//待辦事項新增
const addEventHandler = todo => {
  todos.value.push({ "id": uniqueId(), "title": todo, "completed": false })
}

//刪除 todo
const removeTodo = todo => {
  //找到 todo 在 todos 中的索引值
  const idx = todos.value.indexOf(todo)

  //刪除 從idx這個位置刪除1筆資料
  todos.value.splice(idx, 1)
}

//移除所有完成的工作
const removeCompleted = () => {
  for (let i = todos.value.length - 1; i >= 0; i--) {
    if (todos.value[i].completed) {
      todos.value.splice(i, 1)
    }
  }
}

//計算還有幾個工作未完成
const remaining = computed(() => {
  const activeTodos = todos.value.filter(todo => !todo.completed)
  return activeTodos.length
})

//響應是資料改變了就把資料寫進localStorage
//computed => 只做計算不要有 side effect
//watch
// watch('todos', (newTodos, oldTodos){
// }, { deep: true,immediate:true })

//watchEffect
watchEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos.value));
  const activeTodos = todos.value.filter(todo => !todo.completed)
  storeTodo.unfinishedQtyChange(activeTodos.length)
})


</script>

<template>
  <div class="row">
    <div class="col-3"> </div>
    <div class="col-6">
      <h3>Todos Page</h3>
      <TodoAdd @addEvent="addEventHandler" />
      <ul class="list-group mt-3">
        <li v-for="todo in todos" :key="todo.id" class="list-group-item">
          <div class="d-flex justify-content-between">
            <div>
              <input v-model="todo.completed" class="form-check-input me-3" type="checkbox">
              <label class="form-check-label" :class="{ completed: todo.completed }">{{ todo.title }}</label>
            </div>
            <button @click="removeTodo(todo)" class="badge bg-danger rounded-pill border-0">X</button>
          </div>

        </li>

      </ul>
      <TodoFooter @removeEvent="removeCompleted" />
    </div>
    <div class="col-3"></div>

  </div>
</template>

<style lang="css" scoped>
.completed {
  color: #949494 !important;
  text-decoration: line-through;
}
</style>