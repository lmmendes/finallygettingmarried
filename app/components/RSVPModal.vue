<template>
    <div 
        v-if="isOpen" 
        class="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
        @click.self="closeModal"
    >
        <div class="w-full h-full relative flex flex-col" style="background-color: #F9F4EA;">
            <!-- Close Button -->
            <button 
                @click="closeModal"
                class="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-secondary hover:text-primary transition-colors rounded-full border border-primary/20 hover:border-primary/40 z-10"
            >
                <span class="material-symbols-outlined text-lg text-primary">close</span>
            </button>

            <!-- Modal Content -->
            <div class="flex-1 overflow-y-auto px-8 pt-8 pb-[80px] space-y-8">
                
                <!-- Title -->
                <div class="text-center max-w-2xl mx-auto pt-[80px] space-y-4 pb-[40px]">
                    <h2 class="font-display text-primary text-2xl sm:text-2xl md:text-3xl lg:text-3xl">{{ t('modal.title') }}</h2>
                    <p class="font-serif text-accent-light text-2xl sm:text-2xl md:text-3xl lg:text-3xl !leading-[150%]">
                        {{ $t('modal.description') }}
                    </p>
                </div>

                <!-- Form -->
                <form @submit.prevent="submitRSVP" class="space-y-12 max-w-2xl mx-auto">
                    <!-- Main guest name -->
                    <div class="space-y-3">
                        <label class="font-serif text-primary text-base font-medium">{{ t('modal.name.label') }}</label>
                        <input 
                            type="text" 
                            v-model="form.name"
                            :placeholder="t('modal.main.placeholder')"
                            :class="[
                                'w-full px-6 py-4 border border-primary/20 rounded-lg focus:outline-none hover:border-primary/40 transition-colors font-serif text-primary placeholder:text-secondary',
                                form.name.trim() ? 'bg-white' : 'bg-white/40 hover:bg-white/50'
                            ]"
                            required
                        />
                    </div>

                    <!-- Attendance Confirmation -->
                    <div class="space-y-4">
                        <div>
                            <h3 class="font-serif text-primary text-base font-medium mb-2">{{ t('modal.attendance.title') }}</h3>
                        </div>
                        
                        <div class="space-y-3">
                            <label class="flex items-center p-4 border border-primary/20 rounded-lg cursor-pointer hover:border-primary/40 hover:bg-secondary/10 transition-colors has-[:checked]:border-primary has-[:checked]:bg-secondary/40">
                                <input 
                                    v-model="form.attendance" 
                                    type="radio" 
                                    value="yes" 
                                    required
                                    class="w-5 h-5 text-accent border-2 border-primary/20"
                                />
                                <span class="ml-4 font-serif text-primary text-base">{{ t('modal.attendance.yes') }}</span>
                            </label>
                            <label class="flex items-center p-4 border border-primary/20 rounded-lg cursor-pointer hover:border-primary/40 hover:bg-secondary/10 transition-colors has-[:checked]:border-primary has-[:checked]:bg-secondary/40">
                                <input 
                                    v-model="form.attendance" 
                                    type="radio" 
                                    value="no" 
                                    required
                                    class="w-5 h-5 text-gray-400 border-2 border-primary/20"
                                />
                                <span class="ml-4 font-serif text-primary text-base">{{ t('modal.attendance.no') }}</span>
                            </label>
                        </div>
                     </div>

                    <!-- Message for bride and groom (only if not attending) -->
                    <div v-if="form.attendance === 'no'" class="space-y-4">
                        <div>
                            <h3 class="font-serif text-primary text-base font-medium mb-1">{{ t('modal.message.title') }}</h3>
                            <p class="font-serif text-secondary text-base">
                                {{ t('modal.message.description') }}
                            </p>
                        </div>
                        <textarea 
                            v-model="form.message"
                            rows="4"
                            :class="[
                                'w-full px-6 py-4 border border-primary/20 rounded-lg font-serif text-primary text-base focus:outline-none hover:border-primary/40 focus:ring-0 transition-colors resize-none placeholder:text-secondary',
                                form.message.trim() ? 'bg-white' : 'bg-white/40 hover:bg-white/50'
                            ]"
                            :placeholder="t('modal.message.placeholder')"
                        ></textarea>
                    </div>

                    <!-- Name Section and Dietary (only if attending) -->
                    <div v-if="form.attendance === 'yes'" class="space-y-4">
                        <!-- Name Section -->
                        <div class="space-y-4">
                            <div>
                                <h3 class="font-serif text-primary text-base font-medium mb-1">{{ t('modal.guest.label') }}</h3>
                                <p class="font-serif text-secondary text-base">
                                    {{ t('modal.name.description') }}
                                </p>
                            </div>
                        

                            <!-- Additional guests -->
                            <div v-for="(guest, index) in form.additionalGuests" :key="index" class="relative">
                                <input 
                                    v-model="form.additionalGuests[index]"
                                    type="text"
                                    :class="[
                                        'w-full px-6 py-4 border border-primary/20 rounded-lg font-serif text-primary text-base focus:outline-none hover:border-primary/40 focus:ring-0 transition-colors placeholder:text-secondary',
                                        form.additionalGuests[index]?.trim() ? 'bg-white' : 'bg-white/40 hover:bg-white/50'
                                    ]"
                                    :placeholder="t('modal.name.guest_placeholder')"
                                />
                                <button 
                                    type="button"
                                    @click="removeGuest(index)"
                                    class="absolute right-4 top-1/2 -translate-y-1/2 text-primary/40 hover:text-red-500 transition-colors"
                                >
                                    <span class="material-symbols-outlined text-lg text-accent-light">close</span>
                                </button>
                            </div>

                            <!-- Add guest button -->
                            <button 
                                type="button"
                                @click="addGuest"
                                class="flex items-center gap-2 text-accent-light font-serif text-base hover:text-accent-light/80 transition-colors"
                            >
                            <span class="text-xl">+</span>
                            {{ t('modal.name.add_guest') }}
                            </button>
                        </div>
                    </div>

                    <!-- Dietary Restrictions (only if attending) -->
                    <div v-if="form.attendance === 'yes'" class="space-y-4">
                        <!-- Dietary description -->
                        <div class="space-y-4">
                            <div>
                                <h3 class="font-serif text-primary text-base font-medium mb-1">{{ t('modal.dietary.title') }}</h3>
                                <p class="font-serif text-secondary text-base">
                                    {{ t('modal.dietary.description') }}
                                </p>
                            </div>
                        
                            <textarea 
                                v-model="form.dietary"
                                rows="3"
                                :class="[
                                    'w-full px-6 py-4 border border-primary/20 rounded-lg font-serif text-primary text-base focus:outline-none hover:border-primary/40 focus:ring-0 transition-colors resize-none placeholder:text-secondary',
                                    form.dietary.trim() ? 'bg-white' : 'bg-white/40 hover:bg-white/50'
                                ]"
                                :placeholder="t('modal.dietary.placeholder')"
                            ></textarea>
                        </div>
                    </div>

                    <!-- Music and Message (only if attending) -->
                    <div v-if="form.attendance === 'yes'" class="space-y-4">
                        <!-- Music Request -->
                        <div class="space-y-4">
                            <div>
                                <h3 class="font-serif text-primary text-base font-medium mb-1">{{ t('modal.music.title') }}</h3>
                                <p class="font-serif text-secondary text-base" v-html="t('modal.music.description')">
                                </p>
                            </div>
                        
                            <input 
                                v-model="form.musicRequest"
                                type="text"
                                :class="[
                                    'w-full px-6 py-4 border border-primary/20 rounded-lg font-serif text-primary text-base focus:outline-none hover:border-primary/40 focus:ring-0 transition-colors placeholder:text-secondary',
                                    form.musicRequest.trim() ? 'bg-white' : 'bg-white/40 hover:bg-white/50'
                                ]"
                                :placeholder="t('modal.music.placeholder')"
                            />
                        </div>
                    </div>

                    <!-- Submit Button -->
                    <div class="pt-4 flex justify-center">
                        <button 
                            type="submit"
                            :disabled="isSubmitting || !isFormValid"
                            class="bg-accent-light text-white px-8 py-4 rounded-full font-serif text-base hover:bg-accent-light/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {{ isSubmitting ? t('modal.submitting') : t('modal.submit') }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// Import and use i18n composable
const { t } = useI18n();

interface RSVPForm {
    name: string;
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

// Check if form has required fields filled
const isFormValid = computed(() => {
    return form.value.name.trim() !== '' && form.value.attendance !== '';
});

const form = ref<RSVPForm>({
    name: '',
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
            name: '',
            additionalGuests: [],
            dietary: '',
            attendance: '',
            musicRequest: '',
            message: ''
        };
        
        // Close modal
        closeModal();
        
        // Show success message (you could add a toast notification here)
                            alert(t('modal.success'));
        
    } catch (error) {
        console.error('Error submitting RSVP:', error);
                            alert(t('modal.error'));
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
