import React, {useState, createContext} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import './App.css';
import Browse from './components/Browse/Browse';
import Home from './components/Home/Home'
import Recipe from './components/Recipe/Recipe'
import BrowseList from './components/Browse/BrowseList'
import BrowseList2 from './components/Browse/BrowseList2'
import About from './components/About/About'
import Favorites from './components/Favorites/Favorites'
import Search from './components/Search/Search'
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
      alert(`Removed ${recipe.strMeal} from Favorites!`)
      // return console.log('favorites', favoritesArr)
    } else {
      setFavoritesArr([...favoritesArr, recipe])
      alert(`Added ${recipe.strMeal} to Favorites!`)
      // console.log('favorites', favoritesArr)
    }
    
  }
  

  return (
    <div className="App">
      <Navbar  expand='lg' className='recipe-nav'>
        <Navbar.Brand href="/" className='brand' style={{color: 'white'}}><span>M</span>UNCH</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" style={{color: 'white'}}>Home</Nav.Link>
            <Nav.Link as={Link} to="/browse" style={{color: 'white'}}>Browse</Nav.Link>
            <Nav.Link as={Link} to="/favorites" style={{color: 'white'}}>Favorites</Nav.Link>
            <Nav.Link as={Link} to="/search" style={{color: 'white'}}>Search</Nav.Link>
            <Nav.Link as={Link} to="/about" style={{color: 'white'}}>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
   
      <Switch>
        <Route exact path='/'><Home handleFaveClick={handleFaveClick} faveArr={favoritesArr}/></Route>
        <Route exact path='/browse'><Browse /></Route>
        <Route exact path='/favorites'><Favorites faveArr={favoritesArr} handleFaveClick={handleFaveClick}/></Route>
        <Route path='/recipe/:name/' render={ (routerProps) => <Recipe {...routerProps}/>}/>
        <Route path='/browse/browse-list/:category/' render ={(routerProps => <BrowseList {...routerProps} handleFaveClick={handleFaveClick} faveArr={favoritesArr}/>)}/>
        <Route path='/browse/browse-list2/:category/' render ={(routerProps => <BrowseList2 {...routerProps} handleFaveClick={handleFaveClick} faveArr={favoritesArr}/>)}/>
        <Route path='/search'><Search handleFaveClick={handleFaveClick} faveArr={favoritesArr}/></Route>
        <Route path='/about'><About/></Route>
      </Switch>
    </div>
  );
}

export default App;
