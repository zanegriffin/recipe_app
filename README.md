    ![cookbook](https://ballychohanrecipeblog.files.wordpress.com/2016/09/cookbook-clip1.gif)

## Project Description

This project is to demonstrate proficiency in React with Routers. The app will be a recipe explorer with search and browsing functions as well as a favorites list. The recipes will be populated with an API call.

## API

TheMealDB https://www.themealdb.com/api.php

    {
    "idCategory": "1",
    "strCategory": "Beef",
    "strCategoryThumb": "https://www.themealdb.com/images/category/beef.png",
    "strCategoryDescription": "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]"
    },
    {
    "strMeal": "Baingan Bharta",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/urtpqw1487341253.jpg",
    "idMeal": "52807"
    },
    {
    "idMeal": "52977",
    "strMeal": "Corba",
    "strDrinkAlternate": null,
    "strCategory": "Side",
    "strArea": "Turkish",
    "strInstructions": "Pick through your lentils for any foreign debris, rinse them 2 or 3 times, drain, and set aside.  Fair warning, this will probably turn your lentils into a solid block that you’ll have to break up later\r\nIn a large pot over medium-high heat, sauté the olive oil and the onion with a pinch of salt for about 3 minutes, then add the carrots and cook for another 3 minutes.\r\nAdd the tomato paste and stir it around for around 1 minute. Now add the cumin, paprika, mint, thyme, black pepper, and red pepper as quickly as you can and stir for 10 seconds to bloom the spices. Congratulate yourself on how amazing your house now smells.\r\nImmediately add the lentils, water, broth, and salt. Bring the soup to a (gentle) boil.\r\nAfter it has come to a boil, reduce heat to medium-low, cover the pot halfway, and cook for 15-20 minutes or until the lentils have fallen apart and the carrots are completely cooked.\r\nAfter the soup has cooked and the lentils are tender, blend the soup either in a blender or simply use a hand blender to reach the consistency you desire. Taste for seasoning and add more salt if necessary.\r\nServe with crushed-up crackers, torn up bread, or something else to add some extra thickness.  You could also use a traditional thickener (like cornstarch or flour), but I prefer to add crackers for some texture and saltiness.  Makes great leftovers, stays good in the fridge for about a week.",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
    "strTags": "Soup",
    "strYoutube": "https://www.youtube.com/watch?v=VVnZd8A84z4",
    "strIngredient1": "Lentils",
    "strIngredient2": "Onion",
    "strIngredient3": "Carrots",
    "strIngredient4": "Tomato Puree",
    "strIngredient5": "Cumin",
    "strIngredient6": "Paprika",
    "strIngredient7": "Mint",
    "strIngredient8": "Thyme",
    "strIngredient9": "Black Pepper",
    "strIngredient10": "Red Pepper Flakes",
    "strIngredient11": "Vegetable Stock",
    "strIngredient12": "Water",
    "strIngredient13": "Sea Salt",
    "strIngredient14": "",
    "strIngredient15": "",
    "strIngredient16": "",
    "strIngredient17": "",
    "strIngredient18": "",
    "strIngredient19": "",
    "strIngredient20": "",
    "strMeasure1": "1 cup ",
    "strMeasure2": "1 large",
    "strMeasure3": "1 large",
    "strMeasure4": "1 tbs",
    "strMeasure5": "2 tsp",
    "strMeasure6": "1 tsp ",
    "strMeasure7": "1/2 tsp",
    "strMeasure8": "1/2 tsp",
    "strMeasure9": "1/4 tsp",
    "strMeasure10": "1/4 tsp",
    "strMeasure11": "4 cups ",
    "strMeasure12": "1 cup ",
    "strMeasure13": "Pinch",
    "strMeasure14": " ",
    "strMeasure15": " ",
    "strMeasure16": " ",
    "strMeasure17": " ",
    "strMeasure18": " ",
    "strMeasure19": " ",
    "strMeasure20": " ",
    "strSource": "https://findingtimeforcooking.com/main-dishes/red-lentil-soup-corba/",
    "dateModified": null
    }

## Wireframe

    - Wireframes
        - Mobile 
        - Tablet 
        - PC
    - [React Architecture](https://docs.google.com/drawings/d/1kWePvI0KYKetwgW7KKVSnwMMgPUlfMTVtBRgmMUe_DU/edit?usp=sharing)

    ## MVP/PostMVP

    - Functional page transtions
        - All components and elements rendered properly
        - Correct information carried to recipe pages
    - Functional NavBar
    - A working favorites list with recipes the user selects
    - Search page that allows searches by recipe name

    ## PostMVP 

    - Store favorites list and keep when refreshed
    - Video cooking clips
    - Add your own recipe form

    ## Components

    | Component | Description | 
    | --- | :---: |  
    | App | Sets up app with React Router | 
    | Header | Renders the header, including the nav | 
    | Home| Renders the landing page |
    | Favorites | Contains list of favorited recipes |
    | Browse | Renders Cards of recipes categories |
    | Categories | Pulls categories from API |
    | Search | Renders cards from search term and api call |
    | Recipe | Displays full recipe |
    | About | Renders information about the app |
    | Card | Preview of recipe |
    | Category List | Renders cards of specific category |

    ## Timeframe

    | Component | Priority | Estimated Time | Time Invetsted |
    | --- | :---: |  :---: | :---: | 
    
    | Total | H |  |  |
