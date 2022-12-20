import React, { useContext } from 'react';
import { MealsContext } from '../../context/MealsContext';
import './Meal.css';

export default function Meal({  name, img, id }) {

  const {setChoosenMeal} = useContext(MealsContext);

  const ChoosenMeal = () => {
    setChoosenMeal(id);
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
