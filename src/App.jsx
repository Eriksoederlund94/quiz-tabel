import { useState } from 'react'
import styled from 'styled-components'

// Views
import QuizFormPage from './views/QuizFormPage'
import QuizTablePage from './views/QuizTablePage'

function App() {

  const [quiz, setQuiz] = useState(null) 

  console.log(quiz)

  return (
    <div className="App">
      {!quiz && <QuizFormPage setQuiz={setQuiz} /> }
      {quiz && <QuizTablePage quiz={quiz} /> }

     
    </div>
  )
}

const AppWrapper = styled.div`


`

export default App
