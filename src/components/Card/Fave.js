import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Fave = (props) => {
    // console.log('fave', props)

    const handleClick = (event) => {
        props.handleFaveClick()
    }

    return (
        <>
            <FontAwesomeIcon icon={faStar} size='2x' color='yellow' onClick={handleClick}/>
        </>
    )

}

export default Fave