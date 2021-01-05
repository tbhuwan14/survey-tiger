import logo from "./logo.PNG";
import "./App.css";
import { Button } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateSurvey from "./components/CreateSurvey";
import TakeSurvey from "./components/TakeSurvey";

function App() {
  const finalData = [];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Router>
        <Switch>
          <Route path="/create">
            <CreateSurvey finalData={finalData} />
          </Route>
          <Route path="/take">
            <TakeSurvey />
          </Route>
          <Route path="/">
            <div>
              <Link to="/create">
                <Button className="btn-survey">Create Survey</Button>
              </Link>
              <Link to="/take">
                <Button className="btn-survey">Take Survey</Button>
              </Link>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
