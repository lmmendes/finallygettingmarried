<template>
    <section class="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-[120px] lg:py-[208px]">
        <div class="max-w-5xl mx-auto px-8">
            <!-- Main content container -->
            <div class="relative">
                <!-- Text content centered -->
                <div class="w-full text-center space-y-4 relative z-10">
                    <h2 class="font-caption text-primary text-sm uppercase">{{ $t('presents.title') }}</h2>
                    <p class="font-serif font-light text-accent-light text-2xl sm:text-2xl md:text-3xl lg:text-3xl !leading-[150%]">
                        {{ $t('presents.text') }}
                    </p>
                    <p class="font-serif font-medium text-primary text-2xl sm:text-2xl md:text-3xl lg:text-3xl !leading-[150%]">
                        {{ $t('presents.caption') }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts"></script>
