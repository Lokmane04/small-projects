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
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const handleTyping = (event: any) => {
      if (gameOver) return;
      if (event.key === "Backspace") {
        setCurrentGuess(currentGuess.slice(0, -1));
        return;
      }
      if (event.key === "Enter") {
        if (currentGuess.length !== 5) return;
        if (solution === currentGuess) setGameOver(true);
      }
      setCurrentGuess((prev) => prev + event.key);
    };
    if (currentGuess.length === 5) return;
    window.addEventListener("keydown", handleTyping);
    return () => window.removeEventListener("keydown", handleTyping);
  }, [currentGuess, gameOver, solution]);
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
      {guessedWords.map((guess, i) => {
        const isCurrent = i === guessedWords.findIndex((word) => word == null);
        return (
          <Row
            finalGuess={!isCurrent}
            guess={isCurrent ? currentGuess : guess ?? ""}
            key={i}
          />
        );
      })}
      <Timer />
    </div>
  );
}

export default App;
