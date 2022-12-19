import React, { useContext } from 'react';
import { MealsContext } from '../../context/MealsContext';
import './meal.css';

export default function Meal({  name, img }) {

  const {setChoosenMeal} = useContext(MealsContext);

  const ChoosenMeal = () => {
    setChoosenMeal(name);
  };
  
  return (
    <div className='meal' onClick={ChoosenMeal}>
      
      <img src={img} alt='#'/>
      <div className='meal-info'>
        <p>{name}</p>
      </div>
    </div>  
  )
}
