import React from 'react'

//Compontents
import QuizForm from '../components/QuizForm'

function QuizFormPage({setQuiz, quizTitle, setQuizTitle }) {
  return (
   < QuizForm setQuiz={setQuiz} quizTitle={quizTitle} setQuizTitle={setQuizTitle} /> 
  )
}

export default QuizFormPage