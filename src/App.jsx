import { useState } from 'react'

// Views
import QuizFormPage from './views/QuizFormPage'
import QuizTablePage from './views/QuizTablePage'

function App() {

  const [quiz, setQuiz] = useState(null) 

  return (
    <div className="App">
      <QuizFormPage setQuiz={setQuiz} /> 
      {quiz && <QuizTablePage quiz={quiz} /> }

     
    </div>
  )
}

export default App
