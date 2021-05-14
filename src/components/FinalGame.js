const FinalGame = (props) => {
  return (
    <>
      <button
        className="playAgain__btn"
        type="button"
        onClick={props.handleReset}
      >
        Play Again
      </button>
    </>
  );
};

export default FinalGame;
