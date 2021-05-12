import "../styleSheets/App.scss";
import { Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import MainPage from "./MainPage";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/MainPage" component={MainPage} />
    </Switch>
  );
};

export default App;
