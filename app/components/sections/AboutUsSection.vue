<template>
    <section class="px-8 relative">
        <!-- Main content container -->
        <div class="relative">
            <!-- Text content positioned on the left -->
            <div class="max-w-md space-y-4 relative z-10">
                <h2 class="font-display font-bold text-primary text-4xl italic">{{ $t('about.title') }}</h2>
                <p class="font-serif text-primary text-2xl leading-[1.5]">
                    {{ $t('about.text') }}
                </p>
            </div>

            <!-- Images scattered around the text -->
            <div class="absolute inset-0 pointer-events-none">
                <!-- Top right cluster -->
                <div class="absolute top-0 right-0 w-48 h-32">
                    <img 
                        src="/images/gallery-1.png" 
                        alt="Couple photo" 
                        class="absolute top-0 right-0 w-32 h-24 object-cover rounded-lg shadow-lg rotate-3"
                    />
                    <img 
                        src="/images/gallery-2.png" 
                        alt="Travel photo" 
                        class="absolute top-6 right-16 w-24 h-24 object-cover rounded-lg shadow-lg -rotate-6"
                    />
                </div>

                <!-- Middle right -->
                <div class="absolute top-32 right-8 w-40 h-40">
                    <img 
                        src="/images/gallery-3.png" 
                        alt="Cat photo" 
                        class="w-20 h-20 object-cover rounded-lg shadow-lg rotate-12"
                    />
                </div>

                <!-- Lower right cluster -->
                <div class="absolute bottom-0 right-0 w-56 h-48">
                    <img 
                        src="/images/gallery-4.png" 
                        alt="Adventure photo" 
                        class="absolute bottom-8 right-0 w-32 h-24 object-cover rounded-lg shadow-lg -rotate-3"
                    />
                    <img 
                        src="/images/gallery-5.png" 
                        alt="Outdoor photo" 
                        class="absolute bottom-0 right-20 w-28 h-32 object-cover rounded-lg shadow-lg rotate-6"
                    />
                </div>

                <!-- Left side scattered images -->
                <div class="absolute top-16 left-80 w-32 h-32">
                    <img 
                        src="/images/gallery-6.png" 
                        alt="Fun photo" 
                        class="w-24 h-20 object-cover rounded-lg shadow-lg -rotate-12"
                    />
                </div>

                <!-- Bottom left -->
                <div class="absolute bottom-0 left-64 w-40 h-32">
                    <img 
                        src="/images/gallery-7.png" 
                        alt="Memory photo" 
                        class="w-28 h-24 object-cover rounded-lg shadow-lg rotate-8"
                    />
                </div>

                <!-- Additional scattered images for larger screens -->
                <div class="hidden lg:block absolute top-24 left-96 w-32 h-32">
                    <img 
                        src="/images/gallery-8.png" 
                        alt="Together photo" 
                        class="w-24 h-28 object-cover rounded-lg shadow-lg -rotate-6"
                    />
                </div>

                <div class="hidden lg:block absolute bottom-16 right-32 w-32 h-32">
                    <img 
                        src="/images/gallery-9.png" 
                        alt="Happy moment" 
                        class="w-28 h-20 object-cover rounded-lg shadow-lg rotate-12"
                    />
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts"></script>
