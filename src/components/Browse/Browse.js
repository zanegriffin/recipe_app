import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './Browse.css'
import areaImages from './areaImages'
import foodImages from './foodImages'

const Browse = () => {

    let [food, setFood] = useState([])
    let [cuisine, setCuisine] = useState([])

    const setCategories = () => {
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
        .then(res => res.json())
        .then(food => setFood(food.meals))

        fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
        .then(res => res.json())
        .then(area => setCuisine(area.meals))
    }

    useEffect(() => {
        setCategories()
    }, [])

    const renderFood = food.map((type, index) => {
        return (
            <>
                <Link to={{pathname:'/browse/browse-list/' + type.strCategory, renderProps:{name:'category'}}} style={{textDecoration: 'none', color: 'white'}}>
                    <div className='food' style={{backgroundImage: `url(${foodImages[index].image})`}}>
                        <div>
                            {type.strCategory}
                        </div>
                    </div>
                </Link>
            </>
        )
    })

    const renderArea= cuisine.map((type, index) => {
        return (
            <Link to={{pathname:'/browse/browse-list2/' + type.strArea, renderProps:{name:'area'}}} style={{textDecoration: 'none', color: 'white'}}>
            <div className='area' style={{backgroundImage: `url(${areaImages[index].image})`}}>
                <div>
                    {type.strArea}
                </div>
            </div>
            </Link>
        )
    })
    console.log('this is food', cuisine)

    return(
        <>
        <div className='browse'>
            <h1>Browse</h1>
            <div className='browse-container'>
                {renderFood}
                {renderArea}
            </div>
        </div>
        </>
    )
}

export default Browse