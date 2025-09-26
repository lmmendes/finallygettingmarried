<template>
    <section class="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-[120px] lg:py-[208px] bg-white">
        <div class="max-w-5xl mx-auto px-8">
            
            <!-- Main content container -->
            <div class="relative">
            
                <!-- Text content centered -->
                <div class="w-full text-center space-y-4 relative z-10">
                    <h2 class="font-caption text-primary text-sm uppercase">{{ $t('about.title') }}</h2>
                    <p class="font-serif font-light text-accent-light text-2xl sm:text-2xl md:text-3xl lg:text-3xl !leading-[150%]">
                        {{ $t('about.text') }}
                    </p>
                </div>

                <!-- Images arranged side by side below text -->
                <div class="mt-[80px] w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
                    <div class="flex gap-2 animate-scroll">
                        <!-- First set of images -->
                        <img 
                            src="/images/gallery-1.png" 
                            alt="Couple photo" 
                            class="h-[208px] object-cover flex-shrink-0"
                        />
                        <img 
                            src="/images/gallery-2.png" 
                            alt="Travel photo" 
                            class="h-[208px] object-cover flex-shrink-0"
                        />
                        <img 
                            src="/images/gallery-3.png" 
                            alt="Cat photo" 
                            class="h-[208px] object-cover flex-shrink-0"
                        />
                        <img 
                            src="/images/gallery-4.png" 
                            alt="Adventure photo" 
                            class="h-[208px] object-cover flex-shrink-0"
                        />
                        <img 
                            src="/images/gallery-5.png" 
                            alt="Outdoor photo" 
                            class="h-[208px] object-cover flex-shrink-0"
                        />
                        <img 
                            src="/images/gallery-6.png" 
                            alt="Fun photo" 
                            class="h-[208px] object-cover flex-shrink-0"
                        />
                        <img 
                            src="/images/gallery-7.png" 
                            alt="Memory photo" 
                            class="h-[208px] object-cover flex-shrink-0"
                        />
                        <img 
                            src="/images/gallery-8.png" 
                            alt="Together photo" 
                            class="h-[208px] object-cover flex-shrink-0"
                        />
                        <img 
                            src="/images/gallery-9.png" 
                            alt="Happy moment" 
                            class="h-[208px] object-cover flex-shrink-0"
                        />
                        
                        <!-- Duplicate set for seamless loop -->
                        <img 
                            src="/images/gallery-1.png" 
                            alt="Couple photo" 
                            class="h-[208px] object-cover flex-shrink-0"
                        />
                        <img 
                            src="/images/gallery-2.png" 
                            alt="Travel photo" 
                            class="h-[208px] object-cover flex-shrink-0"
                        />
                        <img 
                            src="/images/gallery-3.png" 
                            alt="Cat photo" 
                            class="h-[208px] object-cover flex-shrink-0"
                        />
                        <img 
                            src="/images/gallery-4.png" 
                            alt="Adventure photo" 
                            class="h-[208px] object-cover flex-shrink-0"
                        />
                        <img 
                            src="/images/gallery-5.png" 
                            alt="Outdoor photo" 
                            class="h-[208px] object-cover flex-shrink-0"
                        />
                        <img 
                            src="/images/gallery-6.png" 
                            alt="Fun photo" 
                            class="h-[208px] object-cover flex-shrink-0"
                        />
                        <img 
                            src="/images/gallery-7.png" 
                            alt="Memory photo" 
                            class="h-[208px] object-cover flex-shrink-0"
                        />
                        <img 
                            src="/images/gallery-8.png" 
                            alt="Together photo" 
                            class="h-[208px] object-cover flex-shrink-0"
                        />
                        <img 
                            src="/images/gallery-9.png" 
                            alt="Happy moment" 
                            class="h-[208px] object-cover flex-shrink-0"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts"></script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
}
</style>
