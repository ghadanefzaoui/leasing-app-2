import React from 'react';
import Slider from '@material-ui/core/Slider';

const Filter = () => {
  return (
    <div className="col-md-3">
      <div className="card mt-4">
        <div className="card-body">
          <form>
            <div className="mb-4">
              <select className="form-select border border-light" id="brand">
                <option value="">Brand</option>
                <option value="audi">Audi</option>
                <option value="bmw">BMW</option>
                <option value="lamborghini">Lamborghini</option>
                <option value="mercedes">Mercedes</option>
                <option value="toyota">Toyota</option>
              </select>
            </div>
            <div className="mb-4">
              <select className="form-select border border-light" id="model">
                <option value="">Mileage</option>
                <option value="low">10k</option>
                <option value="medium">20k</option>
                <option value="high">30k</option>
              </select>
            </div>
            <div className="mb-4">
              <select className="form-select border border-light" id="rent">
                <option value="">Initial Rental</option>
                <option value="1">1 month</option>
                <option value="3">3 months</option>
                <option value="6">6 months</option>
                <option value="9">9 months</option>
                <option value="12">12 months</option>
              </select>
            </div>
            <div className="mb-4">
              <select className="form-select border border-light" id="contract">
                <option value="">Contract Length</option>
                <option value="12">12 months</option>
                <option value="18">18 months</option>
                <option value="24">24 months</option>
                <option value="36">36 months</option>
                <option value="48">48 months</option>
              </select>
            </div>
            <div className="mb-4">
              <select className="form-select border border-light" id="fuel">
                <option value="">Fuel Type</option>
                <option value="diesel">Diesel</option>
                <option value="electric">Electric</option>
                <option value="hybrid">Hybrid</option>
                <option value="petrol">Petrol</option>
              </select>
            </div>
            <div className="mb-4">
              <select className="form-select border border-light" id="transmission">
                <option value="">Transmission</option>
                <option value="auto">Automatic</option>
                <option value="manual">Manual</option>
              </select>
            </div>
            <div className="mb-4">
              <select className="form-select border border-light" id="color">
                <option value="">Colors</option>
                <option value="black">Black</option>
                <option value="white">White</option>
                <option value="grey">Grey</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
              </select>
            </div>
            <div className="mb-4">
              <select className="form-select border border-light" id="bodyType">
                <option value="">Body Type</option>
                <option value="suv">SUV</option>
                <option value="sedan">Sedan</option>
                <option value="hatchback">Hatchback</option>
                <option value="coupe">Coupe</option>
                <option value="convertible">Convertible</option>
              </select>
            </div>
            <div className="mb-4">
              <select className="form-select border border-light" id="engineSize">
                <option value="">Engine Size</option>
                <option value="1.0">1.0L</option>
                <option value="1.5">1.5L</option>
                <option value="2.0">2.0L</option>
                <option value="3.0">3.0L</option>
                <option value="4.0">4.0L+</option>
              </select>
            </div>
            <div className="mb-4">
              <select className="form-select border border-light" id="seats">
                <option value="">Seats</option>
                <option value="2">2 seats</option>
                <option value="4">4 seats</option>
                <option value="5">5 seats</option>
                <option value="7">7 seats</option>
                <option value="8">8+ seats</option>
              </select>
            </div>
            <div className="mb-4">
              <select className="form-select border border-light" id="doors">
                <option value="">Doors</option>
                <option value="2">2 doors</option>
                <option value="4">4 doors</option>
                <option value="5">5 doors</option>
              </select>
            </div>
            <div className="mb-4">
              <select className="form-select border border-light" id="price">
                <option value="">Price Range</option>
                <option value="low">Under 20,000</option>
                <option value="medium">20,000 - 30,000</option>
                <option value="high">Above 30,000</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Filter;
