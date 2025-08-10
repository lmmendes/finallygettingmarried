<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div class="space-y-4">
            <h2 class="text-2xl md:text-3xl font-semibold">
                O casamento será no sábado,
                <em class="not-italic underline">23 de Maio de 2026</em>, na
                zona de Alenquer.
            </h2>
            <p>
                Começamos com uma cerimónia religiosa e seguimos para a quinta
                para a recepção e festa louca.
            </p>
        </div>

        <div class="grid sm:grid-cols-2 gap-6">
            <article class="bg-white rounded-xl p-5 shadow-soft border">
                <h3 class="font-semibold">Cerimónia</h3>
                <p class="text-sm text-neutral-600">15h00 - 16h30</p>
                <p class="mt-2">Igreja Matriz de Olhalvo</p>
                <a
                    class="mt-3 inline-block text-sm underline"
                    target="_blank"
                    href="https://maps.google.com"
                    >Obter direções →</a
                >
            </article>

            <article class="bg-white rounded-xl p-5 shadow-soft border">
                <h3 class="font-semibold">Recepção</h3>
                <p class="text-sm text-neutral-600">16h30 - 24h00</p>
                <p class="mt-2">Quinta de S. Gonçalo, Alenquer</p>
                <a
                    class="mt-3 inline-block text-sm underline"
                    target="_blank"
                    href="https://maps.google.com"
                    >Obter direções →</a
                >
            </article>
        </div>
    </div>
</template>
<script setup lang="ts"></script>
