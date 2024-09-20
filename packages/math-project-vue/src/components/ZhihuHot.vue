<script lang="ts" setup>
import type { ZhiHuHot, ZhiHuHotList } from '@/types/zh'
import { onMounted, ref } from 'vue'

const list = ref<ZhiHuHot[]>([])

const getData = async () => {
  // const url = "https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total?limit=1&desktop=true";
  const url = '/api/v3/feed/topstory/hot-lists/total'
  try {
    const response = await fetch(url, { mode: 'no-cors' })
    const res: ZhiHuHotList = await response.json()
    list.value = res.data
  }
  catch (error) {
    console.log('Request Failed', error)
  }
}

onMounted(() => {
  getData()
})

const toggleHot = (id: number) => {
  window.open(`https://www.zhihu.com/question/${id}`)
}
</script>

<template>
  <div class="w-full flex flex-col gap-3 p-5 dark:bg-pink">
    <section
      v-for="(item, index) in list"
      :key="item.id"
      class="hot cursor-pointer bg-#a992d5 md:bg-amber-4 sm:bg-blue-3"
      @click="toggleHot(item.target.id)"
    >
      <span>{{ index + 1 }}</span>
      <div>
        <h1 class="line-clamp-2 text-start text-lg">
          {{ item.target.title }}
        </h1>
        <p class="line-clamp-1">
          {{ item.target.excerpt }}
        </p>
        <div text-start>
          {{ item.detail_text }}
        </div>
      </div>
      <img :src="item.children[0].thumbnail" aspect-ratio="4/3" ml-auto w-45 rounded-md>
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
