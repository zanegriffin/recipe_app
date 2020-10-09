import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import './Recipe.css'

const Recipe = (props) => {
    //holds the current recipe selected pulled from the search by name api
    const [currentRecipe, setCurrentRecipe] = useState({})
    //search by name api
    let name = props.match.params.name
    const findRecipe = () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        .then(res => res.json())
        .then(recipe => {
            console.log('this is fetch', recipe)
            setCurrentRecipe(recipe.meals[0])
        })
    }

    useEffect(() => {
        findRecipe()
    }, [])

    const renderIngredients = () => {
        let valuesArr = Object.values(currentRecipe);
        let measurementsArr = []
        let ingredientsArr = []
        let materialsArr = []
        for (let i = 9; i <= 28 ; i++){
            if (valuesArr[i]){
                ingredientsArr.push(valuesArr[i])
            }
        }
        
        for (let i = 29; i <= 48 ; i++){
            if (valuesArr[i]){
                measurementsArr.push(valuesArr[i])
            }
        }

        for (let i = 0 ; i < ingredientsArr.length ; i++){
            materialsArr.push(measurementsArr[i] + ' ' +ingredientsArr[i])
        }
        console.log('measure', measurementsArr)
        console.log('ingredient', ingredientsArr)
        console.log('materials', materialsArr)

        return(
            materialsArr.map((ingredient) => {
                return (
                    <>
                    <li>{ingredient}</li>
                    </>
                )
            })
        )
       
    }

    console.log('this is recipe page props', props)
    return (
        <div className='recipe-page'>
            <div className='player-wrapper'>
                {currentRecipe ? <ReactPlayer url={currentRecipe.strYoutube} className='react-player' width='100%' height='100%'/> : <img src={currentRecipe.strMealThumb} alt={'food'}></img>}
            </div>
            <h1>{currentRecipe.strMeal}</h1>
            <h3>Cuisine: {currentRecipe.strArea}</h3>
            <br/>
            <ul>{renderIngredients()}</ul>
            <br/>
            <p>{currentRecipe.strInstructions}</p>

        </div>
    )
}

export default Recipe