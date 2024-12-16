import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cars from './app/containers/Pages/CarsPage/carsPage';
import Home from './app/containers/Pages/HomePage/index';
import Maintenance from './app/containers/Pages/maintenance/maintenancePage';

const RoutesConfig = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/maintenance" element={<Maintenance />} />
    </Routes>
  );
};

export default RoutesConfig;
