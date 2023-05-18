import React, { useState } from 'react'
import './App.css'
import Profile from './Profile/Profile';
import Register from './Register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Login from './Login/Login'
import Home from './Home/Home';

// navbar à importer
// import jwt_decode from "jwt-decode";


function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/login" element={<LogIn />} /> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App
