<script setup lang="ts">
const route = useRoute()
const hideGlobalHeader = computed(() => route.meta?.hideGlobalHeader || false)
</script>

<template>
  <div class="min-h-dvh flex flex-col">
    <SiteHeader v-if="!hideGlobalHeader" />
    <main class="flex-1">
      <slot />
    </main>
  </div>
</template>
