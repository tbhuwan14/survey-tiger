import logo from "./logo.PNG";
import "./App.css";
import { Button } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateSurvey from "./components/CreateSurvey";
import TakeSurvey from "./components/TakeSurvey";
import Publish from "./components/Publish";
import { useState } from "react";

function App() {
  const [finalData, setFinalData] = useState([]);
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>
        <Switch>
          <Route
            path="/create"
            render={(props) => (
              <CreateSurvey
                setFinalData={setFinalData}
                finalData={finalData}
                {...props}
              />
            )}
          />

          <Route path="/take" component={TakeSurvey}></Route>
          <Route
            path="/publish"
            render={(props) => (
              <Publish
                setFinalData={setFinalData}
                finalData={finalData}
                {...props}
              />
            )}
          />

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
