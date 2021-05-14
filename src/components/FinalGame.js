import "../styleSheets/layout/_finalGame.scss";

const FinalGame = (props) => {
  return (
    <>
      <div className="resultList">{props.handleResults()}</div>
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
