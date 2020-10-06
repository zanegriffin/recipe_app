import React, {useState} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import './App.css';
import Browse from './components/Browse/Browse';
import Home from './components/Home/Home'
import Recipe from './components/Recipe/Recipe'
import BrowseList from './components/Browse/BrowseList'
import BrowseList2 from './components/Browse/BrowseList2'
import About from './components/About/About'

function App() {

  const [favoritesArr, setFavoritesArr] = useState([])
  
  const handleFaveClick = (recipe) => {
    console.log('Click!', recipe)
    if(favoritesArr.includes(recipe)){
      return console.log('favorites', favoritesArr)
    } else {
      setFavoritesArr([...favoritesArr, recipe])
      console.log('favorites', favoritesArr)
    }
    
  }
  

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/"><span>M</span>UNCH</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="/browse">Browse</a>
            <a className="nav-item nav-link" href="/favorites">Favorites</a>
            <a className="nav-item nav-link" href="/search">Search</a>
            <a className="nav-item nav-link" href="/about">About</a>
          </div>
        </div>
      </nav>
      
        <Router>
          <Switch>
            <Route exact path='/'><Home handleFaveClick={handleFaveClick}/></Route>
            <Route exact path='/browse'><Browse /></Route>
            <Route path='/recipe/:name/' render={ (routerProps) => <Recipe {...routerProps}/>}/>
            <Route path='/browse/browse-list/:category/' render ={(routerProps => <BrowseList {...routerProps} handleFaveClick={handleFaveClick}/>)}/>
            <Route path='/browse/browse-list2/:category/' render ={(routerProps => <BrowseList2 {...routerProps} handleFaveClick={handleFaveClick}/>)}/>
            <Route path='/about'><About/></Route>
          </Switch>
        </Router>
      
    </div>
  );
}

export default App;
