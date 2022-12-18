import React, { useContext } from 'react';
import Header from '../../Components/Structure/Header/Header';
import Meal from '../../Components/Meal/Meal';
import { MealsContext } from '../../context/MealsContext';
import { Link } from 'react-router-dom';

const MealsByCategory = () => {  

    const { categoryArray } = useContext(MealsContext);
    const mealsByCategory = categoryArray.meals;

    return (
        <>
            <Header />

            { mealsByCategory?.length > 0 ? (
                <div className='next-block'>
                { mealsByCategory.map((category) => (
                    <Link to={'/mealInfo'} key={category.idMeal}>
                        <Meal
                            key={category.idMeal}
                            name={category.strMeal}
                            img={category.strMealThumb} 
                        />
                    </Link>
                ))} 
                </div>          
            ) : (console.log('Ne OK'))};                                                    
        </>   
    );
};

export default MealsByCategory;
