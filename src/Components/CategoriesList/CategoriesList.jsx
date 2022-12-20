import React, { useContext } from 'react';
import { MealsContext } from '../../context/MealsContext';
import './CategoriesList.css';

export default function CategoriesList({categoryName, img}) {

  const { setChoosenCategory } = useContext(MealsContext);
  
  const addCategory = () => {
    setChoosenCategory(categoryName);
  };
  
  return (
    <div onClick={addCategory} className='category'>
      <img src={img} alt='#'/>
      <p className='category-name'>{categoryName}</p>
    </div>
  );
};
