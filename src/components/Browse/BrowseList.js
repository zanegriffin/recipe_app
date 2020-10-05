import React, {useState} from 'react'
import {Link } from 'react-router-dom'
import Card from '../Card/Card'

const BrowseList = (props) => {

    const [currentCategory, setCurrentCategory] = useState({})
    let recipes = currentCategory.meals
    let recipeArr = []

    console.log('curent', props)
    const type = props.match.params.category
    const category = () => {
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${type}`)
            .then( res => res.json())
            .then( category => setCurrentCategory(category))
    }
    
    React.useEffect(() => {
        category()
    },[])

    if(recipes){
        recipeArr = recipes.map(food => {
           return( 
            <Link to={'/recipe/' + food.strMeal}>
                <Card 
                name={food.strMeal}
                image={food.strMealThumb}
                />
            </Link>
           )
        })
    }

    return (
    <div>{recipeArr}</div>
    )
}

export default BrowseList