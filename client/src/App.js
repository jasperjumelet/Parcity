
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import React from 'react';
import Home from './components/pages/Home';
import Buy from './components/pages/Buy';
import AboutUs from './components/pages/AboutUs';
import Admin from './components/AdminPages/Admin.tsx';
import UserManager from './components/AdminPages/UserManager.tsx';
import AddProperties from './components/AdminPages/AddProperties';
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
          <Route exact path='/' element={<Home />} />
          <Route path='/buy' element={<Buy />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/usermanager' element={<UserManager />} />

          {/* Private routes (need to add content) */}
          <Route path='/add' element={<AddProperties />} />
          <Route element={<RequireAuth />}>
            {/* <Route path='/admin' element={<Admin />} /> */}
          </Route>
          {/* <Route path='/add-content' element={<AddContent />} */}

        </Route>
      </Routes>
    </>
  );
}

export default App;
