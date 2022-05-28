import React from 'react'
import styled from 'styled-components'

//Components
import QuizTable from '../components/QuizTable'

function QuizTablePage({quiz, quizTitle}) {

  console.log(quiz)
  return (
    <QuizTablePageWrapper>
      <h1>{quizTitle}</h1>
      {quiz.map((item, index) => (
        < QuizTable key={item.question_id} {...item}/>
      ))}
    </QuizTablePageWrapper>
  )
}

const QuizTablePageWrapper = styled.div ``

export default QuizTablePage