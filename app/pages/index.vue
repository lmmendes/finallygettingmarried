<template>
    <div>
        <HeroSection />

        <section id="detalhes" class="mx-auto max-w-6xl px-4 py-16">
            <DetailsSection />
        </section>

        <section id="ficar" class="mx-auto max-w-6xl px-4 py-16">
            <StaySection />
        </section>

        <section id="comer" class="mx-auto max-w-6xl px-4 py-16">
            <EatSection />
        </section>

        <section id="rsvp" class="py-16 bg-primary text-white">
            <CountdownSection />
        </section>

        <section id="sobre" class="mx-auto max-w-6xl px-4 py-16">
            <AboutUsSection />
        </section>

        <section id="galeria" class="mx-auto max-w-6xl px-4 pb-20">
            <GallerySection />
        </section>
    </div>
</template>

<script setup lang="ts">
  definePageMeta({ hideGlobalHeader: true })
  import HeroSection from '~/components/sections/HeroSection.vue';
  import DetailsSection from '~/components/sections/DetailsSection.vue';
  import StaySection from '~/components/sections/StaySection.vue';
  import EatSection from '~/components/sections/EatSection.vue';
  import AboutUsSection from '~/components/sections/AboutUsSection.vue';
  import GallerySection from '~/components/sections/GallerySection.vue';
  import CountdownSection from '~/components/sections/CountdownSection.vue';
</script>
