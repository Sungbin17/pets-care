import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Main from './pages/Main';
import Login from './pages/Auth/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
