<template>
    <section class="px-8">
        <div class="grid lg:grid-cols-2 gap-[80px] items-start">
            <!-- Left side - Wedding Illustration -->
            <div class="flex justify-center">
                <img 
                    src="/images/design/church.svg" 
                    alt="Wedding church illustration" 
                    class="w-full max-w-md h-auto"
                />
            </div>

            <!-- Right side - Text Column -->
            <div class="space-y-10">
                        <!-- Wedding Details Text -->
                        <div class="space-y-4">
                            <p class="font-serif text-accent-light text-2xl leading-[1.5]" v-html="$t('details.description')">
                            </p>
                        </div>

                <!-- Ceremony and Reception Cards - Side by Side -->
                <div class="grid md:grid-cols-2 gap-10">
                    <!-- Ceremony Card -->
                    <div class="space-y-4">
                        <div class="space-y-0">
                            <h3 class="font-display text-primary text-2xl">{{ $t('details.ceremony.title') }}</h3>
                            <p class="font-serif text-primary text-sm">{{ $t('details.ceremony.time') }}</p>
                        </div>
                        <div class="space-y-1">
                            <p class="font-serif text-primary text-base">{{ $t('details.ceremony.location') }}</p>
                            <a href="https://maps.google.com" target="_blank" rel="noopener" class="inline-flex items-center gap-2 font-serif text-accent-light text-sm hover:underline">
                                {{ $t('details.ceremony.directions') }}
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <!-- Reception Card -->
                    <div class="space-y-4">
                        <div class="space-y-0">
                            <h3 class="font-display text-primary text-2xl">{{ $t('details.reception.title') }}</h3>
                            <p class="font-serif text-primary text-sm">{{ $t('details.reception.time') }}</p>
                        </div>
                        <div class="space-y-1">
                            <p class="font-serif text-primary text-base" v-html="$t('details.reception.location')">
                            </p>
                            <a href="https://maps.google.com" target="_blank" rel="noopener" class="inline-flex items-center gap-2 font-serif text-accent-light text-sm hover:underline">
                                {{ $t('details.reception.directions') }}
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
<script setup lang="ts"></script>
