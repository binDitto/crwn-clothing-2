import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='shop' element={<ShopPage/>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;