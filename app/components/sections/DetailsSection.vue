<template>
    <section class="px-8">
        <div class="grid lg:grid-cols-2 gap-10 items-start">
            <!-- Left side - Wedding Illustration -->
            <div class="flex justify-center">
                <img 
                    src="/images/design/church.svg" 
                    alt="Wedding church illustration" 
                    class="w-full max-w-md h-auto"
                />
            </div>

            <!-- Right side - Text Column -->
            <div class="space-y-8">
                <!-- Wedding Details Text -->
                <div class="space-y-4">
                    <p class="font-serif text-primary text-2xl leading-[1.5]">
                        O casamento será no sábado, <strong>23 de Maio de 2026</strong>, na zona de Alenquer. 
                        Começamos com uma cerimónia religiosa e seguimos para a quinta para 
                        <span class="line-through">os negronis</span> a recepção e festa louca.
                    </p>
                </div>

                <!-- Ceremony and Reception Cards - Side by Side -->
                <div class="grid md:grid-cols-2 gap-6">
                    <!-- Ceremony Card -->
                    <div class="space-y-4">
                        <div class="space-y-2">
                            <h3 class="font-display font-bold text-primary text-2xl">Cerimónia</h3>
                            <p class="font-serif text-primary text-sm">15h00 - 16h30</p>
                        </div>
                        <div class="space-y-1">
                            <p class="font-serif text-primary text-base">Igreja Matriz de Olhalvo</p>
                            <a href="https://maps.google.com" target="_blank" class="inline-flex items-center gap-1 font-display font-bold text-accent text-base hover:underline">
                                Obter direções
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <!-- Reception Card -->
                    <div class="space-y-4">
                        <div class="space-y-2">
                            <h3 class="font-display font-bold text-primary text-2xl">Recepção</h3>
                            <p class="font-serif text-primary text-sm">16h30 - 2h00</p>
                        </div>
                        <div class="space-y-1">
                            <p class="font-serif text-primary text-base">
                                Quinta de S. Gonçalo,<br>
                                Alenquer
                            </p>
                            <a href="https://maps.google.com" target="_blank" class="inline-flex items-center gap-1 font-display font-bold text-accent text-base hover:underline">
                                Obter direções
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts"></script>
