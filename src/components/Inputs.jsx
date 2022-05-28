import React from 'react';

function Inputs({ index, sub_question_title, points, inputFields, parentId, setInputFields }) {

  const subInputChangeHandler = (event, index, id) => {
    let inputValues = inputFields.map((item) => {
      if (item.question_id === id) {

        const renameMeLaterErik = item;
        renameMeLaterErik.sub_question[index][event.target.name] = event.target.value;

        return renameMeLaterErik
      }
      return item;
    });

    setInputFields(inputValues);
  };

  return (
    <>
      <input
        type='text'
        value={sub_question_title}
        name='sub_question_title'
        onChange={(event) => subInputChangeHandler(event, index, parentId)}
      />
      <input
        type='number'
        value={points}
        name='points'
        onChange={(event) => subInputChangeHandler(event, index, parentId)}
      />
    </>
  );
}

export default Inputs;
