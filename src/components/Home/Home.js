import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Card from '../Card/Card'
import './Home.css'

const Home = (props) => {

    let [randomRecipe, setRandomRecipe] = useState({})
    console.log("home", props)
    const randomApi = () => {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(recipe => {
                setRandomRecipe(recipe.meals[0])
        })
    }

    useEffect(() => {
        randomApi()
    }, [])
    
console.log(randomRecipe)
    let randomRecipeRender = () => {
        return(
            <>
                <Card 
                name={randomRecipe.strMeal}
                image={randomRecipe.strMealThumb}
                handleClick={() => props.handleFaveClick(randomRecipe)}
                />
            </>
        )
    }
    

    return (
        <div className='home'>
            <div className='random'>
                {randomRecipe ? randomRecipeRender() : ''}
                <Link to='/browse'>
                    <h2>BROWSE</h2>
                </Link>
            </div>
            <div className='image-container'>
                <div className='column'>
                    <img className='home-img' src='https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1335&q=80'/>
                    <img className='home-img' src='https://images.unsplash.com/photo-1510130387422-82bed34b37e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'/>
                </div>
                <div className='column'>
                    <img className='home-img' src='https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'/>
                    <img className='home-img' src='https://images.unsplash.com/photo-1540914124281-342587941389?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80'/>
                </div>
                <div className='column'>
                <img className='home-img' src='https://images.unsplash.com/photo-1592838871524-ae7955366704?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'/>
                    <img className='home-img' src='https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'/>
                </div>
            </div>
        </div>
    )

}

export default Home