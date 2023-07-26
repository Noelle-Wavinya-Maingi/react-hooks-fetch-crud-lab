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
 
  
const displayQues = questions.map((question) => 
  <QuestionItem key={question.id} question={question} />)
  
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
