import React, {useState} from 'react'
import {useMediaQuery} from 'react-responsive'
import styled from 'styled-components'
import tw from 'twin.macro'
import {SCREENS} from '../../components/responsive'
import { Icar } from '../../../typings/car'
import { Car } from '../../components/car'
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
        name: "Car 1",
        mileage: "10k",
        thumbnailSrc:"https://freepngimg.com/thumb/car/31510-9-car-transparent-background.png",
        dailyPrice : 70, 
        monthlyPrice: 15000,
        gearType: "Auto",
        gas: "Petrol"
    }
    const testCar2: Icar = {
        name: "Car 2",
        mileage: "10k",
        thumbnailSrc:"https://freepngimg.com/thumb/car/31510-9-car-transparent-background.png",
        dailyPrice : 70, 
        monthlyPrice: 15000,
        gearType: "Auto",
        gas: "Petrol"
    }
    const testCar3: Icar = {
        name: "Car 3",
        mileage: "10k",
        thumbnailSrc:"https://freepngimg.com/thumb/car/31510-9-car-transparent-background.png",
        dailyPrice : 70, 
        monthlyPrice: 15000,
        gearType: "Auto",
        gas: "Petrol"
    }
    const testCar4: Icar = {
        name: "Car 4",
        mileage: "10k",
        thumbnailSrc:"https://freepngimg.com/thumb/car/31510-9-car-transparent-background.png",
        dailyPrice : 70, 
        monthlyPrice: 15000,
        gearType: "Auto",
        gas: "Petrol"
    }
    const testCar5: Icar = {
        name: "Car 5",
        mileage: "10k",
        thumbnailSrc:"https://freepngimg.com/thumb/car/31510-9-car-transparent-background.png",
        dailyPrice : 70, 
        monthlyPrice: 15000,
        gearType: "Auto",
        gas: "Petrol"
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