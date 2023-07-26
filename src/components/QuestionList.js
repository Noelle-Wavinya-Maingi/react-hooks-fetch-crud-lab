import { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([])

  function FetchData() {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((items) => 
      setQuestions(items))
     
  }
  useEffect(() => {
    FetchData();
  }, []);

  console.log(questions);
 
  function handleDelete (id) {
    fetch (`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
      headers: {"Content-Type" : "application/json"}
    })
    .then((res) => res.json())
    .then(() => {
      const deleteQuestions = questions.filter((item) => item.id !== id)
      setQuestions(deleteQuestions)
    })
  }

  function handleUpdate (id, correctIndex) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({
        correctIndex
      }),
    })
    .then((res) => res.json())
    .then((updateQuestions) => 
    {
      const updateQuestion = questions.map((item) => {
        if(item.id !== updateQuestions.id)
          return item
        
        return updateQuestions;
      })
      setQuestions(updateQuestion)
    }
     )
  }
  
const displayQues = questions.map((question) => 
  <QuestionItem key={question.id} question={question} onDelete={handleDelete} onUpdate={handleUpdate}/>)
  
console.log(displayQues);
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
       {displayQues}
      </ul>
    </section>
  );
}

export default QuestionList;
