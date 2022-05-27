import React from 'react'

//Compontents
import QuizForm from '../components/QuizForm'

function QuizFormPage({setQuiz}) {
  return (
   < QuizForm setQuiz={setQuiz} /> 
  )
}

export default QuizFormPage