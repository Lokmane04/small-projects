import "../styles/wordle_game_layout.css";
import { boxClasses } from "../styles/boxClasses";
import { ReactNode } from "react";
const WORD_LENGTH = 5;
const Row = ({
  guess,
  finalGuess,
  solution,
}: {
  guess: string;
  finalGuess: boolean;
  solution: string;
}) => {
  const words: ReactNode[] = [];

  for (let i = 0; i < WORD_LENGTH; i++) {
    const letter: string = guess[i];

    let className = "";

    if (finalGuess) {
      console.log(className, solution);
      if (letter === solution[i]) {
        className = boxClasses.correct;
      } else if (solution.includes(letter)) {
        className = boxClasses.include;
      } else {
        className = boxClasses.incorrect;
      }
    }
    console.log(className);
    words.push(
      <div key={i} className={`${className} box`}>
        <span className="text_box">{letter}</span>
      </div>
    );
  }
  return <div className="row">{words}</div>;
};

export default Row;
