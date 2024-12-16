<script setup lang="ts">
import { p } from '@/servers/models/deco'
import TheWelcome from '../components/TheWelcome.vue'
// @ts-ignore
p.sayHello()
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
