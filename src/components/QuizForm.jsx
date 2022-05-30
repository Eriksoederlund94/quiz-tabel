import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

//Components
import Inputs from './Inputs';

//Data
import { quizData } from '../data/quizData';

// Icons
import { BsPlus, BsDash } from 'react-icons/bs';
import { v4 as randomId } from 'uuid';

function QuizForm({ setQuiz, quizTitle, setQuizTitle }) {
  // STATE
  const [inputFields, setInputFields] = useState([]);


const startBtnHandler = () => {
  setInputFields(quizData)
}

  const startFormHandler = () => {
    setQuiz(inputFields);
  };

  const addNewQuestionHandler = () => {
    setInputFields([
      ...inputFields,
      {
        question_id: randomId(),
        question_title: '',
        sub_question: [
          {
            sub_question_id: randomId(),
            sub_question_title: '',
            points: '',
          },
        ],
      },
    ]);
  };

  const removeQuestiondHandler = (index) => {
    let inputFieldsValue = [...inputFields];
    inputFieldsValue.splice(index, 1);
    setInputFields(inputFieldsValue);
  };


  const addFieldHandler = (id) => {
    const newItem = {
      sub_question_id: randomId(),
      sub_question_title: '',
      points: '',
    };

    setInputFields(
      inputFields.map((item) => {
        if (item.question_id === id) {
          return {
            ...item,
            sub_question: [...item.sub_question, newItem],
          };
        }
        return item;
      })
    );
  };

  const removeFieldHandler = (index, id) => {
    
    setInputFields(inputFields.map((item) => {
      if(item.question_id === id) {
        const removedSubField = item;
        removedSubField.sub_question.splice(index, 1);

      }
      return item;
    })
    ) 

  };

  const inputChangeHandler = (event, index) => {
    let inputValues = [...inputFields];
    inputValues[index][event.target.name] = event.target.value;

    setInputFields(inputValues);
  };

  return (
    <QuizFormWrapper>
      <div className='form-wrapper'>
        <div className='input-container'>
        <h1 className='title-header'>Make your quiz</h1>
        {inputFields.length === 0 ? <button className='start-btn' onClick={startBtnHandler}>Start</button> : null}
        {inputFields.length >= 1 ? <input className='quiz-title-input' type='text' placeholder='Quiz Name' value={quizTitle} onChange={(event) =>  setQuizTitle(event.target.value)} /> : null}
        </div>
        {inputFields &&
          inputFields.map((inputs, index) => (
            <div className='input-container' key={inputs.question_id}>
              <div className='question-container'>
                <input
                  type='text'
                  name='question_title'
                  placeholder='Question Number'
                  value={inputs.question_title}
                  onChange={(event) => inputChangeHandler(event, index)}
                />
                <div className='btn-container'>
                  <BsDash className='btn' onClick={() => removeQuestiondHandler(index)} />
                  <BsPlus className='btn' onClick={addNewQuestionHandler} />
                </div>
              </div>

              {inputs.sub_question.map((item, index) => (
                <div className='sub-question-container' key={index}>
                  <Inputs
                    {...item}
                    index={index}
                    inputFields={inputFields}
                    parentId={inputs.question_id}
                    setInputFields={setInputFields}
                  />
                  <div className='btn-container'>
                    <BsDash className='btn' onClick={() => removeFieldHandler(index, inputs.question_id)} />
                    <BsPlus className='btn' onClick={() => addFieldHandler(inputs.question_id)} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        {inputFields.length >= 1 ? <button className='create-btn' onClick={startFormHandler}>Create quiz table</button> : null}
      </div>
    </QuizFormWrapper>
  );
}

const QuizFormWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;


  input {
    all: unset;
    padding: 1rem 2rem;
    border: solid 2px #CCC;
  }

  .form-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 600px
  }

  .input-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    width: 600px;

    .question-container,
    .sub-question-container {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      margin-bottom: 1.5rem;
    }

    .sub-question-container{
      justify-content: space-between;

    }

    .btn {
      cursor: pointer;
    }
  }


  .quiz-title-input{
    width: 200px;
  }


  .start-btn,.create-btn {
    all: unset;
    padding: .8rem 3rem;
    background-color: #000;
    color: #FFF;
    cursor: pointer;
    border-radius: 6px;
    width: 120px;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export default QuizForm;
