<!-- HeroSection.vue -->
<template>
  <section class="w-full bg-neutral-100">
    <div class="mx-auto max-w-6xl min-h-[100dvh] px-4 sm:px-6 py-6 md:py-10 flex flex-col">
      <!-- mini header -->
      <div class="flex items-start justify-between">
        <div>
          <div class="font-display text-[#605F4B] text-base leading-none">Luís &amp; Sónia</div>
          <div class="text-xs opacity-70 mt-1">Finalmente casam</div>
        </div>
        <LanguageSwitcher />
      </div>

      <!-- centered content -->
      <div class="flex-1 grid place-content-center text-center">
        <h1 class="font-bold text-[40px] leading-[1.05] sm:text-[56px] md:text-[64px] md:leading-[1]">
          Finalmente vai haver <span class="block">casamento!</span>
        </h1>
        <p class="mt-6 font-light text-[18px] leading-[150%] opacity-80">23 Maio 2026</p>
        <a href="#rsvp" class="mt-8 inline-flex items-center justify-center rounded-full border px-8 py-3 hover:bg-white/70">
          <span class="font-display">Confirmar presença</span>
        </a>
      </div>
    </div>
  </section>
</template>
