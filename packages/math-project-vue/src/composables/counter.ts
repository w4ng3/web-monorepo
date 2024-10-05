import { ref } from 'vue'

export function useCounter(initial: number = 0) {
  const count = ref(initial)
  const inc = () => count.value++
  const dec = () => count.value--

  return {
    count,
    inc,
    dec,
  }
}
