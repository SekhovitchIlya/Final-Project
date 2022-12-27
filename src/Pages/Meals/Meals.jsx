import React, { useContext } from 'react';
import Header from '../../Components/Structure/Header/Header';
import Meal from '../../Components/Meal/Meal';
import { MealsContext } from '../../context/MealsContext';
import Search from '../../Components/Search/Search';
import Footer from '../../Components/Structure/Footer/Footer';
import { Link } from 'react-router-dom';
import './Meals.css';

const Meals = () => {  
    
    const {meals} = useContext(MealsContext);
    
    return (
        <>
            <Header />
            
            <main className='meals-main'>
                <Search />
                <div className='meals-by-search'>
                    { meals?.length > 0 ? (
                        meals.map((meal) => (
                            <div className='meal-container' key={meal.idMeal}>
                            <Link to={'/mealInfo'} key={meal.idMeal}>
                                <Meal
                                    key={meal.idMeal}
                                    id={meal.idMeal}
                                    name={meal.strMeal}
                                    img={meal.strMealThumb}                          
                                />
                            </Link>
                            </div>
                        ))) : (<div className='meals-error'>NO rezults, please, search again...</div>)
                    }                    
                </div> 
            </main>
            
            <Footer />
        </>   
    );
};

export default Meals;