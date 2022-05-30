import React from 'react'
import styled from 'styled-components'

function QuizTable({question_title, sub_question}) {

  const point = 'poäng'


  return (
    <QuizTableWrapper>
        <h3>{question_title}</h3>
        {sub_question.map((item) => (
            <div className='question-point-container' key={item.sub_question_id}>
            <p>{item.sub_question_title}</p>
            <p>{item.points}p</p>
            </div>
        ))}
    </QuizTableWrapper>
  )
}

const QuizTableWrapper = styled.div `
  display: flex;
  border-top: none;
  width: 100%;

  h3 {
    padding-right: 20px;
    margin: 0;
    border-right: solid 1px #000;
    border-bottom: solid 1px #000;
    width: 120px;

  }

.question-point-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  border-right: solid 1px #000;
  border-bottom: solid 1px #000;
  height: 80px;

  .question-point-container:last-child{
   border: none;
  }
  

  p{
      margin: 0 0 0 2rem;
      padding-right: 20px;
      width: 100px;
    }

    p:last-child{
      padding-right: 20px;
    }
}

`

export default QuizTable