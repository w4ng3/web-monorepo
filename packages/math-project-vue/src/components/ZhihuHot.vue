<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import type { ZhiHuHot, ZhiHuHotList } from '@/types/zh';

const list = ref<ZhiHuHot[]>([]);

const getData = async () => {
  // const url = "https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total?limit=1&desktop=true";
  const url = '/api/v3/feed/topstory/hot-lists/total'
  try {
    let response = await fetch(url, { mode: "no-cors" });
    const res: ZhiHuHotList = await response.json();
    list.value = res.data;
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
  <div class="list">
    <section v-for="(item, index) in list" :key="item.id" class="hot" @click="toggleHot(item.target.id)">
      <span>{{ index + 1 }}</span>
      <div>
        <h1 class="ellipsis_2">
          {{ item.target.title }}
        </h1>
        <p class="ellipsis_1">
          {{ item.target.excerpt }}
        </p>
        <div style="text-align: start;">
          {{ item.detail_text }}
        </div>
      </div>
      <img :src="item.children[0].thumbnail" alt="">
    </section>
  </div>
</template>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 80vw;

  .hot {
    background-color: #a992d5;
    padding: 12px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 8px;

    img {
      width: 180px;
      aspect-ratio: 4/3;
      border-radius: 8px;
      margin-left: auto;
    }

    h1 {
      font-size: 20px;
      text-align: start;
    }
  }
}

.ellipsis_1 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.ellipsis_2 {
  overflow: hidden;
  text-overflow: ellipsis;
  line-clamp: 2;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>