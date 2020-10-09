import React, {useState, useRef} from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Card from '../Card/Card'
import './Search.css'

const Search = (props) => {

    const [currentSelection, setCurrentSelection] = useState('Select')
    const [currentRecipeArr, setCurrentRecipeArr] = useState([])
    const [arrIsNull, setArrIsNull] = useState(false)
    const inputSearch = useRef()
    

    const handleClick = (e) => {
        console.log('change!', e.target.textContent)
        setCurrentSelection(e.target.textContent)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setArrIsNull(false)
        console.log('submit', inputSearch.current.value)
        handleSearch()
        inputSearch.current.value = ''
    }

    const handleSearch = () => {
        if (currentSelection === 'Ingredient'){
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputSearch.current.value}`)
            .then(res => res.json())
            .then(recipes => {
                console.log('recipeARR', recipes)
                setCurrentRecipeArr(recipes.meals)
                if(recipes.meals === null){
                    setArrIsNull(true)
                }
            })
        } else if (currentSelection === 'Recipe Name'){
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputSearch.current.value}`)
            .then(res => res.json())
            .then(recipes => {
                console.log('recipeARR', recipes)
                setCurrentRecipeArr(recipes.meals)
                if(recipes.meals === null){
                    setArrIsNull(true)
                }
            })
        } else if (currentSelection === 'First Letter'){
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${inputSearch.current.value}`)
            .then(res => res.json())
            .then(recipes => {
                console.log('recipeARR', recipes.meals)
                setCurrentRecipeArr(recipes.meals)
                if(recipes.meals === null){
                    setArrIsNull(true)
                }
            })
        }
    }
    
   let renderRecipes = []
    if (currentRecipeArr !== null) {
        renderRecipes = currentRecipeArr.map(recipe => {
            return <Card 
            name={recipe.strMeal}
            image={recipe.strMealThumb}
            handleClick={() => props.handleFaveClick(recipe)}
            // isFave={props.faveArr.includes(recipe) ? true : false}
            />
        })
    }    
    // const renderRecipes = currentRecipeArr.map(recipe => {
    //     return <Card 
    //     name={recipe.strMeal}
    //     image={recipe.strMealThumb}
    //     handleClick={() => props.handleFaveClick(recipe)}
    //     />
    // })
    
    

    return (
        <div className='search'>
            <h1>Search</h1>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <input placehoder='Search' ref={inputSearch}></input>   
                </form>    
                <DropdownButton id="dropdown-basic-button" title={currentSelection} variant='danger'>
                    <Dropdown.Item as='button' onClick={handleClick}>Ingredient</Dropdown.Item>
                    <Dropdown.Item as='button' onClick={handleClick}>Recipe Name</Dropdown.Item>
                    <Dropdown.Item as='button' onClick={handleClick}>First Letter</Dropdown.Item>
                </DropdownButton>
            </div>
            <div className='search-container'>
                {currentRecipeArr === null ? '' : renderRecipes}
            </div>
            {arrIsNull ? <p>Recipe not found!</p> : ''}
        </div>
    )
}

export default Search