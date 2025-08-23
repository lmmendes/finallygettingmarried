<script setup lang="ts">
import type { PlaceCard } from "~/types/places";

const places: PlaceCard[] = [
    {
        name: "O Valério",
        area: "Alenquer",
        driveMins: 15,
        mapsUrl: "https://maps.google.com",
    },
    {
        name: "Colossal",
        area: "Alenquer",
        driveMins: 15,
        mapsUrl: "https://maps.google.com",
    },
    {
        name: "Hotel da moita",
        area: "Lisboa, centro",
        driveMins: 40,
        mapsUrl: "https://maps.google.com",
    },
];

const getRestaurantImage = (restaurantName: string): string => {
    const imageMap: Record<string, string> = {
        "O Valério": "/images/valerio-restaurant.png",
        "Colossal": "https://picsum.photos/80/80?random=4",
        "Hotel da moita": "https://picsum.photos/80/80?random=5"
    };
    return imageMap[restaurantName] || "https://picsum.photos/80/80?random=1";
};
</script>

<template>
    <section class="px-8">
        <div class="grid lg:grid-cols-2 gap-10 items-start">
            <!-- Left side - Title and Description -->
            <div class="space-y-4">
                <h2 class="font-display font-bold text-primary text-4xl">Onde comer</h2>
                <p class="font-serif text-primary text-2xl leading-[1.5]">
                    A cerimónia é depois do almoço por isso convém comerem algo antes da igreja.
                </p>
            </div>

            <!-- Right side - Restaurant Cards -->
            <div class="space-y-4">
                <div
                    v-for="p in places"
                    :key="p.name"
                    class="bg-bg-card rounded-xl p-4 flex items-center gap-4"
                >
                    <!-- Restaurant Image -->
                    <div class="w-20 h-20 flex-shrink-0">
                        <img 
                            :src="getRestaurantImage(p.name)" 
                            :alt="p.name"
                            class="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    
                    <!-- Content -->
                    <div class="flex-1 space-y-2">
                        <div class="space-y-1">
                            <h3 class="font-display font-bold text-primary text-xl">{{ p.name }}</h3>
                            <p class="font-serif text-primary text-base">
                                {{ p.area }} - {{ p.driveMins }}min
                            </p>
                        </div>
                        <a
                            v-if="p.mapsUrl"
                            :href="p.mapsUrl"
                            target="_blank"
                            rel="noopener"
                            class="inline-flex items-center gap-1 font-display font-bold text-accent text-sm hover:underline"
                        >
                            Obter direções
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
