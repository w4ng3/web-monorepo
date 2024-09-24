import ColorTheme from '@/pages/ColorTheme.vue'
import HomeView from '@/pages/HomeView.vue'
import MockView from '@/pages/MockView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { name: 'home', path: '/', component: HomeView },
  { name: 'mock', path: '/mock', component: MockView },
  { name: 'theme', path: '/theme', component: ColorTheme },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
