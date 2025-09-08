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
        <div class="grid lg:grid-cols-2 gap-[40px] lg:gap-[80px] items-start">
            <!-- Left side - Title and Description -->
            <div class="space-y-2">
                <h2 class="font-display text-primary text-3xl">{{ $t('eat.title') }}</h2>
                <p class="font-serif text-accent-light text-2xl sm:text-2xl md:text-3xl lg:text-3xl !leading-[150%]">
                    {{ $t('eat.description') }}
                </p>
            </div>

            <!-- Right side - Restaurant Cards -->
            <div class="space-y-4">
                <template v-for="(p, index) in places" :key="p.name">
                    <!-- Restaurant Card -->
                    <a 
                        :href="p.mapsUrl" 
                        target="_blank" 
                        rel="noopener"
                        class="hover:bg-bg-card rounded-xl p-4 flex items-center gap-4 transition-colors cursor-pointer block"
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
                        <div class="flex-1 space-y-1">
                            <div class="space-y-1">
                                <h3 class="font-display text-primary text-2xl">{{ p.name }}</h3>
                                <p class="font-serif text-primary text-base">
                                    {{ p.area }} - {{ p.driveMins }}min
                                </p>
                            </div>
                            <div class="flex gap-1 text-sm">
                                <span class="inline-flex items-center gap-2 font-serif text-accent-light text-sm underline">
                                    Get directions
                                </span>
                                <span class="material-symbols-outlined text-base text-accent-light">arrow_forward</span>
                            </div>
                        </div>
                    </a>
                </template>
            </div>
        </div>
    </section>
</template>
