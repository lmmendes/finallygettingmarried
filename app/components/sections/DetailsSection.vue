<template>
    <section class="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-[120px] lg:py-[208px] bg-white">
        <div class="max-w-5xl mx-auto px-8">
            <div class="grid lg:grid-cols-2 gap-[80px] items-start">
            <!-- Left side - Wedding Illustration -->
            <div class="flex justify-center">
                <img 
                    src="/images/design/illo.png" 
                    alt="Wedding church illustration" 
                    class="w-full max-w-md h-auto"
                />
            </div>

            <!-- Right side - Text Column -->
            <div class="space-y-10">
                        <!-- Wedding Details Text -->
                        <div class="space-y-4">
                            <p class="font-serif font-light text-accent-light text-2xl sm:text-2xl md:text-3xl lg:text-3xl !leading-[150%]" v-html="$t('details.description')">
                            </p>
                        </div>

                <!-- Ceremony and Reception Cards - Side by Side -->
                <div class="grid md:grid-cols-2 gap-10">
                    
                    <!-- Ceremony Card -->
                    <div class="space-y-4">
                        <div class="space-y-0">
                            <h3 class="font-caption text-primary text-sm uppercase">{{ $t('details.ceremony.title') }}</h3>
                            <p class="font-caption text-secondary text-sm">{{ $t('details.ceremony.time') }}</p>
                        </div>
                        <div class="space-y-1">
                            <p class="font-serif font-light text-primary text-xl">{{ $t('details.ceremony.location') }}</p>
                            <div class="inline-flex items-center gap-1">
                                <a 
                                    href="https://maps.app.goo.gl/nr2v7GWcNjrvnzEeA" 
                                    target="_blank" 
                                    rel="noopener" 
                                    class="font-caption text-accent-light text-sm underline">
                                    {{ $t('details.ceremony.directions') }}
                                </a>
                                <span class="material-symbols-outlined text-base text-accent-light">arrow_forward</span>
                            </div>
                        </div>
                    </div>

                    <!-- Reception Card -->
                    <div class="space-y-4">
                        <div class="space-y-0">
                            <h3 class="font-caption text-primary text-sm uppercase">{{ $t('details.reception.title') }}</h3>
                            <p class="font-caption text-secondary text-sm">{{ $t('details.reception.time') }}</p>
                        </div>
                        <div class="space-y-1">
                            <p class="font-serif font-light text-primary text-xl" v-html="$t('details.reception.location')">
                            </p>
                            <div class="inline-flex items-center gap-1">
                                <a 
                                    href="https://maps.app.goo.gl/V56wcriAWSTxFHBdA" 
                                    target="_blank" rel="noopener" 
                                    class="font-caption text-accent-light text-sm underline">
                                    {{ $t('details.reception.directions') }}
                                </a>
                                <span class="material-symbols-outlined text-base text-accent-light">arrow_forward</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
</template>
<script setup lang="ts"></script>
