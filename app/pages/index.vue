<template>
    <div class="min-h-screen bg-white">
        <!-- Hero Section with full viewport height -->
        <div class="hero-section flex flex-col relative mx-4 mb-4 rounded-b-3xl overflow-hidden" style="height: calc(100vh - 16px);">
            <!-- Background images with crossfade effect -->
            <div 
                v-for="(image, index) in carousselImages" 
                :key="index"
                class="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"
                :class="{ 'opacity-100': index === currentImageIndex, 'opacity-0': index !== currentImageIndex }"
                :style="{ backgroundImage: `url(${image})` }"
            ></div>
            <!-- White overlay with 80% opacity -->
            <div class="absolute inset-0 bg-accent-blue opacity-90"></div>
            <!-- Content -->
            <div class="relative z-10 flex flex-col h-full">

              <!-- Header -->
              <header class="flex justify-end items-end px-4 pt-4 md:px-6 md:pt-6">
                 <!-- <div>
                      <h1 class="font-display text-primary text-xl leading-tight">{{ $t('brand.title') }}</h1>
                       <p class="font-serif font-regular text-primary text-[10px] mt-0">{{ $t('brand.subtitle') }}</p>
                  </div> -->
                  <LanguageSwitcher />
              </header>

            <!-- Hero CTA Section - takes remaining space -->
            <section class="flex-1 flex flex-col justify-center items-center text-center px-4 md:px-6">
                <!-- Hero Rings Image -->
                <div class="mb-0">
                    <img 
                        src="/images/design/hero-rings.png" 
                        alt="Wedding rings" 
                        class="w-[180px] h-auto mx-auto opacity-90"
                    />
                </div>
                
                <!-- Hero Title -->
                <h2 class="font-display text-primary text-5xl sm:text-5xl md:text-6xl lg:text-7xl leading-none mb-6">
                    {{ $t('hero.title') }} <span class='block'>{{ $t('hero.subtitle') }}</span>
                </h2>
                
                <!-- Date with decorative swirls -->
                <div class="flex items-center justify-center gap-6 mb-12">
                    <img 
                        src="/images/design/hero-swirls.png" 
                        alt="Decorative swirl" 
                        class="w-8 h-auto opacity-60"
                    />
                    <p class="font-serif font-regular text-accent text-lg md:text-xl">{{ $t('hero.date') }}</p>
                    <img 
                        src="/images/design/hero-swirls.png" 
                        alt="Decorative swirl" 
                        class="w-8 h-auto opacity-60 scale-x-[-1]"
                    />
                </div>

                <!-- RSVP CTA -->
                <button @click="openModal" class="inline-block bg-accent-light text-white px-8 py-4 rounded-full font-serif text-base hover:bg-accent-light/80 transition-colors">
                    {{ $t('hero.cta') }}
                </button>
            </section>
            </div>
        </div>

        <!-- Rest of sections with white background -->
        <div class="max-w-5xl mx-auto bg-white px-4">
            <div class="space-y-20 pt-[104px]">

                <!-- Decorative Separator -->
                <!--<div class="flex justify-center py-8">
                    <img 
                        src="/images/design/separator.svg" 
                        alt="Wedding decoration separator" 
                        class="w-16 h-auto opacity-80"
                    />
                </div>-->

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

                <!-- Decorative separator
                <div class="flex justify-center py-8">
                    <img 
                        src="/images/design/separator.svg" 
                        alt="Section separator" 
                        class="w-16 h-auto opacity-80"
                    />
                </div> -->

                <!-- Countdown Section -->
                <section class="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
                    <div class="bg-accent-blue p-[104px] text-center relative overflow-hidden">
                        <!-- Content -->
                        <div class="relative z-10">
                            <div class="flex items-top justify-center gap-8 text-5xl md:text-6xl font-display text-primary mb-10">
                                <div class="text-center">
                                    <div class="w-26 text-center">{{ String(remaining.years).padStart(2, '0') }}</div>
                                    <div class="text-base font-serif font-light text-secondary mt-1">{{ $t('countdown.years') }}</div>
                                </div>
                                <span class="text-primary">:</span>
                                <div class="text-center">
                                    <div class="w-26 text-center">{{ String(remaining.months).padStart(2, '0') }}</div>
                                    <div class="text-base font-serif font-light text-secondary mt-1">{{ $t('countdown.months') }}</div>
                                </div>
                                <span class="text-primary">:</span>
                                <div class="text-center">
                                    <div class="w-26 text-center">{{ String(remaining.days).padStart(2, '0') }}</div>
                                    <div class="text-base font-serif font-light text-secondary mt-1">{{ $t('countdown.days') }}</div>
                                </div>
                            </div>

                            <!-- CTA -->
                            <button
                                @click="openModal"
                                class="inline-block bg-accent-light text-white px-8 py-4 rounded-full font-serif text-base hover:bg-accent-light/80 transition-colors">
                                {{ $t('countdown.cta') }}
                            </button>

                            <!-- Timeline -->
                            <p class="font-serif text-secondary text-sm leading-none mt-10">
                            {{ $t('countdown.timeline') }}
                            </p>
                        </div>
                    </div>
                </section>

                <!-- Decorative separator
                <div class="flex justify-center py-8">
                    <img 
                        src="/images/design/separator.svg" 
                        alt="Section separator" 
                        class="w-16 h-auto opacity-80"
                    />
                </div> -->

                <!-- About Us Section -->
                <div class="mt-[104px]">
                    <AboutUsSection />
                </div>



                <!-- Footer -->
                <footer class="text-center py-8">
                    <div class="w-16 h-px bg-primary mx-auto mb-4"></div>
                    <p class="font-serif text-primary text-sm">{{ $t('footer.text') }}</p>
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
  import DetailsSection from '~/components/sections/DetailsSection.vue';
  import StaySection from '~/components/sections/StaySection.vue';
  import EatSection from '~/components/sections/EatSection.vue';
  import AboutUsSection from '~/components/sections/AboutUsSection.vue';
  import RSVPModal from '~/components/RSVPModal.vue';
  import { useCountdown } from "~/composables/useCountdown";

  // Background image carousel from caroussel folder
  const carousselImages = [
    '/images/caroussel/gallery-1.png',
    '/images/caroussel/gallery-2.png',
    '/images/caroussel/gallery-3.png',
    '/images/caroussel/gallery-6.png',
    '/images/caroussel/gallery-7.png',
    '/images/caroussel/gallery-8.png',
    '/images/caroussel/gallery-9.png'
  ];
  
  const currentImageIndex = ref(0);
  
  // Change image every 5 seconds with smooth crossfade
  let imageInterval: NodeJS.Timeout;
  
  onMounted(() => {
    imageInterval = setInterval(() => {
      currentImageIndex.value = (currentImageIndex.value + 1) % carousselImages.length;
    }, 5000);
  });
  
  onUnmounted(() => {
    if (imageInterval) {
      clearInterval(imageInterval);
    }
  });

  // Countdown setup
  const target = new Date("2026-05-23T15:00:00+01:00"); // 23 Maio 2026 15:00
  const { remaining } = useCountdown(target);

  // Modal state management
  const isModalOpen = ref(false);

  const openModal = () => {
    isModalOpen.value = true;
  };

  const closeModal = () => {
    isModalOpen.value = false;
  };

  const handleRSVPSubmit = async (data: any) => {
    console.log('RSVP Data:', data);
    
    try {
      // Create the structured data for Google Apps Script
      const formData = {
        name: data.mainGuest,
        attending: data.attendance, // 'yes' or 'no'
        dietary_restrictions: data.dietary || '',
        music: data.musicRequest || '',
        message: data.message || '',
        total_guests: (1 + data.additionalGuests.filter((guest: string) => guest.trim() !== '').length).toString(),
        guests: data.additionalGuests.filter((guest: string) => guest.trim() !== ''),
        submitted_at: new Date().toISOString()
      };
      
      console.log('Sending to Google Apps Script:', formData);
      
      const response = await fetch('https://script.google.com/macros/s/AKfycbxW49sBjI54dWx-mfEAd3m_jwzZBINia-CSLi_WoCi8Q6-8el8OeUR7-G77V0JD9WM/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      // Note: With no-cors mode, we can't read the response
      console.log('RSVP request sent to Google Apps Script');
      
    } catch (error) {
      console.error('Error submitting RSVP:', error);
    }
  };
</script>
