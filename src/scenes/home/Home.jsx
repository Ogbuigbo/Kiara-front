import React, { useEffect } from 'react';
import MainCarousel from './MainCarousel.jsx';
import ShoppingList from './ShoppingList.jsx';
import Subscribe from './Subscribe.jsx';
import { fetchDataFromApi } from '../../utils/api.js';

function Home() {


  return (
    <div className='home'> 
      <MainCarousel/>
      <ShoppingList />
      <Subscribe />
    </div>
  )
}

export default Home
