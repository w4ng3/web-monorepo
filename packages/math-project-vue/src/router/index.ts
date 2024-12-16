import ColorTheme from '@/pages/ColorTheme.vue'
import HomeView from '@/pages/HomeView.vue'
import I18nView from '@/pages/I18nView.vue'
import MockView from '@/pages/MockView.vue'
import RenderWidget from '@/pages/RenderWidget.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { name: 'home', path: '/', component: HomeView },
  { name: 'mock', path: '/mock', component: MockView },
  { path: '/theme', component: ColorTheme },
  { path: '/i18n', component: I18nView },
  { path: '/render', component: RenderWidget },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
