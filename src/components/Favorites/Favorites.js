import React from 'react'
import Card from '../Card/Card'
import './Favorites.css'

const Favorites = (props) => {
    console.log('favArr', props.faveArr)
    let faveArr = props.faveArr

    let renderFave = faveArr.map(recipe => {
        return (
            <Card
            name={recipe.strMeal}
            image={recipe.strMealThumb}
            handleClick={() => props.handleFaveClick(recipe)}
            isFave={true}
            />
        )
    })

    return(
        <>
        <div className='favorites'>
            <h1>Favorites</h1>
            <div className='fav-container'>
                {faveArr ? renderFave : ''}
            </div>
        </div>
        </>
    )
}

export default Favorites