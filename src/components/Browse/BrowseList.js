import React, {useState} from 'react'
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
                <Card 
                name={food.strMeal}
                image={food.strMealThumb}
                handleClick={() => props.handleFaveClick(food)}
                isFave={props.faveArr.includes(food) ? true : false}
                />
           )
        })
    }

    return (
    <div className='browse-list-container'>{recipeArr}</div>
    )
}

export default BrowseList