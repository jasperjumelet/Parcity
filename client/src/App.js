
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import React from 'react';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Login from './components/auth/Login.js';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/> 
        <Route path='/services' element={<Services/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
