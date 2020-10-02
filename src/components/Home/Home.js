import React, { useEffect } from 'react'

const Home = () => {

    let randomRecipe = () =>{
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(recipe => {
            return(
                <div>
                    <img src={recipe.meals[0].strSource}></img>
                    <h3>{recipe.meals[0].strMeal}</h3>
                </div>
            )
        })
    }

    let randomRecipeRender = () => {
        
    }
    

    return (
        <div>
            {randomRecipeRender}
            <h2>BROWSE</h2>
        </div>
    )

}

export default Home