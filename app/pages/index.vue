<template>
    <!-- Loading state while checking authentication -->
    <div v-if="isLoading || !isAuthenticated" class="loading-content min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 flex items-center justify-center">
        <div class="text-center">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-primary animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
            </div>
            <p class="font-serif text-primary text-sm">A verificar acesso...</p>
        </div>
    </div>
    
    <!-- Main content (only shown when authenticated and initialized) -->
    <div v-else-if="isAuthenticated && !isLoading" class="min-h-screen bg-white">
        <!-- Hero Section with full viewport height -->
        <div class="hero-section flex flex-col relative overflow-hidden" style="height: 100vh;">
            <!-- Background images with crossfade effect -->
            <div 
                v-for="(image, index) in carousselImages" 
                :key="index"
                class="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"
                :class="{ 'opacity-100': index === currentImageIndex, 'opacity-0': index !== currentImageIndex }"
                :style="{ backgroundImage: `url(${image})` }"
            ></div>
            <!-- Overlay with 80% opacity -->
            <div class="absolute inset-0 bg-accent-blue/90"></div>
            <!-- Content -->
            <div class="relative z-10 flex flex-col h-full">

                <!-- Header -->
                <header class="flex justify-end items-end px-4 pt-4 md:px-6 md:pt-6">
                    <div class="flex items-center gap-4">
                        <!-- <button 
                            @click="clearAuth" 
                            class="text-xs text-white hover:text-red-200 transition-colors"
                            title="Clear authentication (for testing)"
                        >
                            🚪 Logout
                        </button> -->
                        <LanguageSwitcher />
                    </div>
                </header>

                <!-- Hero CTA Section - takes remaining space -->
                <section class="flex-1 flex flex-col justify-center items-center text-center px-4 md:px-6">
                    <!-- Hero Rings Image -->
                    <div class="mb-8">
                        <img 
                            src="/images/design/hero-rings.png" 
                            alt="Wedding rings" 
                            class="w-[180px] h-auto mx-auto opacity-90"
                        />
                    </div>
                    
                    <!-- Hero Title -->
                    <h2 class="font-display text-primary text-5xl sm:text-5xl md:text-7xl lg:text-[104px] leading-[80%] sm:leading-[80%] mb-6">
                        {{ $t('hero.title') }} <span class='block'>{{ $t('hero.subtitle') }}</span>
                    </h2>
                    
                    <!-- Date with decorative swirls -->
                    <div class="flex items-center justify-center gap-6 mb-16">
                        <img 
                            src="/images/design/hero-swirls.png" 
                            alt="Decorative swirl" 
                            class="w-8 h-auto"
                        />
                        <p class="font-serif font-regular text-accent-light text-lg md:text-xl">{{ $t('hero.date') }}</p>
                        <img 
                            src="/images/design/hero-swirls.png" 
                            alt="Decorative swirl" 
                            class="w-8 h-auto scale-x-[-1]"
                        />
                    </div>

                    <!-- RSVP CTA -->
                    <button @click="openModal" class="inline-block bg-accent-light text-white px-8 py-4 rounded-full font-serif text-base hover:bg-accent-light/80 transition-colors">
                        {{ $t('hero.cta') }}
                    </button>
                </section>
            </div>
        </div>

        <!-- Rest of sections -->
        <div class="w-full bg-bg-subtle">
            <div class="max-w-5xl mx-auto">
                <div>

                    <!-- Wedding Details Section -->
                    <DetailsSection />

                    <!-- Onde Ficar Section -->
                    <StaySection />

                    <!-- Decorative separator -->
                    <div class="flex justify-center py-[104px]">
                        <img 
                            src="/images/design/separator.svg" 
                            alt="Section separator" 
                            class="w-16 h-auto"
                        />
                    </div>

                    <!-- Onde Comer Section -->
                    <EatSection />

                    <!-- Countdown Section -->
                    <section class="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
                        <div class="bg-accent-blue p-[104px] text-center relative overflow-hidden">
                            <!-- Content -->
                            <div class="relative z-10">
                                <div class="flex items-top justify-center gap-8 text-5xl md:text-6xl font-display text-primary mb-10">
                                    <div class="text-center">
                                        <div class="w-26 text-center">{{ String(remaining.months).padStart(2, '0') }}</div>
                                        <div class="text-base font-serif font-light text-secondary mt-1">{{ $t('countdown.months') }}</div>
                                    </div>
                                    <span class="text-primary">:</span>
                                    <div class="text-center">
                                        <div class="w-26 text-center">{{ String(remaining.weeks).padStart(2, '0') }}</div>
                                        <div class="text-base font-serif font-light text-secondary mt-1">{{ $t('countdown.weeks') }}</div>
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
                                <p class="font-serif text-secondary text-sm leading-relaxed mt-10">
                                {{ $t('countdown.timeline') }}
                                </p>
                            </div>
                        </div>
                    </section>

                    <!-- About Us Section -->
                    <AboutUsSection />

                    <!-- Presents Section -->
                    <PresentsSection />

                    <!-- Footer -->
                    <footer class="text-center py-8">
                        <p class="font-serif text-secondary text-sm leading-relaxed mx-8">{{ $t('footer.text') }}</p>
                    </footer>
                </div>
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
  import PresentsSection from '~/components/sections/PresentsSection.vue';
  import RSVPModal from '~/components/RSVPModal.vue';
  import { useCountdown } from "~/composables/useCountdown";
  import { useAuth } from "~/composables/useAuth";

  // Auth setup
  const { setAuthenticated, isAuthenticated, isInitialized } = useAuth()
  const isLoading = computed(() => !isInitialized.value)

  // Check authentication on mount
  onMounted(() => {
    if (!isAuthenticated.value) {
      console.log('User not authenticated, redirecting to auth page')
      navigateTo('/auth')
    }
  })

  // Watch for authentication changes
  watch(isAuthenticated, (authenticated) => {
    if (!authenticated) {
      navigateTo('/auth')
    }
  })

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

  // Clear authentication (for testing)
  const clearAuth = () => {
    setAuthenticated(false)
    console.log('Authentication cleared, redirecting to auth page')
    navigateTo('/auth')
  }

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
        name: data.name,
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