<script setup lang="ts">
import { useCountdown } from "~/composables/useCountdown";

const target = new Date("2026-05-23T15:00:00+01:00"); // 23 Maio 2026 15:00
const { remaining } = useCountdown(target);
</script>

<template>
    <section class="mx-8">
        <div class="bg-olive rounded-3xl p-8 text-center relative overflow-hidden">
            <!-- Hand-drawn squiggly border - single internal decoration -->
            <div class="absolute inset-0 pointer-events-none">
                <img 
                    src="/images/design/squigly-line.svg" 
                    alt="Decorative border" 
                    class="absolute inset-4 w-auto h-auto opacity-80"
                    style="filter: brightness(0) invert(1); width: calc(100% - 2rem); height: calc(100% - 2rem);"
                />
            </div>
            
            <!-- Content -->
            <div class="relative z-10">
                <div class="flex items-center justify-center gap-8 text-5xl md:text-6xl font-display font-bold text-white mb-8">
                    <div class="text-center">
                        <div class="w-26 text-center">{{ String(remaining.years).padStart(2, '0') }}</div>
                        <div class="text-base font-serif font-light text-white/80 mt-1">Anos</div>
                    </div>
                    <span class="text-white">:</span>
                    <div class="text-center">
                        <div class="w-26 text-center">{{ String(remaining.months).padStart(2, '0') }}</div>
                        <div class="text-base font-serif font-light text-white/80 mt-1">Meses</div>
                    </div>
                    <span class="text-white">:</span>
                    <div class="text-center">
                        <div class="w-26 text-center">{{ String(remaining.days).padStart(2, '0') }}</div>
                        <div class="text-base font-serif font-light text-white/80 mt-1">Dias</div>
                    </div>
                </div>

                <a
                    href="https://forms.gle"
                    target="_blank"
                    rel="noopener"
                    class="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-display font-bold text-xl hover:bg-white/30 transition-colors shadow-lg border border-white/30"
                >
                    Confirmar presença
                </a>
            </div>
        </div>
    </section>
</template>
