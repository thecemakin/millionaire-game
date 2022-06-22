import { useState, useEffect } from "react";
import "./question.css";
import useSound from "use-sound";
import src_sounds_correct from "../assets/sounds/src_sounds_correct.wav";
import src_sounds_play from "../assets/sounds/src_sounds_play.wav";
import src_sounds_wait from "../assets/sounds/src_sounds_wait.wav";
import src_sounds_wrong from "../assets/sounds/src_sounds_wrong.wav";

export default function Questions({
  data,
  setStop,
  questionNum,
  setQuestionNum
}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassname] = useState("answer");

  const [play] = useSound(src_sounds_play);
  const [correct] = useSound(src_sounds_correct);
  const [wrong] = useSound(src_sounds_wrong);
  const [wait] = useSound(src_sounds_wait);

  useEffect(() => {
    play();
  }, [play])

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback()
    }, duration)
  }

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassname("answer active");
    delay(3000, () => setClassname(a.correct ? "answer correct" : "answer wrong"));
    delay(5000, () => {
      if (a.correct) {
        correct();
        delay(1000, () => {
          setQuestionNum((prev) => prev + 1);
          setSelectedAnswer(null);
        });
      } else {
        wrong();
        delay(1000, () => {
          setStop(true);
        });

      }
    });
  };
  useEffect(() => {
    setQuestion(data[questionNum - 1])
  }, [data, questionNum])
  return (
    <div className="question-answer">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div className={selectedAnswer === a ? className : "answer"} onClick={() => handleClick(a)}>{a.answer}</div>
        ))}
      </div>
    </div>
  )
}
