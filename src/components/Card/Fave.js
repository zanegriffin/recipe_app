import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'

const Fave = (props) => {
    // console.log('fave', props)
   
    const handleClick = (event) => {
        props.handleFaveClick()
        
    }

    return (
        <>
            {props.isFave === false ? <FontAwesomeIcon icon={faStar} size='2x' color='red' onClick={handleClick} className='fave'/> : <FontAwesomeIcon icon={faStarRegular} size='2x' color='red' onClick={handleClick} className='fave'/>}
        </>
    )

}

export default Fave