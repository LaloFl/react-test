// React Router DOM
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Button from "components/Button";
import { HomeRouter } from "routers/home";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" render={(props) => <HomeRouter {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
