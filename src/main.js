import { createApp } from 'vue'
// vue-router
import router from './router.js'
// pinia
import { createPinia } from 'pinia'

import App from './App.vue'

const app = createApp(App)
app.use(router) // 使用 vue-router

const pinia = createPinia();
app.use(pinia); // 讓Vue應用程式使用 pinia

app.mount('#app');
