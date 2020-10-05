import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

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

    const renderFood = food.map((type) => {
        return (
            <>
                <Link to={{pathname:'/browse/browse-list/' + type.strCategory, renderProps:{name:'category'}}} >
                    <div>{type.strCategory}</div>
                </Link>
            </>
        )
    })

    const renderArea= cuisine.map((type) => {
        return (
            <Link to={{pathname:'/browse/browse-list2/' + type.strArea, renderProps:{name:'area'}}} >
            <div>{type.strArea}</div>
            </Link>
        )
    })
    console.log('this is food', cuisine)

    return(
        <>
            <div>{renderFood}</div>
            <div>{renderArea}</div>
        </>
    )
}

export default Browse