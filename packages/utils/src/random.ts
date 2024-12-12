/**
 * @description 随机色
 */
export function getRandomColor(mode?: 'hex' | 'hsl' | 'rgb') {
  if (mode === 'hex') {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`
  }
  else if (mode === 'hsl') {
    const h = Math.random() * 360 // 色相
    const s = 70 + Math.random() * 30 // 饱和度 70-100%
    const l = 50 + Math.random() * 20 // 亮度 50-70%
    return `hsl(${h}, ${s}%, ${l}%)`
  }
  else {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
  }
}
