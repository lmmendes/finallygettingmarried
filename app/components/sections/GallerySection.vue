<script setup lang="ts">
const images = [
    // Drop your own images into /public/gallery and list them here
    "/gallery/1.jpg",
    "/gallery/2.jpg",
    "/gallery/3.jpg",
    "/gallery/4.jpg",
    "/gallery/5.jpg",
    "/gallery/6.jpg",
    "/gallery/7.jpg",
    "/gallery/8.jpg",
    "/gallery/9.jpg",
    "/gallery/10.jpg",
    "/gallery/11.jpg",
    "/gallery/12.jpg",
];
</script>

<template>
    <div>
        <h2 class="text-xl font-semibold mb-6">Galeria</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            <figure
                v-for="src in images"
                :key="src"
                class="relative overflow-hidden rounded-xl border bg-white"
            >
                <img
                    :src="src"
                    :alt="`Foto ${src}`"
                    class="w-full h-40 object-cover hover:scale-105 transition"
                    loading="lazy"
                />
            </figure>
        </div>
    </div>
</template>
