<template>
    <header
        class="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-neutral-200"
    >
        <div
            class="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between"
        >
            <NuxtLink
                to="/"
                class="flex items-center gap-2 group"
                aria-label="Página inicial"
            >
                <span
                    class="font-script text-xl tracking-wide group-hover:opacity-80"
                    >Luís &amp; Sónia</span
                >
                <span class="sr-only">Casamento</span>
            </NuxtLink>

            <nav class="hidden sm:flex items-center gap-6 text-sm">
                <a href="#sobre" class="hover:opacity-70">Sobre</a>
                <a href="#detalhes" class="hover:opacity-70">Detalhes</a>
                <a href="#ficar" class="hover:opacity-70">Onde ficar</a>
                <a href="#comer" class="hover:opacity-70">Onde comer</a>
                <a href="#galeria" class="hover:opacity-70">Galeria</a>
                <a
                    href="#rsvp"
                    class="rounded-full border px-3 py-1 hover:bg-neutral-100"
                    >Confirmar</a
                >
            </nav>

            <button
                class="sm:hidden rounded-md border px-3 py-1"
                @click="open = !open"
                aria-label="Abrir menu"
            >
                Menu
            </button>
        </div>

        <div v-if="open" class="sm:hidden border-t border-neutral-200">
            <nav class="mx-auto max-w-6xl px-4 py-3 grid gap-2">
                <a href="#sobre">Sobre</a>
                <a href="#detalhes">Detalhes</a>
                <a href="#ficar">Onde ficar</a>
                <a href="#comer">Onde comer</a>
                <a href="#galeria">Galeria</a>
                <a href="#rsvp" class="rounded-md border px-3 py-2 text-center"
                    >Confirmar presença</a
                >
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
const open = ref(false);
watchEffect(() => {
    if (!open.value) return;
    const onEsc = (e: KeyboardEvent) =>
        e.key === "Escape" && (open.value = false);
    window.addEventListener("keydown", onEsc);
    onUnmounted(() => window.removeEventListener("keydown", onEsc));
});
</script>
