export const useAuth = () => {
  const { t } = useI18n()
  
  // Questions array with multiple answers and localization keys
  const questions = [
    {
      questionKey: "auth.questions.bride_name",
      answers: ["sonia", "sónia", "sonia", "sónia"]
    },
    {
      questionKey: "auth.questions.groom_name", 
      answers: ["luis", "luís", "luis", "luís"]
    },
    {
      questionKey: "auth.questions.wedding_date",
      answers: ["23 maio 2026", "23 de maio de 2026", "23/05/2026", "maio 23 2026", "23 may 2026", "may 23 2026", "23/05/2026"]
    },
    {
      questionKey: "auth.questions.wedding_location",
      answers: ["alenquer", "alenquer", "alenquer"]
    },
    {
      questionKey: "auth.questions.church_name",
      answers: ["igreja de são pedro", "igreja matriz de olhalvo", "são pedro", "olhalvo", "igreja são pedro", "matriz olhalvo"]
    },
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
    maxAge: 60 * 60 * 24 * 30 // 30 days
  })

  // Reactive authentication state
  const isAuthenticated = computed(() => authCookie.value === true)
  const isLoading = ref(false) // No loading needed since cookie is synchronous

  // Set authentication status
  const setAuthenticated = (value: boolean) => {
    authCookie.value = value
  }

  return {
    isAuthenticated,
    isLoading: readonly(isLoading),
    getRandomQuestion,
    validateAnswer,
    setAuthenticated
  }
}
