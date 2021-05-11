import React from "react";
import "../styleSheets/layout/_landing.scss";
import { Link } from "react-router-dom";

class Landing extends React.Component {
  render() {
    return (
      <>
        <main className="main">
          <h1 className="main__title">Trividabo</h1>
          <p className="main__text">Welcome to trividabo number quiz</p>
          <Link to="/MainPage" className="main__button" title="Start">
            Start
          </Link>
        </main>
      </>
    );
  }
}

export default Landing;
