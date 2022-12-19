import React, { useContext, useEffect } from 'react';
import Footer from '../../Components/Structure/Footer/Footer';
import Header from '../../Components/Structure/Header/Header';
import { MealsContext } from '../../context/MealsContext';

export default function MealInfo() {

  const {choosenMeal, fetchMealId, meals} = useContext(MealsContext);

  useEffect(() => {
    fetchMealId(choosenMeal);       
  }, [choosenMeal]); // компилятор ругается, но если добавляешь в массив fetchMealId, то в консоли зацикливается
console.log(meals);

  return (
    <>
      <Header />

      <main className='main-meal-info'>
        <div className='meal-container'>
          <p>{meals[0].strMeal}</p>
          <img src={meals[0].strMealThumb} alt='#'/>
          <p>{meals[0].strInstructions}</p>          
        </div>
      </main>
        
      <Footer />
    </> 
  );
};
