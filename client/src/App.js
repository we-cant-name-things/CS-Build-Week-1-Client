import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Login from './views/Login'
import Game from './views/Game'
import PrivateRoute from './auth/PrivateRoute'

function App() {
  return (
    <div className="App">
     <Route path='/login' component={Login} />

     {/* Will become a PrivateRoute once authenticated */}
     <Route exact path='/' component={Game} />
    </div>
  );
}

export default App;
