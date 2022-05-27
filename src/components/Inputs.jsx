import React from 'react'


function Inputs({sub_question_title, points}) {
  return (
    <>
    <input type='text' value={sub_question_title}/>
    <input type='number' value={points}/>
    </>
  )
}

export default Inputs