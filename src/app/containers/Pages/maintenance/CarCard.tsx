import React from 'react';

interface CarCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

const CarCard: React.FC<CarCardProps> = ({ image, title, description, price }) => {
  return (
    <div className="card mb-4">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <h6 className="card-subtitle text-muted">{price}</h6>
      </div>
    </div>
  );
};

export default CarCard;
