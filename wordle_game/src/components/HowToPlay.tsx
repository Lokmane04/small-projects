import "../styles/how_to_play.css";
const HowToPlay = () => {
  const openModal = () => {
    document.getElementById("myModal")!.style.display = "block";
  };
  // return <button className="tutoriel"></button>
  return (
    <>
      <button id="faqButton" onClick={openModal}>
        FAQ
      </button>

      <div id="myModal" className="modal">
        <div className="modal-content">
          <p>Some text in the Modal..</p>
        </div>
      </div>
    </>
  );
};

export default HowToPlay;
