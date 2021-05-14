const FinalGame = (props) => {
  const isGameOver = () => {
    return props.answersList.length >= 10;
  };

  // const handleEndOfGame = () => {
  //   if (isGameOver()) {
  //     props.handleReset();

  //     return <FinalGame handleReset={props.handleReset} />;
  //   }
  // };

  return (
    <>
      <div className="resultList">{props.handleResults()}</div>
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
