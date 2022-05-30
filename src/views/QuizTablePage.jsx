import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

//Components
import QuizTable from '../components/QuizTable'

function QuizTablePage({quiz, quizTitle}) {

  const [numberOfQuestions, setNumberOfQuestions] = useState(null);
  const [title, setTitle] = useState([]);

  const totalQuestions = () => {
    const questionNumberArray = quiz.map((item) => {
      return item.sub_question.length
    })

    const highestTotalQuestionNumber = Math.max(...questionNumberArray);

    setNumberOfQuestions(highestTotalQuestionNumber)
  }


  useEffect(() => {
    totalQuestions();

    let totalQuestionsArray = []

    for (let i = 0; i < numberOfQuestions; i++) {
      totalQuestionsArray.push(`Fråga ${i + 1}`);
    
    }

    setTitle(totalQuestionsArray)
  
  }, [numberOfQuestions])

  return (
    <QuizTablePageWrapper>
      <h1>{quizTitle}</h1>
      <div className='question-container'>
        {title.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      {quiz.map((item) => (
        < QuizTable key={item.question_id} {...item} />
      ))}
    </QuizTablePageWrapper>
  )
}

const QuizTablePageWrapper = styled.div `
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  flex-direction: column;

  // Make grid



  .question-container{
    display: flex;
    width: 400px;

    p{
      margin: 0 2rem;
    }
  }

`

export default QuizTablePage