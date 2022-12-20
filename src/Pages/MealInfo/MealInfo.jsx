import React, { useContext, useEffect } from 'react';
import Footer from '../../Components/Structure/Footer/Footer';
import Header from '../../Components/Structure/Header/Header';
import { MealsContext } from '../../context/MealsContext';
import './MealInfo.css';

export default function MealInfo() {

  const {choosenMeal, fetchMealId, meals} = useContext(MealsContext);

  useEffect(() => {
    fetchMealId(choosenMeal);       
  }, [choosenMeal]); // компилятор ругается, но если добавляешь в массив fetchMealId, то в консоли зацикливается
  
  let ingr = [];

  if(meals.length > 0) {
    for(let i = 1; i <= 20; i++) {
      if(meals[0][`strIngredient${i}`] !== '') { 
        ingr.push(`${meals[0][`strIngredient${i}`]} - ${meals[0][`strMeasure${i}`]}`);
      }
    }
  };

  return (
    <>
      <Header />

      <main className='main-meal-info'>
        <div className='meal-info-container'>

          <p className='name'>{meals[0].strMeal}</p>
          <div className='ingredients'>
            { ingr.map((ing) => (
              <p key={(ingr.length++)}>{ing}</p>
            ))}
          </div>
          
          <div className='img-container'>
              <img src={meals[0].strMealThumb} alt='#'/>
          </div>
          
          <div className='recip'>
            <p>{meals[0].strInstructions}</p>
          </div>             
        </div>
      </main>
        
      <Footer />
    </> 
  );
};
