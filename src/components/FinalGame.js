import "../styleSheets/layout/_finalGame.scss";

const FinalGame = (props) => {
  return (
    <>
      <button
        className="playAgainBtn"
        type="button"
        onClick={props.handleReset}
      >
        Play Again
      </button>
    </>
  );
};

export default FinalGame;
