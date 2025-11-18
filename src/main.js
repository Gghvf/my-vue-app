import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import HomeView from './components/HomeView.vue'
import ProductsView from './components/ProductsView.vue'
import ContactsView from './components/ContactsView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/products', component: ProductsView },
  { path: '/contacts', component: ContactsView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')