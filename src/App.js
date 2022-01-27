import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Button from 'components/Button';

function App() {
  return (
    <div className="App">
      <router> 
        <Switch>
          <route>
            exact 
            path = "/"
           
          </route>
        </Switch>
      </router>
      <Button text="soy un botón"></Button>
    </div>
  );
}

export default App;
