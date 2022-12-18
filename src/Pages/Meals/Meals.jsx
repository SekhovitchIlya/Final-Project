import React, { useContext } from 'react';
import Header from '../../Components/Structure/Header/Header';
import Meal from '../../Components/Meal/Meal';
import { MealsContext } from '../../context/MealsContext';
import Search from '../../Components/Search/Search';
import Footer from '../../Components/Structure/Footer/Footer';
import { Link } from 'react-router-dom';

const Meals = () => {  
    
    const {meals} = useContext(MealsContext);
    
    return (
        <>
            <Header />
            <Search />

            <div className='next-block'>
                { meals?.length > 0 ? (
                    meals.map((meal) => (
                        <Link to={'/mealInfo'} key={meal.idMeal}>
                        <Meal
                            key={meal.idMeal}
                            name={meal.strMeal}
                            img={meal.strMealThumb} 
                        />
                        </Link>
                    ))) : (<div className='movies-error'>Please search meals...</div>)
                }                    
            </div> 

            <Footer />
        </>   
    );
};

export default Meals;
