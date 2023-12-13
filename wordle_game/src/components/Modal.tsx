import "../styles/modal.css";
const Modal = ({
  gameOver,
  solution,
}: {
  gameOver: boolean;
  solution: string;
}) => {
  const refreshPage = () => {
    setTimeout(() => {
      location.reload();
    }, 3000);
  };
  return (
    <>
      {gameOver ? (
        <a className="btn" href="#open-modal">
          👋 Congrats
        </a>
      ) : (
        <a className="btn" href="#open-modal" onClick={refreshPage}>
          Reveal the word
        </a>
      )}
      <div id="open-modal" className="modal-window">
        <div>
          {gameOver && (
            <a href="#" title="Close" className="modal-close">
              Close
            </a>
          )}
          {/* button that restart the page once you click it instead of setTimeout */}
          <div>
            {gameOver ? <h1>Congrats 🥳🥳</h1> : <h1>You lost 🥲🥲</h1>}
            <p>the word was {solution} </p>

            <p>
              The game will restart,
              <br /> Good luck next time 😊😊
            </p>
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
