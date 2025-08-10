<template>
  <header class="sticky top-0 z-20 bg-neutral-50/80 backdrop-blur">
    <div class="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
      <!-- Brand (two lines) -->
      <NuxtLink to="/" class="group">
        <div class="font-display text-lg text-[#605F4B] leading-none"> {{ $t('brand.title') }} </div>
        <div class="text-xs opacity-70 -mt-0.5">{{ $t('brand.subtitle') }}</div>
      </NuxtLink>

      <div class="flex items-center gap-4">
        <nav class="hidden sm:flex items-center gap-6 text-sm">
          <a href="#sobre"   class="hover:opacity-70">{{ $t('nav.about') }}</a>
          <a href="#detalhes" class="hover:opacity-70">{{ $t('nav.details') }}</a>
          <a href="#ficar"   class="hover:opacity-70">{{ $t('nav.stay') }}</a>
          <a href="#comer"   class="hover:opacity-70">{{ $t('nav.eat') }}</a>
          <a href="#galeria" class="hover:opacity-70">{{ $t('nav.gallery') }}</a>
          <a href="#rsvp"    class="rounded-full border px-3 py-1 hover:bg-neutral-100">{{ $t('nav.rsvp') }}</a>
        </nav>

        <div ref="el">
          <LanguageSwitcher />
        </div>

        <button class="sm:hidden rounded-md border px-3 py-1" @click="open = !open" aria-label="Abrir menu">Menu</button>
      </div>
    </div>

    <!-- mobile -->
    <div v-if="open" class="sm:hidden border-t border-neutral-200">
      <nav class="mx-auto max-w-6xl px-4 py-3 grid gap-2">
        <a href="#sobre">{{ $t('nav.about') }}</a>
        <a href="#detalhes">{{ $t('nav.details') }}</a>
        <a href="#ficar">{{ $t('nav.stay') }}</a>
        <a href="#comer">{{ $t('nav.eat') }}</a>
        <a href="#galeria">{{ $t('nav.gallery') }}</a>
        <a href="#rsvp" class="rounded-md border px-3 py-2 text-center">{{ $t('nav.rsvp') }}</a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const open = ref(false)
watchEffect(() => {
  if (!open.value) return
  const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && (open.value = false)
  window.addEventListener('keydown', onEsc)
  onUnmounted(() => window.removeEventListener('keydown', onEsc))
})
</script>
