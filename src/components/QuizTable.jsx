import React from 'react'
import styled from 'styled-components'

function QuizTable({question_title, sub_question}) {

  const point = 'poäng'


  return (
    <QuizTableWrapper>
        <h1>{question_title}</h1>
        {sub_question.map((item) => (
            <div className='question-point-container' key={item.sub_question_id}>
            <p>{item.sub_question_title}</p>
            <p>{item.points}</p>
            </div>
        ))}
    </QuizTableWrapper>
  )
}

const QuizTableWrapper = styled.div `

.question-point-container {
  display: flex;

  p {
    margin: 20px 10px 0 0;  }
}

`

export default QuizTable