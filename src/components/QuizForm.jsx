import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

//Components
import Inputs from './Inputs';

// Icons
import { BsPlus, BsDash } from "react-icons/bs";
import { v4 as randomId } from 'uuid';



function QuizForm() {


    // STATE
    const [inputFields, setInputFields] = useState([
        {
            question: {
                question_id: 1,
                question_title: '',
                sub_question: [
                { sub_question_title: 'This is the title', points: 1 }
            ] 
            }
        }
    ])

    const startFormHandler = () => {
        console.log(inputFields)
    }
    

    const addNewQuestionHandler = () => {

        setInputFields([...inputFields,  {
            question: {
                question_id: randomId(),
                question_title: '',
                sub_question: [{
                    sub_question_title: '',
                    points: '',
                }]
            }
        }])
    }

    const addFieldHandler = (id) => {

    const clickedArr = inputFields.filter((items) => items.question.question_id === id)
    
    
    console.log(clickedArr)

        
    }

    const removeFieldHandler = () => {
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
            {inputFields && inputFields.map((inputs) => (
                <div className='input-container' key={inputs.question.question_id} >
                    <div className='question-container' >
                        <input type='text' name='question' value={inputs.question.question_title} placeholder='Question' onChange={event => inputChangeHandler(event)}/>
                        <div className='btn-container'>
                            <BsDash className='btn' onClick={() => removeFieldHandler(index)} /> <BsPlus className='btn' onClick={addNewQuestionHandler}/>
                        </div>
                    </div>
                    <div className='sub-question-container'>
                        {inputs.question.sub_question.map((item, index) =>
                        < Inputs key={index} {...item} />
                        )}
                         <div className='btn-container'>
                            <BsDash className='btn' onClick={() => removeFieldHandler()} /> <BsPlus className='btn' onClick={() => addFieldHandler(inputs.question.question_id)}/>
                        </div>
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