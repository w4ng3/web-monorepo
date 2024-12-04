<script lang="ts" setup>
import { getZhihuHot, type ZhihuHot } from '@/servers'
import { onMounted, ref } from 'vue'

const list = ref<ZhihuHot[]>([])

onMounted(() => {
  getZhihuHot().then((res) => {
    list.value = res
  })
})

const toggleHot = (url: string) => {
  window.open(url)
}
</script>

<template>
  <div class="flex flex-col gap-2 p-5">
    <section
      v-for="(item, index) in list"
      :key="item.id"
      class="hot cursor-pointer bg-blue-4 sm:bg-#a992d5"
      @click="toggleHot(item.url)"
    >
      <span class="size-6 flex-shrink-0 content-center border b-rd-full border-solid text-center line-height-tight">
        {{ index + 1 }}</span>
      <div>
        <h1 class="line-clamp-2 text-start text-lg">
          {{ item.title }}
        </h1>
        <p class="line-clamp-1">
          {{ item.excerpt }}
        </p>
      </div>
      <img :src="item.cover" aspect-ratio="4/3" ml-auto w-45 rounded-md>
    </section>
  </div>
</template>

<style scoped>
.hot {
  padding: 12px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
