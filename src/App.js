// React Router DOM
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Button from "components/Button";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Button text="Soy el boton del home" />}
          />
          <Route
            exact
            path="/fabian"
            component={() => <Button text="Soy el boton del fabo" />}
          />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
