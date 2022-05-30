import { useState } from 'react'

// Views
import QuizFormPage from './views/QuizFormPage'
import QuizTablePage from './views/QuizTablePage'

function App() {

  const [quiz, setQuiz] = useState(null)
  const [quizTitle, setQuizTitle] = useState('');

  return (
    <div className="App">
      {!quiz && <QuizFormPage setQuiz={setQuiz} quizTitle={quizTitle} setQuizTitle={setQuizTitle} /> }
      {quiz && <QuizTablePage quiz={quiz} quizTitle={quizTitle} /> }
    </div>
  )
}


export default App
