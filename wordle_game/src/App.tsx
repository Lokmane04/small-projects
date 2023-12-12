import { useEffect, useState } from "react";
import Row from "./components/Row";
import Timer from "./components/Timer";
import TopBar from "./components/TopBar";
import { availableWords } from "./data/dictionary.js";

function App() {
  const [solution, setsolution] = useState("hello");
  const [guessedWords, setGuessedWords] = useState<string[]>(
    Array(6).fill(null)
  );

  // useEffect(() => {}, []);
  useEffect(() => {
    // picking a random word from the wordlist coming from dictionary.js
    const word =
      availableWords[Math.ceil(Math.random() * (availableWords.length - 1))];
    // storing the word inside a state
    setsolution(word);
  }, []);
  return (
    <div className="board">
      <TopBar />
      {["aaaaa", "aaaaa", "aaaaa", "aaaaa", "aaaaa", "aaaaa"].map(
        (guess, i) => (
          <Row guess={guess ?? ""} key={i} />
        )
      )}
      <Timer />
    </div>
  );
}

export default App;
