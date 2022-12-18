import React, { useContext } from 'react'
import Footer from '../../Components/Structure/Footer/Footer';
import Header from '../../Components/Structure/Header/Header';
import { MealsContext } from '../../context/MealsContext';

export default function MealInfo() {

  const {choosenMeal} = useContext(MealsContext);
  
  return (
    <>
      <Header />
        <div>{choosenMeal}</div>
      <Footer />
    </> 
  );
};
