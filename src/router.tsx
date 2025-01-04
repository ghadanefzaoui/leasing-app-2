import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cars from './app/containers/Pages/CarsPage/carsPage';
import Home from './app/containers/Pages/HomePage/index';
import Services from './app/containers/Pages/services/servicesPage';
import Contact from './app/containers/Pages/ContactPage/contactPage';
import Login from './app/containers/Pages/Registration/Login';
import Signup from './app/containers/Pages/Registration/Registration';


const RoutesConfig = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/services" element={<Services />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
    </Routes>
  );
};

export default RoutesConfig;
