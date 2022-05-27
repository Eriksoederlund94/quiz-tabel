import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

//Components
import Inputs from './Inputs';

//Data
import { quizData } from '../data/quizData';

// Icons
import { BsPlus, BsDash } from "react-icons/bs";
import { v4 as randomId } from 'uuid';



function QuizForm({setQuiz}) {

    // STATE
    const [inputFields, setInputFields] = useState(quizData)

    const startFormHandler = () => {
        setQuiz(inputFields)
    }
    

    const addNewQuestionHandler = () => {

        setInputFields([...inputFields,  {
                question_id: randomId(),
                question_title: '',
                sub_question: [{
                    sub_question_title: '',
                    points: '',
                }]
        }])
    }

    const addFieldHandler = (id) => {

        const newItem = {
            sub_question_title: '',
            points: '',
        };

        setInputFields(inputFields.map((item) => {
            if(item.question_id === id){
                return {
                    ...item,
                    sub_question: [...item.sub_question, newItem]
                }
            }
            return item;
        }) )        
    }

    const removeFieldHandler = (index) => {
        let inputFieldsValue = [...inputFields];
        inputFieldsValue.splice(index, 1);
        setInputFields(inputFieldsValue)
    }


    const inputChangeHandler = ( event, index) => {
         let inputValues = [...inputFields];
         inputValues[index][event.target.name] = event.target.value;

    }

  return (
    <QuizFormWrapper>
        <div className='form-wrapper'>
            <h1>Make your quiz</h1>
            <input type='text' placeholder='Quiz Name' />
            {inputFields && inputFields.map((inputs, index) => (
                <div className='input-container' key={inputs.question_id} >
                    <div className='question-container' >
                        <input type='text' name='question' placeholder='Question' onChange={event => inputChangeHandler(event)}/>
                        <div className='btn-container'>
                            <BsDash className='btn' onClick={() => removeFieldHandler(index)} /> <BsPlus className='btn' onClick={addNewQuestionHandler}/>
                        </div>
                    </div>
                    <div className='sub-question-container'>
                        {inputs.sub_question.map((item, index) =>
                        <>
                        < Inputs key={index} {...item} />
                        <div className='btn-container'>
                            <BsDash className='btn' onClick={() => removeFieldHandler()} /> <BsPlus className='btn' onClick={() => addFieldHandler(inputs.question_id)}/>
                        </div>
                        </>
                        )} 

                    </div>
                </div>
            ))}
            <button onClick={startFormHandler}>Create quiz table</button>
        </div>
    </QuizFormWrapper>
  )
}

const QuizFormWrapper =  styled.div`
min-height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: #CCCCC;

.form-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.input-container{
    display: flex;
    flex-direction: column;
    padding: 2rem;



    .question-container,.sub-question-container{
        display: flex;
    }


    .btn{
       cursor: pointer; 
    }
}


`




export default QuizForm