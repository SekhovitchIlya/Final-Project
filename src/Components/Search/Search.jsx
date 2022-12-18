import React, { useContext } from 'react';
import { MealsContext } from '../../context/MealsContext';
import './search.css';

export default function Search() {

    const {search, setSearch, error} = useContext(MealsContext);

    return (
        <form className='search-form' onSubmit={e => e.preventDefault()}>
        <input
            placeholder='Search...'
            className='input'
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        {error.show && <p className='error'>{error.msg}</p>}
    </form>
    )
}
