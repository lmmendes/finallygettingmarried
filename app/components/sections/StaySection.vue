<script setup lang="ts">
import type { PlaceCard } from "~/types/places";

const hotels: PlaceCard[] = [
    {
        name: "Moxy Lisboa Oriente",
        area: "Parque das nações",
        driveMins: 90,
        bookingUrl: "https://booking.com",
        mapsUrl: "https://maps.google.com",
    },
    {
        name: "Hotel Ibis",
        area: "Parque das nações",
        driveMins: 90,
        bookingUrl: "https://booking.com",
        mapsUrl: "https://maps.google.com",
    },
    {
        name: "Hotel da moita",
        area: "Lisboa, centro",
        driveMins: 40,
        mapsUrl: "https://maps.google.com",
    },
];

const getHotelImage = (hotelName: string): string => {
    const imageMap: Record<string, string> = {
        "Moxy Lisboa Oriente": "/images/moxy-hotel.png",
        "Hotel Ibis": "/images/ibis-hotel.png",
        "Hotel da moita": "https://picsum.photos/80/80?random=3"
    };
    return imageMap[hotelName] || "https://picsum.photos/80/80?random=1";
};
</script>

<template>
    <section class="px-8">
        <div class="grid lg:grid-cols-2 gap-10 items-start">
            <!-- Left side - Title and Description -->
            <div class="space-y-4">
                <h2 class="font-display font-bold text-primary text-4xl">{{ $t('stay.title') }}</h2>
                <p class="font-serif text-primary text-2xl leading-[1.5]">
                    {{ $t('stay.description') }}
                </p>
            </div>

            <!-- Right side - Hotel Cards -->
            <div class="space-y-4">
                <div
                    v-for="h in hotels"
                    :key="h.name"
                    class="bg-bg-card rounded-xl p-4 flex items-center gap-4"
                >
                    <!-- Hotel Image -->
                    <div class="w-20 h-20 flex-shrink-0">
                        <img 
                            :src="getHotelImage(h.name)" 
                            :alt="h.name"
                            class="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    
                    <!-- Content -->
                    <div class="flex-1 space-y-2">
                        <div class="space-y-1">
                            <h3 class="font-display font-bold text-primary text-xl">{{ h.name }}</h3>
                            <p class="font-serif text-primary text-base">
                                {{ h.area }} - {{ h.driveMins }}min
                            </p>
                        </div>
                        <div class="flex gap-4 text-sm">
                            <a
                                v-if="h.bookingUrl"
                                :href="h.bookingUrl"
                                target="_blank"
                                rel="noopener"
                                class="inline-flex items-center gap-1 font-display font-bold text-accent hover:underline"
                            >
                                Booking.com
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </a>
                            <a
                                v-if="h.mapsUrl"
                                :href="h.mapsUrl"
                                target="_blank"
                                rel="noopener"
                                class="inline-flex items-center gap-1 font-display font-bold text-accent hover:underline"
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
        </div>
    </section>
</template>
