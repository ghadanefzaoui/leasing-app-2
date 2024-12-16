import React from 'react';
import CarCard from './CarCard';

const CarList = () => {
  // Sample data for cars
  const cars = [
    {
      image: 'https://via.placeholder.com/200',
      title: '2022 Toyota Corolla',
      description: 'A reliable and fuel-efficient car.',
      price: '€20,000',
    },
    {
      image: 'https://via.placeholder.com/200',
      title: '2021 Honda Civic',
      description: 'Sporty and stylish sedan.',
      price: '€22,000',
    },
    // Add more cars here...
  ];

  return (
    <div className="row">
      {cars.map((car, index) => (
        <div className="col-md-4" key={index}>
          <CarCard {...car} />
        </div>
      ))}
    </div>
  );
};

export default CarList;
