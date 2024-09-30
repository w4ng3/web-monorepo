<script setup lang="ts">
import { useMock } from '@/composables/useMock'
import { onMounted, ref } from 'vue'

const mock = useMock()

const list = ref()
onMounted(() => {
  list.value = mock.getSongs()
  // console.log('list :>> ', list.value)
})
</script>

<template>
  <h2>礼堂金曲</h2>
  <div v-for="item in list" :key="item.id" class="mx-auto mb-2 w-160 flex items-center gap-4">
    <div size-10 content-center rounded-full bg-red-3>
      {{ item.id }}
    </div>
    <img :src="item.img" alt="">
    <div>{{ item.singer }} </div>
    <div class="flex-1 text-xl font-bold">
      《{{ item.songName }}》
    </div>
    <div text-right>
      {{ item.date }}
    </div>
  </div>
</template>

<style scoped>

</style>
