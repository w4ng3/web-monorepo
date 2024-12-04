<script lang="ts" setup>
import ZhihuHot from '@/components/ZhihuHot.vue'
</script>

<template>
  <div class="about">
    <ZhihuHot />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
