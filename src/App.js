import React from 'react';
import './App.css';
import Home from './components/Home/Home'

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
            <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="#">Browse</a>
            <a className="nav-item nav-link" href="#">Favorites</a>
            <a className="nav-item nav-link" href="#">Search</a>
            <a className="nav-item nav-link" href="#">About</a>
          </div>
        </div>
      </nav>
      <Home />
    </div>
  );
}

export default App;
