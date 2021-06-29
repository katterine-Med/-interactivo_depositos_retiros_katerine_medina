
import './App.css';
import React  from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './pages/Home'
import LevelA from './pages/LevelA';
function App() {
  return (
    <Router>
      <div className="container-btns">
        <Switch>
          <Route path="/LevelA">
            <LevelA />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
