
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js'
import React from 'react';
import Home from './components/pages/Home';
import Discover from './components/pages/Discover';
import AboutUs from './components/pages/AboutUs';
import Admin from './components/pages/Admin';
import Register from './components/auth/Register.js';
import Login from './components/auth/Login.js';
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';

// extra custom

function App() {
  return (
    <>
      {/* <NavBar/> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public routes */}
          <Route exact path='/' element={<Home/>}/> 
          <Route path='/discover' element={<Discover/>}/>
          <Route path='/about-us' element={<AboutUs/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          
          {/* Private routes (need to add content) */}
          <Route element={<RequireAuth />}>
            <Route path='/admin' element={<Admin />}/>
          </Route>
          {/* <Route path='/add-content' element={<AddContent />} */}
        
        </Route>
      </Routes>
    </>
  );
}

export default App;
