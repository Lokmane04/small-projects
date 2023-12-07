import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [rightWord, setRightWord] = useState<string>("");
  const [guessedWords, setGuessedWords] = useState<string[]>(
    Array(6).fill(null)
  );
  useEffect(() => {
    const useFetchWords = async () => {
      const fetchedWords = await fetch(
        "https://api.frontendexpert.io/api/fe/wordle-words"
      );
      const response = await fetchedWords.json();
      const word = response[Math.ceil(Math.random() * (response.length() - 1))];
      setRightWord(word);
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useFetchWords();
  });

  return <></>;
}

export default App;
