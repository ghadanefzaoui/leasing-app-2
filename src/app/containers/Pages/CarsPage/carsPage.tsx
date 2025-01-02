import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Icar } from "../../../../typings/car";
import { Car } from "./car";
import Filter from "./Filter";
import { Col, Row } from "react-bootstrap";
import Header from "../../../components/header"


const Container = styled.div`
  ${tw`p-8 min-h-screen`}
`;


export default function CarsPage() {
  const testCars: Icar[] = [
    {
      name: "BMW M4",
      mileage: "25k",
      thumbnailSrc:
        "https://i.pinimg.com/originals/24/bb/e6/24bbe63026ae59fe39ae8a61d9fe5798.png",
      monthlyPrice: 6000,
      gearType: "Auto",
      gas: "Petrol",
    },
    {
      name: "Tesla Model S",
      mileage: "15k",
      thumbnailSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPvldPmZ60jqM0q3QRVll51b0d6xEi3SedGw&s",
      monthlyPrice: 7000,
      gearType: "Auto",
      gas: "Electric",
    },
    {
      name: "Mercedes-Benz S-Class",
      mileage: "30k",
      thumbnailSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTltt7reqUsbz0OesaUQ7_Qd6tOuGzYz30YUg&s",
      monthlyPrice: 10000,
      gearType: "Auto",
      gas: "Petrol",
    },
    {
      name: "Lamborghini Huracán",
      mileage: "10k",
      thumbnailSrc:
        "https://www.pngarts.com/files/3/Lamborghini-Huracan-Free-PNG-Image.png",
      monthlyPrice: 20000,
      gearType: "Auto",
      gas: "Petrol",
    },
    {
      name: "Toyota Prius",
      mileage: "50k",
      thumbnailSrc:
        "https://images.dealer.com/ddc/vehicles/2020/Toyota/Prius%20Prime/Hatchback/perspective/front-left/0020_24.png",
      monthlyPrice: 1500,
      gearType: "Auto",
      gas: "Hybrid",
    },
    {
      name: "Audi A7",
      mileage: "50k",
      thumbnailSrc:
        "https://mediaservice.audi.com/media/cdb/data/aec9d555-b7a7-4519-8c01-2ca97266bfb6.jpg",
      monthlyPrice: 1500,
      gearType: "Auto",
      gas: "Hybrid",
    },
    {
      name: "MG6",
      mileage: "50k",
      thumbnailSrc:
        "https://mgmyanmar.com.mm/wp-content/uploads/2024/03/black-3-1.png",
      monthlyPrice: 1500,
      gearType: "Auto",
      gas: "Hybrid",
    },
  ];

  // Filter state
  const [filters, setFilters] = useState({
    brand: "",
    model: "",
    rent: "",
    contract: "",
    fuel: "",
    transmission: "",
    color: "",
    bodyType: "",
    engineSize: "",
    seats: "",
    doors: "",
    price: "",
  });

  // Handle the change in filter options
  const handleFilterChange = (newFilters: any) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  // Filter cars based on the selected filter options
  const filteredCars = testCars.filter((car) => {
    const { brand, model, rent, contract, fuel, transmission, color, bodyType, engineSize, seats, doors, price } = filters;
    return (
      (brand ? car.name.toLowerCase().includes(brand.toLowerCase()) : true) &&
      (model ? car.mileage.toLowerCase().includes(model.toLowerCase()) : true) &&
      (fuel ? car.gas.toLowerCase().includes(fuel.toLowerCase()) : true) &&
      (transmission ? car.gearType.toLowerCase().includes(transmission.toLowerCase()) : true) &&
      (color ? car.name.toLowerCase().includes(color.toLowerCase()) : true) &&
      (bodyType ? car.name.toLowerCase().includes(bodyType.toLowerCase()) : true) &&
      (engineSize ? car.name.toLowerCase().includes(engineSize.toLowerCase()) : true) &&
      (seats ? car.name.toLowerCase().includes(seats.toLowerCase()) : true) &&
      (doors ? car.name.toLowerCase().includes(doors.toLowerCase()) : true) &&
      (price ? (car.monthlyPrice <= parseInt(price.split("-")[1])) : true) // Example for price range
    );
  });

  return (
    <div className='w-100'>
      <Header title="Our Car Catalogue" subtitle="Find your ideal car—sedan, SUV, or electric, we’ve got it all !"/>
    <Container>
        <Row>
          <Col sm={3}>
          <Filter filters={filters} onFilterChange={handleFilterChange} />
          </Col>
          <Col sm={9}>
          <Row>
            {filteredCars.map((car, index) => (
              <Col xs={6} md={4} key={index}>
                <Car key={index} {...car} />
              </Col>
            ))}
          </Row>
          </Col>
        </Row>
    </Container>
    </div>
  );
}
