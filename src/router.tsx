import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cars from './app/containers/Pages/CarsPage/carsPage';
import Home from './app/containers/Pages/HomePage/index';
import Services from './app/containers/Pages/services/servicesPage';

const RoutesConfig = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/services" element={<Services />} />
    </Routes>
  );
};

export default RoutesConfig;
