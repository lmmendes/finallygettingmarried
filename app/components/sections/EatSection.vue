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
</script>

<template>
    <div class="grid md:grid-cols-[1fr,2fr] gap-10">
        <div>
            <h2 class="text-xl font-semibold">Onde comer</h2>
            <p class="mt-3 text-neutral-700">
                A cerimónia é depois do almoço por isso convém comerem algo
                antes da igreja.
            </p>
        </div>

        <ul class="grid sm:grid-cols-2 gap-6">
            <li
                v-for="p in places"
                :key="p.name"
                class="bg-white rounded-xl border shadow-soft overflow-hidden"
            >
                <div class="p-5">
                    <h3 class="font-medium">{{ p.name }}</h3>
                    <p class="text-sm text-neutral-600">
                        {{ p.area }}
                        <span v-if="p.driveMins">· {{ p.driveMins }}min</span>
                    </p>
                    <div class="mt-3">
                        <a
                            v-if="p.mapsUrl"
                            class="text-sm underline"
                            :href="p.mapsUrl"
                            target="_blank"
                            rel="noopener"
                            >Obter direções →</a
                        >
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
