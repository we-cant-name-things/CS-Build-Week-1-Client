import React from "react";
import "./App.css";
import {Route} from "react-router-dom";
import Login from "./views/Login";
import Game from "./views/Game";
import PrivateRoute from "./auth/PrivateRoute";
import TheMap from './views/TheMap'

function App() {
  return (
    <div className="App">
      <Route exact path="/login" render={props => <Login {...props} />} />
      <PrivateRoute exact path="/" component={Game} />
      <Route exact path='/map' render={props => <TheMap {...props} />} />
    </div>
  );
}

export default App;
