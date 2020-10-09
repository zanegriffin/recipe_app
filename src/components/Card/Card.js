import React from 'react'
import Fave from './Fave'
import {Link} from 'react-router-dom'
import './Card.css'

const Card = (props) => {
    console.log('card recipes', props)

    return(
        <>
            <div className='recipe-card'>
                <Fave handleFaveClick={props.handleClick} isFave={props.isFave}/>
                <Link to={'/recipe/' + props.name} style={{textDecoration: 'none', color: 'white'}}>
                    <img src={props.image}/>
                    <h6>{props.name}</h6>
                </Link>
            </div>
        </>
    )
}

export default Card