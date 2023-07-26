import React from "react";


function QuestionItem({ question, onDelete, onUpdate }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function HandleDeleteClick () {
    onDelete(id);
  }

  function handleUpdateClick (e) {
    onUpdate(id, parseInt(e.target.value) )
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleUpdateClick}>{options}</select>
      </label>
      <button onClick={HandleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
