<script setup lang="ts">
import { Person } from '@w4ng3/tools'
import dayjs from 'dayjs'
import { onMounted } from 'vue'
import { showMsg } from './components/MessageBox'
import { useDark } from './composables/useDark'

const person = new Person('W4ng3', 'React')

const { enableDarkMode, disableDarkMode, applySavedTheme } = useDark()

onMounted(() => {
  applySavedTheme()
})


function openAleart() {
  showMsg({
    title: '标题',
    content: '1234567',
    closeable: true,
    showCancle: true,
    onCancel: () => {
      console.log('Cancle :>>')
    },
    onConfirm: () => {
      console.log('Confirm :>>')
    },
  })
}
</script>

<template>
  <div>
    <div>当前时间{{ dayjs().format('YYYY年MM月DD日 HH:mm:ss') }}</div>
    <div>{{ person.name }} : {{ person.slogan }}</div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo">
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo">
    </a>
    <div class="flex justify-center gap-5">
      <button btn @click="disableDarkMode">
        <div i-carbon-light-filled />
      </button>
      <button class="bg-black text-white btn" @click="enableDarkMode">
        <div i-carbon-asleep />
      </button>
      <button class="bg-red text-white btn" @click="openAleart">
        aleart
      </button>
    </div>
    <!-- 路由匹配到的组件将渲染在这里 -->
    <main class="m-2 h-70vh overflow-y-scroll rounded-xl bg-truegray-200 p-2 dark:bg-purple-300">
      <p>
        <strong>Current route path:</strong> {{ $route.fullPath }}
      </p>
      <header flex justify-center gap-4 text-xl>
        <RouterLink to="/">
          知乎热榜
        </RouterLink>
        <RouterLink to="/theme">
          主题切换
        </RouterLink>
        <RouterLink to="/mock">
          以赝顶真
        </RouterLink>
        <RouterLink to="/i18n">
          睁眼看世界
        </RouterLink>
      </header>
      <router-view />
    </main>
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

a:focus {
  color: purple;
}
</style>
