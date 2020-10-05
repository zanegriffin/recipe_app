import React from 'react'

const Card = (props) => {
    console.log('card recipes', props)

    return(
        <>
        <img src={props.image}/>
        <h3>{props.name}</h3>
        </>
    )
}

export default Card