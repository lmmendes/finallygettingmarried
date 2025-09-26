<template>
  <div ref="el" class="relative" @keydown.escape="open=false">
    <button
        class="flex items-center gap-2 rounded-full border border-white bg-white/50 px-3 py-2 hover:bg-white/100 transition-colors"
        @click="open = !open"
        :aria-expanded="open"
        aria-haspopup="listbox"
    >
      <span class="font-caption text-lg leading-[100%]">{{ current.flag }}</span>
      <svg class="size-4 fill-primary" viewBox="0 0 20 20"><path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.086l3.71-3.855a.75.75 0 1 1 1.08 1.04l-4.24 4.41a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06z"/></svg>
    </button>

    <ul
        v-if="open"
        class="absolute right-0 mt-2 w-36 overflow-hidden rounded-xl border bg-white shadow-lg"
        role="listbox"
    >
      <li
          v-for="l in localesList"
          :key="l.code"
          class="flex cursor-pointer items-center gap-2 px-3 py-2 font-caption text-sm hover:bg-accent-blue/60"
          @click="choose(l.code)"
          role="option"
          :aria-selected="l.code === locale"
      >
        <span class="font-caption text-base leading-none">{{ l.flag }}</span>
        <span class="flex-1">{{ l.code.toUpperCase() }}</span>
        <span v-if="l.code === locale" class="material-symbols-outlined text-base text-primary">check</span>
      </li>
    </ul>
  </div>
</template>

<style>
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}
</style>

<script setup lang="ts">
import { onClickOutside } from '#imports'
const { locale, locales, setLocale } = useI18n()

const open = ref(false)
const el = ref<HTMLElement | null>(null)
onMounted(() => { if (el.value) onClickOutside(el, () => (open.value = false)) })

const localesList = computed(() =>
    (locales.value as Array<any>).map(l => ({
      code: l.code, name: l.name, flag: l.flag ?? (l.code === 'pt' ? '🇵🇹' : '🇬🇧')
    }))
)

const current = computed(() =>
    localesList.value.find(l => l.code === locale.value) ?? { code: 'pt', flag: '🇵🇹' }
)

function choose(code: string) {
  setLocale(code)
  open.value = false
}
</script>
