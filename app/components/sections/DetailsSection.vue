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
                            <p class="font-serif text-accent-light text-3xl leading-[1.5]" v-html="$t('details.description')">
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
                            <div class="inline-flex items-center gap-1">
                                <a 
                                    href="https://maps.google.com" 
                                    target="_blank" 
                                    rel="noopener" 
                                    class="font-serif text-accent-light text-sm underline">
                                    {{ $t('details.ceremony.directions') }}
                                </a>
                                <span class="material-symbols-outlined text-base text-accent-light">arrow_forward</span>
                            </div>
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
                            <div class="inline-flex items-center gap-1">
                                <a 
                                    href="https://maps.google.com" 
                                    target="_blank" rel="noopener" 
                                    class="font-serif text-accent-light text-sm underline">
                                    {{ $t('details.reception.directions') }}
                                </a>
                                <span class="material-symbols-outlined text-base text-accent-light">arrow_forward</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts"></script>
