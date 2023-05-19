import React, { useState } from 'react'
import './App.css'
import Profile from './Profile/Profile';
import Register from './Register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Login from './Login/Login';
import Logout from './Logout/Logout';
import Home from './Home/Home';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';

// navbar à importer
// import jwt_decode from "jwt-decode";


function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoutes />} >
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App
