import React from 'react';

function Inputs({ subIndex, sub_question_title, points, inputFields, parentId }) {
  console.log(parentId);

  const subInputChangeHandler = (event, subIndex, id) => {
    let inputValues = inputFields.map((item, index) => {
      if (item.question_id === id) {
        return {
          //let inputValues = [...inputFields];
        };
      }
      return item;
    });

    //inputValues[index].sub_question[index][event.target.name] = event.target.value;

    //console.log(id);
    //console.log(subIndex);

    console.log(inputValues);

    //setInputFields(inputValues);
  };

  return (
    <>
      <input
        type='text'
        value={sub_question_title}
        name='sub_question_title'
        onChange={(event) => subInputChangeHandler(event, subIndex, parentId)}
      />
      <input
        type='number'
        value={points}
        name='points'
        onChange={(event) => subInputChangeHandler(event, subIndex, parentId)}
      />
    </>
  );
}

export default Inputs;
