import React from 'react'

function QuizTable({question_title, sub_question}) {

  return (
    <div>
        <h1>{question_title}</h1>
        {sub_question.map((item) => (
            <div key={item.sub_question_id}>
            <p>{item.sub_question_title}</p>
            <p>{item.points}</p>
            </div>
        ))}
    </div>
  )
}

export default QuizTable