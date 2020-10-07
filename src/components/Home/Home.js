import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'

const Home = (props) => {

    let [randomRecipe, setRandomRecipe] = useState({})
    console.log("home", props)
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
                <Card 
                name={randomRecipe.strMeal}
                image={randomRecipe.strMealThumb}
                handleClick={() => props.handleFaveClick(randomRecipe)}
                />
            </>
        )
    }
    

    return (
        <div>
            {randomRecipe ? randomRecipeRender() : ''}
            <h2>BROWSE</h2>
        </div>
    )

}

export default Home