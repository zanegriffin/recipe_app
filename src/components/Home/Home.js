import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const Home = (props) => {

    let [randomRecipe, setRandomRecipe] = useState({})

    const randomApi = () => {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(recipe => {
                setRandomRecipe(recipe.meals[0])
        })
    }

    useEffect(() => {
        randomApi()
    }, [])
    
console.log(randomRecipe)
    let randomRecipeRender = () => {
        return(
            <>
                <img src={randomRecipe.strMealThumb}/>
                <h4>{randomRecipe.strMeal}</h4>
            </>
        )
    }
    

    return (
        <div>
            <Link to={'/recipe/' + randomRecipe.strMeal}>
                {randomRecipe ? randomRecipeRender() : ''}
            </Link>
            <h2>BROWSE</h2>
        </div>
    )

}

export default Home