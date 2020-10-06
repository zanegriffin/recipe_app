import React, {useState} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import './App.css';
import Browse from './components/Browse/Browse';
import Home from './components/Home/Home'
import Recipe from './components/Recipe/Recipe'
import BrowseList from './components/Browse/BrowseList'
import BrowseList2 from './components/Browse/BrowseList2'
import About from './components/About/About'
import Favorites from './components/Favorites/Favorites'
import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'


function App() {

  const [favoritesArr, setFavoritesArr] = useState([])
  
  const handleFaveClick = (recipe) => {
    console.log('Click!', recipe)
    let newArr = [...favoritesArr]
    let recipeIndex = newArr.indexOf(recipe)
    if(favoritesArr.includes(recipe)){
      newArr.splice(recipeIndex, 1)
      setFavoritesArr(newArr)
      // return console.log('favorites', favoritesArr)
    } else {
      setFavoritesArr([...favoritesArr, recipe])
      // console.log('favorites', favoritesArr)
    }
    
  }
  

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">MUNCH</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/browse">Browse</Nav.Link>
        <Nav.Link as={Link} to="/favorites">Favorites</Nav.Link>
        <Nav.Link as={Link} to="/search">Search</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        </Nav>
      </Navbar>
      <br />
      <Switch>
        <Route exact path='/'><Home handleFaveClick={handleFaveClick}/></Route>
        <Route exact path='/browse'><Browse /></Route>
        <Route exact path='/favorites'><Favorites faveArr={favoritesArr} handleFaveClick={handleFaveClick}/></Route>
        <Route path='/recipe/:name/' render={ (routerProps) => <Recipe {...routerProps}/>}/>
        <Route path='/browse/browse-list/:category/' render ={(routerProps => <BrowseList {...routerProps} handleFaveClick={handleFaveClick}/>)}/>
        <Route path='/browse/browse-list2/:category/' render ={(routerProps => <BrowseList2 {...routerProps} handleFaveClick={handleFaveClick}/>)}/>
        <Route path='/about'><About/></Route>
      </Switch>
    </div>
  );
}

export default App;
