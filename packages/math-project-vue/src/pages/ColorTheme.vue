<script lang="ts" setup>
const onThemeChange = (e: string) => {
  document.body.className = e
}
</script>

<template>
  <header flex items-center justify-center gap-2>
    <h2> 主题切换 </h2>
    <button btn @click="onThemeChange('default')">
      default
    </button>
    <button btn @click="onThemeChange('peaple')">
      peaple
    </button>
    <button btn @click="onThemeChange('spring')">
      spring
    </button>
  </header>

  <div mb-3 flex justify-center gap-2>
    <button bg-primary text-white>
      primary
    </button>
    <button bg-warning text-white>
      warning
    </button>
    <button bg-danger text-white>
      danger
    </button>
    <button bg-info text-white>
      info
    </button>
  </div>
</template>
