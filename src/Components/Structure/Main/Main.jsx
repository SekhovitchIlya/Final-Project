import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Whirligig from 'react-whirligig';
import { MealsContext } from '../../../context/MealsContext';
import DailyMeal from '../../DailyMeal/DailyMeal';
import CategoriesList from '../../CategoriesList/CategoriesList';
import rightArrow from '../img/right-arrow.png';
import leftArrow from '../img/left-arrow.png';
import './Main.css';


export default function Main() { 

  let whirligig;
  const next = () => whirligig.next();
  const prev = () => whirligig.prev();
  const { dailyMeal, categories, setChoosenMeal} = useContext(MealsContext);
 
  useEffect(() => {
    setChoosenMeal(dailyMeal.strMeal);
  }, [setChoosenMeal, dailyMeal.strMeal]); 

  return (
    <main className='main-meals'>

      <p>Categories</p>
      <div className='categories-list'>
        <button className='slideBtn' onClick={prev}>
          <img src={leftArrow} alt="" />
        </button>

        <Whirligig
          visibleSlides={4}
          gutter="1em"
          ref={(_whirligigInstance) => { whirligig = _whirligigInstance}}
        >

          { categories.map((category) => (
            <Link key={category.idCategory} to={'/mealsByCategory'} >
              <CategoriesList
                key={category.idCategory}
                categoryName={category.strCategory}
                img={category.strCategoryThumb}
              />
            </Link>
          ))}         
        </Whirligig>

        <button className='slideBtn' onClick={next}>
          <img src={rightArrow} alt="" />
        </button>
      </div>
      
      <p>Favourite Meals</p>    
      <Link to='/mealInfo' >
        <DailyMeal 
          key={dailyMeal.idMeal} 
          img={dailyMeal.strMealThumb}
          name={dailyMeal.strMeal}
          area={dailyMeal.strArea}
          category={dailyMeal.strCategory}
        />
      </Link>        
    </main>
  )
}
