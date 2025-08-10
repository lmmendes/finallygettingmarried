<script setup lang="ts">
import { useCountdown } from "~/composables/useCountdown";

const target = new Date("2026-05-23T15:00:00+01:00"); // 23 Maio 2026 15:00
const { remaining } = useCountdown(target);
</script>

<template>
    <div class="mx-auto max-w-4xl px-4 text-center">
        <div class="rounded-2xl border border-white/20 p-8 md:p-10">
            <p class="font-script text-2xl opacity-90">Está quase!</p>
            <div
                class="mt-6 flex items-center justify-center gap-8 text-4xl md:text-5xl font-serif"
            >
                <div>
                    <span>{{ remaining.years }}</span>
                    <div class="text-xs mt-1 opacity-90">Anos</div>
                </div>
                <span class="opacity-60">:</span>
                <div>
                    <span>{{ remaining.months }}</span>
                    <div class="text-xs mt-1 opacity-90">Meses</div>
                </div>
                <span class="opacity-60">:</span>
                <div>
                    <span>{{ remaining.days }}</span>
                    <div class="text-xs mt-1 opacity-90">Dias</div>
                </div>
            </div>

            <a
                href="https://forms.gle"
                target="_blank"
                rel="noopener"
                class="mt-8 inline-block rounded-full bg-white text-primary px-6 py-3 font-medium hover:opacity-90"
            >
                Confirmar presença
            </a>
        </div>
    </div>
</template>
