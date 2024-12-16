import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Icar } from '../../../../typings/car'
import { Car } from '../../../components/car'
import Filter from "./Filter";


const Container = styled.div`
  ${tw`p-8 min-h-screen`}
`;

const Title = styled.h1`
  ${tw`text-4xl font-extrabold mb-6 text-gray-800 text-center`}
`;

const Subtitle = styled.p`
  ${tw`text-lg text-gray-600 mb-8 text-center`}
`;

const CarList = styled.div`
  ${tw`grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4`}
`;

const CarCard = styled.div`
  ${tw`p-4 bg-white shadow rounded text-center`}
`;

const Button = styled.button`
  ${tw`mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700`}
`;

export default function CarsPage() {
    const testCar1: Icar = {
        name: "BMW M4",
        mileage: "25k",
        thumbnailSrc:"https://i.pinimg.com/originals/24/bb/e6/24bbe63026ae59fe39ae8a61d9fe5798.png",
        monthlyPrice: 6000,
        gearType: "Auto",
        gas: "Petrol",
    }
    const testCar2: Icar = {
        name: "Tesla Model S",
        mileage: "15k",
        thumbnailSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPvldPmZ60jqM0q3QRVll51b0d6xEi3SedGw&s",
        monthlyPrice: 7000,
        gearType: "Auto",
        gas: "Electric",
    }
    const testCar3: Icar = {
        name: "Mercedes-Benz S-Class",
        mileage: "30k",
        thumbnailSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTltt7reqUsbz0OesaUQ7_Qd6tOuGzYz30YUg&s",
        monthlyPrice: 10000,
        gearType: "Auto",
        gas: "Petrol",
    }
    const testCar4: Icar = {
        name: "Lamborghini Huracán",
        mileage: "10k",
        thumbnailSrc:"https://www.pngarts.com/files/3/Lamborghini-Huracan-Free-PNG-Image.png",
        monthlyPrice: 20000,
        gearType: "Auto",
        gas: "Petrol",

    }
    const testCar5: Icar = {
        name: "Toyota Prius",
        mileage: "50k",
        thumbnailSrc:"https://images.dealer.com/ddc/vehicles/2020/Toyota/Prius%20Prime/Hatchback/perspective/front-left/0020_24.png",
        monthlyPrice: 1500,
        gearType: "Auto",
        gas: "Hybrid",
    }
    const testCar6: Icar = {
        name: "Audi A7",
        mileage: "50k",
        thumbnailSrc:"https://mediaservice.audi.com/media/cdb/data/aec9d555-b7a7-4519-8c01-2ca97266bfb6.jpg",
        monthlyPrice: 1500,
        gearType: "Auto",
        gas: "Hybrid",
    }
    const testCar7: Icar = {
        name: "MG6",
        mileage: "50k",
        thumbnailSrc:"https://mgmyanmar.com.mm/wp-content/uploads/2024/03/black-3-1.png", 
        monthlyPrice: 1500,
        gearType: "Auto",
        gas: "Hybrid",

    }
  return (
    <Container>
       <Title>Our Car Catalogue</Title>
       <Subtitle>
        Discover the perfect car for your needs. Whether you’re looking for a sleek sedan, a spacious SUV, 
        or an eco-friendly electric car, we have you covered.
      </Subtitle>
      <div className="container mt-4">
        <div className="row">
          <Filter />
          <CarList className="col-md-9">
        <Car {... testCar1}/>
        <Car {... testCar2}/>
        <Car {... testCar3}/>
        <Car {... testCar4}/>
        <Car {... testCar5}/>
        <Car {... testCar6}/>
        <Car {... testCar7}/>
        </CarList>
        </div>
        </div>
    </Container>
  );
}
