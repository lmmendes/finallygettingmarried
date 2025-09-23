<template>
  <div class="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 flex items-center justify-center p-4 relative overflow-hidden">
    <!-- Random Wedding Emojis Background -->
    <div 
      v-for="(emoji, index) in backgroundEmojis" 
      :key="index"
      class="absolute text-4xl opacity-20 pointer-events-none animate-pulse"
      :style="emoji.style"
    >
      {{ emoji.char }}
    </div>
    
    <div class="max-w-md w-full relative z-10">
      <!-- Wedding Logo/Title -->
      <div class="text-center mb-8">
        <h1 class="font-display font-bold text-primary text-3xl mb-2">{{ $t('brand.title') }}</h1>
        <p class="font-serif font-light text-primary text-sm">{{ $t('brand.subtitle') }}</p>
      </div>

      <!-- Authentication Card -->
      <div class="bg-white rounded-3xl shadow-xl p-8">
        <div class="text-center mb-6">
          <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
          </div>
          <h2 class="font-display font-bold text-primary text-xl mb-2">{{ $t('auth.title') }}</h2>
          <p class="font-serif text-gray-600 text-sm">{{ $t('auth.subtitle') }}</p>
        </div>

        <!-- Question Form -->
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label class="block font-serif font-medium text-primary text-sm mb-3">
              {{ currentQuestion.question || 'Loading question...' }}
            </label>
            <input
              v-model="userAnswer"
              type="text"
              :placeholder="$t('auth.placeholder')"
              class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors font-serif"
              :class="{ 'border-red-300 focus:border-red-500 focus:ring-red-500/20': error }"
              :disabled="!currentQuestion.question"
              required
            />
            <p v-if="error" class="text-red-500 text-sm mt-2 font-serif">{{ $t('auth.error') }}</p>
          </div>

          <button
            type="submit"
            :disabled="!userAnswer.trim() || isLoading || !currentQuestion.question"
            class="w-full bg-primary text-white py-3 px-6 rounded-xl font-display font-bold text-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <span v-if="isLoading">{{ $t('auth.checking') }}</span>
            <span v-else>{{ $t('auth.submit') }}</span>
          </button>
        </form>

        <!-- Language Switcher -->
        <div class="mt-6 pt-6 border-t border-gray-100">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LanguageSwitcher from '~/components/LanguageSwitcher.vue'

// Set page meta
definePageMeta({
  layout: false,
  hideGlobalHeader: true
})

// Auth composable
const { getRandomQuestion, validateAnswer, setAuthenticated } = useAuth()

// Reactive state
const userAnswer = ref('')
const error = ref(false)
const isLoading = ref(false)
const currentQuestion = ref<{ question: string; answers: string[] }>({ question: '', answers: [] })

// Wedding emojis for background
const weddingEmojis = ['💒', '💍', '👰', '🤵', '💐', '🎂', '🍾', '💖', '💗', '💘', '🎉', '🎊', '✨', '🌟', '💫', '🕊️', '🌹', '🌺', '🌸', '🌻', '🐱', '🐈', '🐈‍⬛']

// Generate random background emojis
const backgroundEmojis = ref<Array<{ char: string; style: string }>>([])

const generateBackgroundEmojis = () => {
  const emojis = []
  const numEmojis = Math.floor(Math.random() * 8) + 5 // 5-12 emojis
  
  for (let i = 0; i < numEmojis; i++) {
    const randomEmoji = weddingEmojis[Math.floor(Math.random() * weddingEmojis.length)]
    if (randomEmoji) {
      const randomX = Math.floor(Math.random() * 100) // 0-100%
      const randomY = Math.floor(Math.random() * 100) // 0-100%
      const randomRotation = Math.floor(Math.random() * 360) // 0-360 degrees
      const randomScale = 0.5 + Math.random() * 1.5 // 0.5-2x scale
      
      emojis.push({
        char: randomEmoji,
        style: `
          left: ${randomX}%;
          top: ${randomY}%;
          transform: rotate(${randomRotation}deg) scale(${randomScale});
          animation-delay: ${Math.random() * 2}s;
        `
      })
    }
  }
  
  backgroundEmojis.value = emojis
}

// Initialize question and emojis on client side
onMounted(() => {
  currentQuestion.value = getRandomQuestion()
  generateBackgroundEmojis()
})

// Handle form submission
const handleSubmit = async () => {
  error.value = false
  isLoading.value = true

  // Simulate a small delay for better UX
  await new Promise(resolve => setTimeout(resolve, 500))

  const isCorrect = validateAnswer(userAnswer.value, currentQuestion.value.answers)
  
  if (isCorrect) {
    setAuthenticated(true)
    await navigateTo('/')
  } else {
    error.value = true
    userAnswer.value = ''
    // Get a new random question for next attempt
    currentQuestion.value = getRandomQuestion()
    // Generate new random emojis for the background
    generateBackgroundEmojis()
  }
  
  isLoading.value = false
}

// Redirect if already authenticated
const { isAuthenticated } = useAuth()
watch(isAuthenticated, (authenticated) => {
  if (authenticated) {
    console.log('User is authenticated, redirecting to main page')
    navigateTo('/')
  }
}, { immediate: true })

// Also check on mount
onMounted(() => {
  if (isAuthenticated.value) {
    console.log('User is already authenticated, redirecting to main page')
    navigateTo('/')
  }
})
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-15px) scale(1.1); }
}

@keyframes wiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  75% { transform: rotate(-5deg); }
}

.animate-pulse {
  animation: float 3s ease-in-out infinite;
}

.animate-pulse:nth-child(odd) {
  animation: bounce 2s ease-in-out infinite;
}

.animate-pulse:nth-child(3n) {
  animation: wiggle 4s ease-in-out infinite;
}
</style>
