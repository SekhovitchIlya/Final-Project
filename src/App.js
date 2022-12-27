import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Meals from "./Pages/Meals/Meals";
import MealsByCategory from "./Pages/MealsByCategory/MealsByCategory";
import MealInfo from "./Pages/MealInfo/MealInfo";

function App() {
  return ( 
    <>
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/meals' element={<Meals />}/>
        <Route path='/mealsByCategory' element={<MealsByCategory />}/>
        <Route path='/mealInfo' element={<MealInfo />}/>            
      </Routes>
    </>
  );
};

export default App;
