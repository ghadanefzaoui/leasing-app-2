import React from 'react';
import Filter from '../CarsPage/Filter';
import CarList from './CarList';


export default function MaintenancePage() {
  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <Filter />
          <div className="col-md-9">
            <h2>Cars for Sale</h2>
            <CarList />
          </div>
        </div>
      </div>
    </div>
  );
}
