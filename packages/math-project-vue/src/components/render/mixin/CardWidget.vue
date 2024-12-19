<script lang="tsx" setup>
interface Props {
  author: string
  title: string
  date: string
}

const { author, title, date } = defineProps<Props>()

const card = () => {
  return (
    <div class="flex justify-center gap-2 rounded-md bg-amber-5">
      <div>{author}</div>
      <div>{`《${title}》`}</div>
      <span>{date}</span>
    </div>
  )
}
</script>

<template>
  <card />
</template>

<style scoped>

</style>
