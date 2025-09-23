export type Countdown = { months: number; weeks: number; days: number }

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
    
    // Calculate total difference in milliseconds
    const diffMs = end.getTime() - start.getTime()
    
    // If the date has passed, return zeros
    if (diffMs <= 0) {
      return { months: 0, weeks: 0, days: 0 }
    }
    
    // Calculate total days
    const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
    
    // Calculate months (approximate)
    const months = Math.floor(totalDays / 30.44) // Average days per month
    
    // Calculate remaining days after months
    const remainingDaysAfterMonths = totalDays - (months * 30.44)
    
    // Calculate weeks from remaining days
    const weeks = Math.floor(remainingDaysAfterMonths / 7)
    
    // Calculate remaining days after weeks
    const days = Math.floor(remainingDaysAfterMonths - (weeks * 7))
    
    return {
      months: Math.max(0, months),
      weeks: Math.max(0, weeks),
      days: Math.max(0, days)
    }
  })

  return { remaining }
}
