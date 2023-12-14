import "../styles/how_to_play.css";
import Faq from "../assets/faq";
import WordFinder from "../assets/wordFinder";
const HowToPlay = () => {
  const wordExample = ["T", "A", "B", "L", "E"];
  const classNames = ["incorrect", "close", "incorrect", "close", "correct"];
  const openModal = () => {
    document.getElementById("myModal")!.style.display = "block";
  };
  const closeModal = () => {
    document.getElementById("myModal")!.style.display = "none";
  };
  // return <button className="tutoriel"></button>
  return (
    <div className="tutoriel">
      <button id="faqButton" onClick={openModal}>
        <Faq />
      </button>

      <div id="myModal" className="modal">
        <div className="modal-content">
          <h1>How to play</h1>
          <h4>
            You have to guess the hidden word in 6 tries and the color of the
            letters <br />
            changes to show how close you are.
            <br /> To start the game, just enter any word, for example:
          </h4>
          <div className="example">
            {wordExample.map((letter, i) => {
              let className = classNames[i];
              if (i === 4) {
                className += " last";
              }
              return (
                <div key={i} className={`${className} box`}>
                  <span className="text_box">{letter}</span>
                </div>
              );
            })}
          </div>
          <h4>
            T, B are not in the word <br />
            A, L are in the word but in the wrong place <br />E , is in the word
            and the right place
          </h4>
          <h4>You can find out more at :</h4>
          <div className="svg_container">
            <WordFinder />
          </div>
          <h4>a smart assistant for word search</h4>
          <button className="close_modal btn" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;
