import React from 'react';
import './dailyMeal.css';

export default function DailyMeal({img, name, area, category}) {
   
    return (   
        <div className='daily-meal'>
            <div className='img-daily'>
                <img src={img} alt='#'/>
            </div>

            <div className='daily-meal-info'>     
                <h4>You must try!</h4>
                <h2>{name}</h2>
                <h5>Country: {area}</h5>
                <h5>Category: {category}</h5>
            </div>            
        </div>      
    );
};
