import React from 'react'
import './About.css'

const About = () => {

    return(
        <div className='about'>
            <h1>About Us</h1>
            <p>This is a project page of a student to utilize React hooks and best practices. Please feel free to explore. This site is purely front end so your favorites willl disappear after refresh unfortunately. Happy cooking! P.S. The newsletter is fake.</p>
            <br/>
            <h5>Sign up for our newsletter!</h5>
            <input placeholder='Email'></input>
        </div>
    )
}

export default About