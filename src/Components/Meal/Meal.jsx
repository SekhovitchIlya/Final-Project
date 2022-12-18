import React, { useContext } from 'react';
import { MealsContext } from '../../context/MealsContext';

export default function Meal({ id, name, img }) {

  const {setChoosenMeal} = useContext(MealsContext);

  const ChoosenMeal = () => {
    setChoosenMeal(name);
  };
  
  return (
    <div className='meal' onClick={ChoosenMeal}>
      <p>{id}</p>
      <p>{name}</p>
      <img src={img} alt='#'/>
    </div>  
  )
}
