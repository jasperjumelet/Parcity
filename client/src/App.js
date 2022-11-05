
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import React from 'react';
import Home from './components/pages/Home';
import Discover from './components/pages/Discover';
import AboutUs from './components/pages/AboutUs';
import Register from './components/auth/Register.js';
import Login from './components/auth/Login.js';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/> 
        <Route path='/discover' element={<Discover/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
