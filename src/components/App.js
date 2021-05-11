import "../styleSheets/App.scss";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">Hola mundo</div>;
      {/* <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </main> */}
    </>
  );
}

export default App;
