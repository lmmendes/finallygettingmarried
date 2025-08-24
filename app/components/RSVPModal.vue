<template>
    <div 
        v-if="isOpen" 
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm p-4"
        @click.self="closeModal"
    >
        <div class="rounded-3xl mx-4 w-full max-w-5xl relative shadow-2xl max-h-[90vh] flex flex-col" style="background-color: #F9F4EA;">
            <!-- Close Button -->
            <button 
                @click="closeModal"
                class="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-primary/60 hover:text-primary transition-colors rounded-full border border-primary/20 hover:border-primary/40 z-10"
            >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>

            <!-- Modal Content -->
            <div class="overflow-y-auto p-8 space-y-8">
                <!-- Title -->
                <div class="text-center">
                    <h2 class="font-display font-bold text-primary text-4xl italic">Confirmar presença</h2>
                </div>

                <!-- Form -->
                <form @submit.prevent="submitRSVP" class="space-y-8 max-w-2xl mx-auto">
                    <!-- Name Section -->
                    <div class="space-y-4">
                        <div>
                            <h3 class="font-display font-bold text-primary text-2xl italic mb-2">Nome</h3>
                            <p class="font-serif text-primary/70 text-base">
                                Escreve o teu nome e de todas as pessoas que vais trazer (se aplicável).
                            </p>
                        </div>
                        
                        <!-- Main guest name -->
                        <div>
                            <input 
                                v-model="form.mainGuest"
                                type="text" 
                                required
                                class="w-full px-6 py-4 border border-primary/30 rounded-2xl font-serif text-primary text-lg focus:outline-none focus:border-primary focus:ring-0 transition-colors placeholder:text-primary/40 bg-white"
                                placeholder="João Neves"
                            />
                        </div>

                        <!-- Additional guests -->
                        <div v-for="(guest, index) in form.additionalGuests" :key="index" class="relative">
                            <input 
                                v-model="form.additionalGuests[index]"
                                type="text"
                                class="w-full px-6 py-4 border border-primary/30 rounded-2xl font-serif text-primary text-lg focus:outline-none focus:border-primary focus:ring-0 transition-colors placeholder:text-primary/40 bg-white"
                                placeholder="Nome do convidado"
                            />
                            <button 
                                type="button"
                                @click="removeGuest(index)"
                                class="absolute right-4 top-1/2 -translate-y-1/2 text-primary/40 hover:text-red-500 transition-colors"
                            >
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>

                        <!-- Add guest button -->
                        <button 
                            type="button"
                            @click="addGuest"
                            class="flex items-center gap-2 text-accent font-serif text-lg hover:text-accent/80 transition-colors"
                        >
                            <span class="text-xl">+</span>
                            Adicionar convidado
                        </button>
                    </div>

                    <!-- Attendance Confirmation -->
                    <div class="space-y-4">
                        <div>
                            <h3 class="font-display font-bold text-primary text-2xl italic mb-2">Vais conseguir comparecer?</h3>
                            <p class="font-serif text-primary/70 text-base">
                                Confirma se vais conseguir estar presente no nosso grande dia.
                            </p>
                        </div>
                        
                        <div class="space-y-3">
                            <label class="flex items-center p-4 border border-primary/30 rounded-2xl cursor-pointer hover:border-primary/50 transition-colors has-[:checked]:border-accent has-[:checked]:bg-accent/5">
                                <input 
                                    v-model="form.attendance" 
                                    type="radio" 
                                    value="yes" 
                                    required
                                    class="w-5 h-5 text-accent border-2 border-primary/30 focus:ring-accent focus:ring-2 focus:ring-offset-2"
                                />
                                <span class="ml-4 font-serif text-primary text-lg">Sim, estarei presente! 🎉</span>
                            </label>
                            <label class="flex items-center p-4 border border-primary/30 rounded-2xl cursor-pointer hover:border-primary/50 transition-colors has-[:checked]:border-gray-400 has-[:checked]:bg-gray-50">
                                <input 
                                    v-model="form.attendance" 
                                    type="radio" 
                                    value="no" 
                                    required
                                    class="w-5 h-5 text-gray-400 border-2 border-primary/30 focus:ring-gray-400 focus:ring-2 focus:ring-offset-2"
                                />
                                <span class="ml-4 font-serif text-primary text-lg">Infelizmente não poderei comparecer</span>
                            </label>
                        </div>
                    </div>

                    <!-- Dietary Restrictions (only if attending) -->
                    <div v-if="form.attendance === 'yes'" class="space-y-4">
                        <div>
                            <h3 class="font-display font-bold text-primary text-2xl italic mb-2">Restrições alimentares</h3>
                            <p class="font-serif text-primary/70 text-base">
                                Adiciona as tuas restrições e as do teu grupo.
                            </p>
                        </div>
                        
                        <textarea 
                            v-model="form.dietary"
                            rows="3"
                            class="w-full px-6 py-4 border border-primary/30 rounded-2xl font-serif text-primary text-lg focus:outline-none focus:border-primary focus:ring-0 transition-colors resize-none placeholder:text-primary/40 bg-white"
                            placeholder="Só como carne"
                        ></textarea>
                    </div>

                    <!-- Music Request (only if attending) -->
                    <div v-if="form.attendance === 'yes'" class="space-y-4">
                        <div>
                            <h3 class="font-display font-bold text-primary text-2xl italic mb-2">Uma música que queres ouvir na pista de dança</h3>
                            <p class="font-serif text-primary/70 text-base">
                                Pensa naquela música que te faz mexer a nádega esquerda (que não seja funk brasileiro <em>p'lamor da Santa</em>).
                            </p>
                        </div>
                        
                        <input 
                            v-model="form.musicRequest"
                            type="text"
                            class="w-full px-6 py-4 border border-primary/30 rounded-2xl font-serif text-primary text-lg focus:outline-none focus:border-primary focus:ring-0 transition-colors placeholder:text-primary/40 bg-white"
                            placeholder="Taylor Swift"
                        />
                    </div>

                    <!-- Message to Bride and Groom -->
                    <div class="space-y-4">
                        <div>
                            <h3 class="font-display font-bold text-primary text-2xl italic mb-2">Mensagem para os noivos</h3>
                            <p class="font-serif text-primary/70 text-base">
                                Deixa uma mensagem carinhosa para a Sónia e o Luís (opcional).
                            </p>
                        </div>
                        
                        <textarea 
                            v-model="form.message"
                            rows="4"
                            class="w-full px-6 py-4 border border-primary/30 rounded-2xl font-serif text-primary text-lg focus:outline-none focus:border-primary focus:ring-0 transition-colors resize-none placeholder:text-primary/40 bg-white"
                            placeholder="Leste bem o Luís é (opcional)... Parabéns pelo vosso casamento! Desejo-vos muita felicidade..."
                        ></textarea>
                    </div>

                    <!-- Submit Button -->
                    <div class="pt-4 flex justify-center">
                        <button 
                            type="submit"
                            :disabled="isSubmitting"
                            class="bg-olive text-white px-10 py-3 rounded-full font-display font-bold text-xl italic hover:bg-olive/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {{ isSubmitting ? 'A enviar...' : 'Confirmar' }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface RSVPForm {
    mainGuest: string;
    additionalGuests: string[];
    dietary: string;
    attendance: 'yes' | 'no' | '';
    musicRequest: string;
    message: string;
}

interface Props {
    isOpen: boolean;
}

interface Emits {
    (e: 'close'): void;
    (e: 'submit', data: RSVPForm): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const isSubmitting = ref(false);

const form = ref<RSVPForm>({
    mainGuest: '',
    additionalGuests: [],
    dietary: '',
    attendance: '',
    musicRequest: '',
    message: ''
});

const addGuest = () => {
    form.value.additionalGuests.push('');
};

const removeGuest = (index: number) => {
    form.value.additionalGuests.splice(index, 1);
};

const closeModal = () => {
    emit('close');
};

const submitRSVP = async () => {
    isSubmitting.value = true;
    
    try {
        // Here you would typically send the data to your backend
        // For now, we'll just emit the data
        emit('submit', { ...form.value });
        
        // Reset form
        form.value = {
            mainGuest: '',
            additionalGuests: [],
            dietary: '',
            attendance: '',
            musicRequest: '',
            message: ''
        };
        
        // Close modal
        closeModal();
        
        // Show success message (you could add a toast notification here)
        alert('Obrigado! A sua confirmação foi enviada com sucesso.');
        
    } catch (error) {
        console.error('Error submitting RSVP:', error);
        alert('Erro ao enviar confirmação. Por favor, tente novamente.');
    } finally {
        isSubmitting.value = false;
    }
};

// Close modal on Escape key
onMounted(() => {
    const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && props.isOpen) {
            closeModal();
        }
    };
    
    document.addEventListener('keydown', handleEscape);
    
    onUnmounted(() => {
        document.removeEventListener('keydown', handleEscape);
    });
});
</script>
