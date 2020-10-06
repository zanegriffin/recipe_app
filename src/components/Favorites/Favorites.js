import React from 'react'
import Card from '../Card/Card'

const Favorites = (props) => {
    console.log('favArr', props.faveArr)
    let faveArr = props.faveArr

    let renderFave = faveArr.map(recipe => {
        return (
            <Card
            name={recipe.strMeal}
            image={recipe.strMealThumb}
            handleClick={() => props.handleFaveClick(recipe)}
            />
        )
    })

    return(
        <>
        {faveArr ? renderFave : ''}
        </>
    )
}

export default Favorites