import "../styles/wordle_game_layout.css";

const WORD_LENGTH = 5;

const Row = ({ guess }: { guess: string }) => {
  const words: any[] = [];
  for (let i = 0; i <= WORD_LENGTH; i++) {
    const letter: string = guess[i];
    words.push(
      <div key={i} className="box">
        <span className="text_box">{letter}</span>
      </div>
    );
  }
  return <div className="row">{words}</div>;
};

export default Row;
