import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

//Components
import QuizTable from '../components/QuizTable'

function QuizTablePage({quiz, quizTitle}) {

  const [numberOfQuestions, setNumberOfQuestions] = useState(null);
  const [totalPoints, setTotalPoints] = useState(null);
  const [title, setTitle] = useState([]);


  const totalQuestions = () => {
    const questionNumberArray = quiz.map((item) => {
      return item.sub_question.length
    })


    const highestTotalQuestionNumber = Math.max(...questionNumberArray);

    setNumberOfQuestions(highestTotalQuestionNumber)
  }


  const totalPointsHandler = () => {

    const totalQuizPoints = quiz.map((item) => {
      return item.sub_question.reduce((total, item) => {
        return total + parseInt(item.points);
      }, 0); 
    })



    const totalPointsResult = totalQuizPoints.reduce((a, b) => a + b, 0)

    setTotalPoints(totalPointsResult);
  }

  useEffect(() => {
    totalPointsHandler();
    totalQuestions();

    let totalQuestionsArray = []

    for (let i = 0; i < numberOfQuestions; i++) {
      totalQuestionsArray.push(`Fråga ${i + 1}`);
    
    }

    setTitle(totalQuestionsArray)
  
  }, [numberOfQuestions])

  return (
    <QuizTablePageWrapper>
      <div className='table-wrapper' >
        <div className='title-number-container' > 
          <h3>{quizTitle}</h3>
          <div className='question-container'>
            {title.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div> 
        <div className='question-point-wrapper' > 
        {quiz.map((item) => (
          < QuizTable key={item.question_id} {...item} />
        ))}
        </div> 
      </div>
      <p>Total Points: {totalPoints}</p>
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

  .table-wrapper{
    min-width: 200px
  }

  .question-point-wrapper{
    display: flex;
    flex-direction: column;
    border: solid 2px #000;
    border-top: none;
    
  }

  .title-number-container {
    display: flex;
    border: solid 2px #000;
    height: 40px;
  
    
    h3{
      margin: 0;
      padding-right: 20px;
      border-right: solid 1px #000;
      width: 120px;

    }
    
  }

  .question-container{
    display: flex;
  
  
    p{
      margin: 0 0 0 2rem;
      padding-right: 20px;
      border-right: solid 1px #000;
      width: 100px;
    }

    p:last-child{
      padding-right: 20px;
    }
  }

`

export default QuizTablePage