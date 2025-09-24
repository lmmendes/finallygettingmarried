export const useAuth = () => {
  const { t } = useI18n()
  
  // Questions array with multiple answers and localization keys
  const questions = [
    {
        questionKey: "auth.questions.cat_name",
        answers: ["atum", "tuna"]
    }
  ]

  // Get random question
  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length)
    const question = questions[randomIndex]
    if (!question) {
      throw new Error('No question found')
    }
    return {
      question: t(question.questionKey),
      answers: question.answers
    }
  }

  // Validate answer against multiple possible answers
  const validateAnswer = (userAnswer: string, correctAnswers: string[]): boolean => {
    const normalizedUserAnswer = userAnswer.trim().toLowerCase()
    return correctAnswers.some(answer => {
      const normalizedCorrectAnswer = answer.trim().toLowerCase()
      return normalizedUserAnswer === normalizedCorrectAnswer
    })
  }

  // Get authentication cookie
  const authCookie = useCookie('wedding-auth', { 
    default: () => false,
    maxAge: 60 * 60 * 24 * 30, // 30 days
    secure: true,
    sameSite: 'strict'
  })

  // Reactive authentication state
  const isAuthenticated = computed(() => authCookie.value === true)
  const isInitialized = ref(false)
  
  // Initialize on client side with a small delay to prevent flash
  if (process.client) {
    onMounted(() => {
      // Add a small delay to ensure smooth loading
      setTimeout(() => {
        isInitialized.value = true
      }, 100)
    })
  } else {
    // On server side, consider it initialized
    isInitialized.value = true
  }

  // Set authentication status
  const setAuthenticated = (value: boolean) => {
    authCookie.value = value
  }

  return {
    isAuthenticated,
    isInitialized: readonly(isInitialized),
    getRandomQuestion,
    validateAnswer,
    setAuthenticated
  }
}
