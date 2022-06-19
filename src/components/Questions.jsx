import { useState,useEffect } from "react";
import "./question.css";

export default function Questions({
  data,
  setTimeOut,
  questionNum,
  setQuestionNum}
  ) {
  const [question, setQuestion] = useState(null);
  useEffect(() =>{
    setQuestion(data[questionNum - 1])
  },[data,questionNum])
  return (
    <div className="question-answer">
        <div className="question">{question?.question}</div>
        <div className="answers">
          {question?.answer.map((a) => (
            <div className="answer ">{a.answer}</div>
          ))}
        
        </div>
    </div>
  )
}
