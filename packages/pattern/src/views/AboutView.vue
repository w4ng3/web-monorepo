<script setup lang="ts">
import observable from '../pattern/observer'

function handleClick() {
  observable.notify('User clicked button!')
}

function handleToggle() {
  observable.notify('User toggled switch!')
}

function logger(data: string) {
  console.log(`${Date.now()} ${data}`)
}

function toastify(data: string) {
  console.log('toastify:', data)
}

observable.subscribe(logger)
observable.subscribe(toastify)
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="handleClick">
      Click me!
    </button>
    <input type="checkbox" @change="handleToggle">
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
