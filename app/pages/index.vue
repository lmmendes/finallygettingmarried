<template>
    <div class="min-h-screen bg-white">
        <!-- Hero Section with grey background -->
        <div class="max-w-5xl mx-auto bg-bg-light rounded-[32px] p-4">
            <!-- Header -->
            <header class="flex justify-between items-start p-4">
                <div>
                    <h1 class="font-display font-bold text-primary text-base leading-tight">{{ $t('brand.title') }}</h1>
                    <p class="font-serif font-light text-primary text-xs mt-1">{{ $t('brand.subtitle') }}</p>
                </div>
                <LanguageSwitcher />
            </header>

            <!-- Hero CTA Section -->
            <section class="text-center py-20">
                <h2 class="font-display font-bold text-primary text-5xl md:text-6xl leading-none mb-6">
                    {{ $t('hero.title') }}
                </h2>
                <p class="font-serif font-light text-primary text-xl mb-10">{{ $t('hero.date') }}</p>
                <button @click="openModal" class="inline-block border border-primary text-primary px-8 py-4 rounded-full font-display font-bold text-xl hover:bg-primary/10 transition-colors">
                    {{ $t('hero.cta') }}
                </button>
            </section>
        </div>

        <!-- Rest of sections with white background -->
        <div class="max-w-5xl mx-auto bg-white px-4">
            <div class="space-y-20 pt-8">

                <!-- Decorative Separator -->
                <div class="flex justify-center py-8">
                    <img 
                        src="/images/design/separator.svg" 
                        alt="Wedding decoration separator" 
                        class="w-16 h-auto opacity-80"
                    />
                </div>

                <!-- Wedding Details Section -->
                <DetailsSection />

                <!-- Decorative separator -->
                <div class="flex justify-center py-8">
                    <img 
                        src="/images/design/separator.svg" 
                        alt="Section separator" 
                        class="w-16 h-auto opacity-80"
                    />
                </div>

                <!-- Onde Ficar Section -->
                <StaySection />

                <!-- Decorative separator -->
                <div class="flex justify-center py-8">
                    <img 
                        src="/images/design/separator.svg" 
                        alt="Section separator" 
                        class="w-16 h-auto opacity-80"
                    />
                </div>

                <!-- Onde Comer Section -->
                <EatSection />

                <!-- Decorative separator -->
                <div class="flex justify-center py-8">
                    <img 
                        src="/images/design/separator.svg" 
                        alt="Section separator" 
                        class="w-16 h-auto opacity-80"
                    />
                </div>

                <!-- Countdown Section -->
                <CountdownSection @open-modal="openModal" />

                <!-- Decorative separator -->
                <div class="flex justify-center py-8">
                    <img 
                        src="/images/design/separator.svg" 
                        alt="Section separator" 
                        class="w-16 h-auto opacity-80"
                    />
                </div>

                <!-- About Us Section -->
                <AboutUsSection />



                <!-- Footer -->
                <footer class="text-center py-8">
                    <p class="font-display font-bold text-primary text-sm">{{ $t('footer.text') }}</p>
                </footer>
            </div>
        </div>

        <!-- RSVP Modal -->
        <RSVPModal 
            :is-open="isModalOpen" 
            @close="closeModal"
            @submit="handleRSVPSubmit"
        />
    </div>
</template>

<script setup lang="ts">
  definePageMeta({ hideGlobalHeader: true })
  import HeroSection from '~/components/sections/HeroSection.vue';
  import DetailsSection from '~/components/sections/DetailsSection.vue';
  import StaySection from '~/components/sections/StaySection.vue';
  import EatSection from '~/components/sections/EatSection.vue';
  import AboutUsSection from '~/components/sections/AboutUsSection.vue';
  import CountdownSection from '~/components/sections/CountdownSection.vue';
  import RSVPModal from '~/components/RSVPModal.vue';

  // Modal state management
  const isModalOpen = ref(false);

  const openModal = () => {
    isModalOpen.value = true;
  };

  const closeModal = () => {
    isModalOpen.value = false;
  };

  const handleRSVPSubmit = (data: any) => {
    console.log('RSVP Data:', data);
    // Here you would typically send the data to your backend
  };
</script>
