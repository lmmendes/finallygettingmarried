<script setup lang="ts">
import type { PlaceCard } from "~/types/places";

const hotels: PlaceCard[] = [
    {
        name: "Moxy Lisboa Oriente",
        area: "Lisboa",
        driveMins: 30,
        bookingUrl: "https://booking.com",
        mapsUrl: "https://maps.google.com",
    },
    {
        name: "Hotel Ibis",
        area: "Lisboa",
        driveMins: 30,
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
</script>

<template>
    <div class="grid md:grid-cols-[1fr,2fr] gap-10">
        <div>
            <h2 class="text-xl font-semibold">Onde ficar</h2>
            <p class="mt-3 text-neutral-700">
                Para quem não é de Lisboa e precisa de um sítio para ficar,
                deixamos algumas ideias.
            </p>
        </div>

        <ul class="grid sm:grid-cols-2 gap-6">
            <li
                v-for="h in hotels"
                :key="h.name"
                class="bg-white rounded-xl border shadow-soft overflow-hidden"
            >
                <div class="p-5">
                    <h3 class="font-medium">{{ h.name }}</h3>
                    <p class="text-sm text-neutral-600">
                        {{ h.area }}
                        <span v-if="h.driveMins">· {{ h.driveMins }}min</span>
                    </p>
                    <div class="mt-3 flex gap-4">
                        <a
                            v-if="h.bookingUrl"
                            class="text-sm underline"
                            :href="h.bookingUrl"
                            target="_blank"
                            rel="noopener"
                            >Booking</a
                        >
                        <a
                            v-if="h.mapsUrl"
                            class="text-sm underline"
                            :href="h.mapsUrl"
                            target="_blank"
                            rel="noopener"
                            >Direções</a
                        >
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
