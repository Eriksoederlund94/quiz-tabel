import React from 'react';

function Inputs({ index, sub_question_title, points, inputFields, parentId, setInputFields }) {

  const subInputChangeHandler = (event, index, id) => {
    let inputValues = inputFields.map((item) => {
      if (item.question_id === id) {

        const changedSubInputValue = item;
        changedSubInputValue.sub_question[index][event.target.name] = event.target.value;

        return changedSubInputValue
      }
      return item;
    });

    setInputFields(inputValues);
  };

  return (
    <>
      <input
        type='text'
        placeholder='Question'
        value={sub_question_title}
        name='sub_question_title'
        onChange={(event) => subInputChangeHandler(event, index, parentId)}
      />
      <input
        type='number'
        placeholder='Points'
        value={points}
        name='points'
        onChange={(event) => subInputChangeHandler(event, index, parentId)}
      />
    </>
  );
}


export default Inputs;
