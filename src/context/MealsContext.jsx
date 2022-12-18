import React, { createContext, useEffect, useState } from 'react';

export const MealsContext = createContext(); 

const MealsProvider = ({children}) => {
    const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState('');
    const [dailyMeal, setDailyMeal] = useState([]);
    const [choosenMeal, setChoosenMeal] = useState([]);
    const [categories, setCategories] = useState([]);
    const [choosenCategory, setChoosenCategory] = useState([]);
    const [categoryArray, setCategoryArray] = useState([]);
    const [error, setError] = useState({show: false, msg: ''});

    const fetchMeals = async(searchValue) => {
        try {
            const response = await fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${searchValue}`);
            const data = await response.json();
            if(data !== undefined) {   
                setMeals(data.meals);  
                setError({show: false, msg: ''}); 
            } else {
                setError({show: true, msg: data.Error});
            }
            
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchMeals(search);           
    }, [search]);

    const fetchRandomMeal = async() => {
        try {
            const response = await fetch('https://themealdb.com/api/json/v1/1/random.php');
            const data = await response.json();
            if(data !== undefined) {   
                setDailyMeal(data.meals[0]);
                setError({show: false, msg: ''});   
            } else {
                setError({show: true, msg: data.Error});
            }  

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchRandomMeal();           
    }, []);

    const fetchCategories = async() => {
        try {
            const response = await fetch('https://themealdb.com/api/json/v1/1/categories.php');
            const data = await response.json();

            if(data !== undefined) {   
                setCategories(data.categories); 
                setError({show: false, msg: ''});     
            } else {
                setError({show: true, msg: data.Error});
            }
            
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {   
        fetchCategories();       
    }, []);

    const fetchByCategories = async(category) => {
        try {
            const response = await fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`);
            const data = await response.json();

            if(data !== undefined) {   
                setCategoryArray(data);  
                setError({show: false, msg: ''});     
            } else {
                setError({show: true, msg: data.Error});
            }         
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchByCategories(choosenCategory);       
    }, [choosenCategory]);

    return (
        <MealsContext.Provider 
            value={{
                meals,
                dailyMeal,
                categories,
                choosenCategory,
                setChoosenCategory,
                categoryArray,
                search,
                setSearch,
                fetchMeals,
                error,
                choosenMeal,
                setChoosenMeal
            }}
        >
            {children}
        </MealsContext.Provider>
    );
};

export default MealsProvider;