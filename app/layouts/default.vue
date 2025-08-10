<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="min-h-dvh flex flex-col">
    <SiteHeader v-if="!route.meta.hideGlobalHeader" />
    <main class="flex-1">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
