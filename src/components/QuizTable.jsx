import React from 'react'
import styled from 'styled-components'

function QuizTable({question_title, sub_question}) {


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
  flex-direction: row;
  align-items: flex-start;
  border-right: solid 1px #000;
  border-bottom: solid 1px #000;
  border-top: solid 1px #000;
  height: 100px;
  
  p{
      margin: 0 0 0 6px;
      padding-right: 20px;
      width: 50px;  
    }

    p:last-child{
     
    }
}

`

export default QuizTable