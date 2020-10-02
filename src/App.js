import React, {useState} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import './App.css';
import Home from './components/Home/Home'
import Recipe from './components/Recipe/Recipe'

function App() {

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><span>M</span>UNCH</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="/browse">Browse</a>
            <a className="nav-item nav-link" href="/favorites">Favorites</a>
            <a className="nav-item nav-link" href="#">Search</a>
            <a className="nav-item nav-link" href="#">About</a>
          </div>
        </div>
      </nav>
      <Router>
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/recipe/:name/' render={ (routerProps) => <Recipe {...routerProps}/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
