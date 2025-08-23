<script setup lang="ts">
// Placeholder images - in a real implementation, these would be the actual wedding photos
const images = [
    { src: "https://picsum.photos/250/188", alt: "Wedding photo 1", class: "row-span-1" },
    { src: "https://picsum.photos/217/163", alt: "Wedding photo 2", class: "row-span-1" },
    { src: "https://picsum.photos/250/188", alt: "Wedding photo 3", class: "row-span-1" },
    { src: "https://picsum.photos/145/194", alt: "Wedding photo 4", class: "row-span-2" },
    { src: "https://picsum.photos/177/236", alt: "Wedding photo 5", class: "row-span-2" },
    { src: "https://picsum.photos/233/175", alt: "Wedding photo 6", class: "row-span-1" },
    { src: "https://picsum.photos/289/193", alt: "Wedding photo 7", class: "row-span-1" },
    { src: "https://picsum.photos/217/170", alt: "Wedding photo 8", class: "row-span-1" },
    { src: "https://picsum.photos/258/194", alt: "Wedding photo 9", class: "row-span-1" },
    { src: "https://picsum.photos/178/237", alt: "Wedding photo 10", class: "row-span-2" },
];
</script>

<template>
    <section class="px-8">
        <!-- Masonry Grid Layout inspired by Figma design -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-min">
            <figure
                v-for="(image, index) in images"
                :key="index"
                :class="`relative overflow-hidden rounded-lg bg-gray-200 ${image.class}`"
            >
                <img
                    :src="image.src"
                    :alt="image.alt"
                    class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                />
            </figure>
        </div>
        
        <!-- Decorative illustration placeholder -->
        <div class="mt-16 flex justify-center">
            <img 
                src="https://picsum.photos/384/128" 
                alt="Decorative wedding illustration" 
                class="w-96 h-32 object-cover rounded-lg"
            />
        </div>
    </section>
</template>
