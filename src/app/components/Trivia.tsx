"use cient";
import React, { useState } from "react";
import { TriviaQuestion } from "../intefaces/trivia";
import he from "he";
interface Props {
  trivia: TriviaQuestion[];
}

const Trivia: React.FC<Props> = ({ trivia }) => {
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const handleOnClick = (answer: string) => {
    if (questionNumber < trivia.length - 1) {
      if (answer === trivia[questionNumber].correct_answer) {
        setScore((s) => s + 1);
      } else {
        setScore((s) => s - 1);
      }
      setQuestionNumber((q) => q + 1);
    }
  };

  const shufle = (array: string[]) => {
    let currentIndex = array.length;

    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const answers = shufle([
    ...trivia[questionNumber].incorrect_answers,
    trivia[questionNumber].correct_answer,
  ]);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Score: {score}</h1>
      <h1>{he.decode(trivia[questionNumber].question)}</h1>
      {answers.map((answer, index) => (
        <button
          className="cursor-pointer bg-amber-400 p-2"
          onClick={() => handleOnClick(answer)}
          key={index}
        >
          {he.decode(answer)}
        </button>
      ))}
    </div>
  );
};

export default Trivia;
