import React, {useEffect, useState} from 'react'

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
            <div>{type.strCategory}</div>
        )
    })

    const renderArea= cuisine.map((type) => {
        return (
            <div>{type.strArea}</div>
        )
    })
    console.log('this is food', food)

    return(
        <>
            <div>{renderFood}</div>
            <div>{renderArea}</div>
        </>
    )
}

export default Browse