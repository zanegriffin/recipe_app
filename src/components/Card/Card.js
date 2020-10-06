import React from 'react'
import Fave from './Fave'
import {Link} from 'react-router-dom'

const Card = (props) => {
    // console.log('card recipes', props)

    return(
        <>
            <Link to={'/recipe/' + props.name}>
                <img src={props.image}/>
                <h3>{props.name}</h3>
            </Link>
            <Fave handleFaveClick={props.handleClick}/>
        </>
    )
}

export default Card