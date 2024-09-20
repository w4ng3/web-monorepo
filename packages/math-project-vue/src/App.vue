<script setup lang="ts">
import { Person } from '@w4ng3/tools'
import dayjs from 'dayjs'
import { onMounted } from 'vue'
// import TypeDemo from './components/TypeDemo.vue'
import ZhihuHot from './components/ZhihuHot.vue'
import { useDark } from './composables/useDark'

const p = new Person('Junmping', 'math')

const { enableDarkMode, disableDarkMode, applySavedTheme } = useDark()

onMounted(() => {
  applySavedTheme()
})
</script>

<template>
  <div>
    <div>当前时间{{ dayjs().format('YYYY年MM月DD日 HH:mm:ss') }}</div>
    <div>{{ p.name }} : {{ p.slogan }}</div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo">
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo">
    </a>
    <div class="flex justify-center gap-5">
      <button @click="disableDarkMode">
        Light
      </button> <button @click="enableDarkMode">
        Dark
      </button>
    </div>
    <!-- <TypeDemo /> -->
    <ZhihuHot />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
