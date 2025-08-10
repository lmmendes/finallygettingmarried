export type Countdown = { years: number; months: number; days: number }

export function useCountdown(target: Date) {
  const now = ref<Date>(new Date())

  const tick = () => (now.value = new Date())

  if (process.client) {
    // or: onMounted(() => { ... })
    const interval = setInterval(tick, 60 * 1000) // update every minute
    onUnmounted(() => clearInterval(interval))
  }

  const remaining = computed<Countdown>(() => {
    const start = new Date(now.value)
    const end = new Date(target)
    let years = end.getFullYear() - start.getFullYear()
    let months = end.getMonth() - start.getMonth()
    let days = end.getDate() - start.getDate()

    if (days < 0) {
      months -= 1
      const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0).getDate()
      days += prevMonth
    }
    if (months < 0) {
      years -= 1
      months += 12
    }
    return {
      years: Math.max(0, years),
      months: Math.max(0, months),
      days: Math.max(0, days)
    }
  })

  return { remaining }
}
