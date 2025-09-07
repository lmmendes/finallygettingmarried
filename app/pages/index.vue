<template>
    <div class="min-h-screen bg-white">
        <!-- Hero Section with full viewport height -->
        <div class="h-screen flex flex-col bg-bg-light">
            <!-- Header -->
            <header class="flex justify-between items-start p-4 md:p-6">
                <div>
                    <h1 class="font-display text-primary text-xl leading-tight">{{ $t('brand.title') }}</h1>
                    <p class="font-serif font-regular text-primary text-xxs mt-1">{{ $t('brand.subtitle') }}</p>
                </div>
                <LanguageSwitcher />
            </header>

            <!-- Hero CTA Section - takes remaining space -->
            <section class="flex-1 flex flex-col justify-center items-center text-center px-4 md:px-6">
                <h2 class="font-display font-bold text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none mb-6">
                    {{ $t('hero.title') }}
                </h2>
                <p class="font-serif font-light text-primary text-lg md:text-xl mb-10">{{ $t('hero.date') }}</p>
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
                                    <div class="text-base font-serif font-light text-white/80 mt-1">{{ $t('countdown.years') }}</div>
                                </div>
                                <span class="text-white">:</span>
                                <div class="text-center">
                                    <div class="w-26 text-center">{{ String(remaining.months).padStart(2, '0') }}</div>
                                    <div class="text-base font-serif font-light text-white/80 mt-1">{{ $t('countdown.months') }}</div>
                                </div>
                                <span class="text-white">:</span>
                                <div class="text-center">
                                    <div class="w-26 text-center">{{ String(remaining.days).padStart(2, '0') }}</div>
                                    <div class="text-base font-serif font-light text-white/80 mt-1">{{ $t('countdown.days') }}</div>
                                </div>
                            </div>

                            <button
                                @click="openModal"
                                class="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-display font-bold text-xl hover:bg-white/30 transition-colors shadow-lg border border-white/30"
                            >
                                {{ $t('countdown.cta') }}
                            </button>
                        </div>
                    </div>
                </section>

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
  import DetailsSection from '~/components/sections/DetailsSection.vue';
  import StaySection from '~/components/sections/StaySection.vue';
  import EatSection from '~/components/sections/EatSection.vue';
  import AboutUsSection from '~/components/sections/AboutUsSection.vue';
  import RSVPModal from '~/components/RSVPModal.vue';
  import { useCountdown } from "~/composables/useCountdown";

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
