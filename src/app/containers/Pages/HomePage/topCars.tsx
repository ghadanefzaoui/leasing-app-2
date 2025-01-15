import React, {useState} from 'react'
import {useMediaQuery} from 'react-responsive'
import styled from 'styled-components'
import tw from 'twin.macro'
import {SCREENS} from '../../../components/responsive'
import { Icar } from '../../../../typings/car'
import { Car } from '../../../components/car'
import Carousel, {Dots, slidesToShowPlugin} from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css';


const TopCarsContainer = styled.div`
${tw`
 max-w-screen-lg
 w-full 
 flex  
 flex-col  
 items-center  
 justify-center  
 pr-4  
 pl-4  
 md:pl-0  
 md:pr-0  
 mb-10
`}
`

const Title = styled.h1`
${tw`
text-black  
text-2xl  
md:text-5xl  
font-extrabold  
md:font-black  
md:leading-normal   
`}
`

const CarsContainer = styled.div`
${tw`
w-full 
flex  
flex-wrap  
justify-center  
mt-7  
md:mt-10 
`}
`

export function TopCars() {
    const isMobile = useMediaQuery({maxWidth: SCREENS.sm})
    const [current, setCurrent] = useState(0)
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

    const cars = [
               <Car {... testCar1}/>, <Car {...testCar2}/>, <Car {...testCar3}/>, <Car {...testCar4}/>,<Car {...testCar5}/>
           ]

    const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 2)
 return (
     <TopCarsContainer>
         <Title>Explore Our Top Deals</Title>
         <CarsContainer>
           <Carousel value={current} onChange={setCurrent} slides={cars} 
           plugins={[ 
            "clickToChange" ,  
            {
               resolve: slidesToShowPlugin,
               options: {
                   numberOfSlides: 3,
               },
           },
        ]}
           breakpoints ={ {
              640: {
                  plugins:[ 
                      {
                      resolve: slidesToShowPlugin,
                      options: {
                          numberOfSlides: 1,
                        },
                    }
                ]
              } ,
              900: {
                  plugins:[ 
                      {
                      resolve: slidesToShowPlugin,
                      options: {
                          numberOfSlides: 2,
                        },
                    }
                ]
              } 
           }}
           />
           <Dots value={current} onChange={setCurrent} number={numberOfDots}/>
         </CarsContainer>
     </TopCarsContainer>
 )
}