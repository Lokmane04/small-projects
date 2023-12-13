import "../styles/modal.css";
const Modal = ({
  gameOver,
  solution,
}: {
  gameOver: boolean;
  solution: string;
}) => {
  return (
    <>
      {gameOver ? (
        <a className="btn" href="#open-modal">
          👋
        </a>
      ) : (
        <a className="btn" href="#open-modal">
          Reveal the word
        </a>
      )}
      <div id="open-modal" className="modal-window">
        <div>
          <a href="#" title="Close" className="modal-close">
            Close
          </a>

          <div>
            {gameOver ? <h1>Congrats 🥳🥳</h1> : <h1>You lost 🥲🥲</h1>}
            <p>the word was {solution} </p>
          </div>
          <div>
            <small>Check out 👇</small>
          </div>
          <a href="https://github.com/Lokmane04" target="_blank">
            My github profile
          </a>
        </div>
      </div>
    </>
  );
};

export default Modal;
