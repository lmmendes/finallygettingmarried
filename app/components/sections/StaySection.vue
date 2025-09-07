<script setup lang="ts">
import type { PlaceCard } from "~/types/places";

const hotels: PlaceCard[] = [
    {
        name: "Moxy Lisboa Oriente",
        area: "Parque das nações",
        driveMins: 90,
        bookingUrl: "https://www.booking.com/hotel/pt/moxy-lisboa-oriente.en-gb.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaLsBiAEBmAEzuAEHyAEM2AED6AEB-AEBiAIBqAIBuALayvfFBsACAdICJGEyYjdmYmI5LTRjNzktNGE1OC1iNTA2LTBhZmE1MzczZDZmMdgCAeACAQ&sid=6ceaccec28b91282c7bda4bf0a9e78ee&dest_id=6443514&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1757275507&srpvid=29068d3585f8095f&type=total&ucfs=1&",
        mapsUrl: "https://maps.google.com",
    },
    {
        name: "Hotel Ibis",
        area: "Parque das nações",
        driveMins: 90,
        bookingUrl: "https://www.booking.com/hotel/pt/ibis-lisboa-parque-das-nacoes.en-gb.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaLsBiAEBmAEzuAEHyAEM2AED6AEB-AEBiAIBqAIBuALayvfFBsACAdICJGEyYjdmYmI5LTRjNzktNGE1OC1iNTA2LTBhZmE1MzczZDZmMdgCAeACAQ&sid=6ceaccec28b91282c7bda4bf0a9e78ee&dest_id=536349&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1757275628&srpvid=f07e8d74ee8a01ef&type=total&ucfs=1&",
        mapsUrl: "https://maps.google.com",
    },
    {
        name: "Hotel da moita",
        area: "Lisboa, centro",
        driveMins: 40,
        bookingUrl: "https://www.booking.com/hotel/pt/ibis-lisboa-parque-das-nacoes.en-gb.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaLsBiAEBmAEzuAEHyAEM2AED6AEB-AEBiAIBqAIBuALayvfFBsACAdICJGEyYjdmYmI5LTRjNzktNGE1OC1iNTA2LTBhZmE1MzczZDZmMdgCAeACAQ&sid=6ceaccec28b91282c7bda4bf0a9e78ee&dest_id=536349&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1757275628&srpvid=f07e8d74ee8a01ef&type=total&ucfs=1&",
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
        <div class="grid lg:grid-cols-2 gap-[80px] items-start">
            <!-- Left side - Title and Description -->
            <div class="space-y-2">
                <h2 class="font-display text-primary text-3xl">{{ $t('stay.title') }}</h2>
                <p class="font-serif text-accent-light text-3xl leading-[1.5]">
                    {{ $t('stay.description') }}
                </p>
            </div>

            <!-- Right side - Hotel Cards -->
            <div class="space-y-4">
                <template v-for="(h, index) in hotels" :key="h.name">
                    <!-- Hotel Card -->
                    <a 
                        :href="h.bookingUrl || h.mapsUrl" 
                        target="_blank" 
                        rel="noopener"
                        class="hover:bg-bg-card rounded-xl p-4 flex items-center gap-4 transition-colors cursor-pointer block"
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
                    <div class="flex-1 space-y-1">
                        <!-- Card text -->
                        <div class="space-y-1">
                            <h3 class="font-display text-primary text-2xl">{{ h.name }}</h3>
                            <p class="font-serif text-primary text-base">
                                {{ h.area }} - {{ h.driveMins }}min
                            </p>
                        </div>

                        <!-- Booking.com -->
                        <div class="flex gap-1 text-sm">
                            <span class="inline-flex items-center gap-2 font-serif text-accent-light text-sm underline">
                                {{ h.bookingUrl ? 'Booking.com' : 'Get directions' }}
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
