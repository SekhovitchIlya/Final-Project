import React from 'react';
import './dailyMeal.css';

export default function DailyMeal({img, name, area, category}) {
   
    return (   
        <div className='daily-meal'>
            <div className='img-daily'>
                <img src={img} alt='#'/>
            </div>

            <div className='daily-meal-info'>
                <p>You must try!</p>
                <h1>{name}</h1>
                <p>Country: {area}</p>
                <p>Category: {category}</p>
            </div>            
        </div>      
    );
};
