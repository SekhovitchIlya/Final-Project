import React, { useContext } from 'react';
import Header from '../../Components/Structure/Header/Header';
import Meal from '../../Components/Meal/Meal';
import { MealsContext } from '../../context/MealsContext';
import { Link } from 'react-router-dom';
import './MealsByCategory.css';
import Footer from '../../Components/Structure/Footer/Footer';

const MealsByCategory = () => {

    const { categoryArray } = useContext(MealsContext);
    const mealsByCategory = categoryArray.meals;

    return (
        <>
            <Header />
            <main className='main-meals'>
                <div className='meals-by-category'>
                    {mealsByCategory?.length > 0 ? (
                        mealsByCategory.map((category) => (
                            <div className='container' key={category.idMeal}>
                                <Link to={'/mealInfo'} key={category.idMeal}>
                                    <Meal
                                        key={category.idMeal}
                                        name={category.strMeal}
                                        img={category.strMealThumb}
                                    />
                                </Link>
                            </div>
                        ))
                    ) : (<p></p>)
                    }
                </div>
            </main>
            <Footer />
        </>
    );
};

export default MealsByCategory;
