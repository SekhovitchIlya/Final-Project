import React from 'react';
import MealsProvider from './MealsContext';
import ThemeProvider from './ThemeContext';

const GlobalProvider = ({children}) => {
  return (
    <ThemeProvider>
        <MealsProvider>
            {children}
        </MealsProvider>
    </ThemeProvider>
  );
};

export default GlobalProvider;
