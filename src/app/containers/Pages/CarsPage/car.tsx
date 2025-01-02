import { faEllipsisH, faFillDrip, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import { Icar } from '../../../../typings/car';
import { Button } from '../../../components/button';


interface IcarProps extends Icar {

}

const CarContainer = styled.div`
height: 25.2em;
box-shadow: 0 1.3px 15px -2px rgba(0,0,0,0.4);
transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for transform and shadow */
${tw`
flex 
flex-col   
items-center   
p-3   
pb-4  
bg-white  
rounded-md   
m-1 
mb-6  
`}
 &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2); /* Stronger shadow on hover */
    transform: translateY(-10px); /* Lift the card upwards */
  }
`;

const CarThumbNail = styled.div`
width: 100%;
height: 70%; 
display: flex;
align-items: center;
justify-content: center;

img{
    width: auto; 
    height: 100%  
}
aspect-ratio: 16/9; /* Maintains a consistent aspect ratio */
`
const CarName = styled.h3`
${tw`
text-base  
font-bold  
text-black   
mt-1   
mb-1   
`}
`
const PricesContainer = styled.div`
${tw`
w-full 
flex  
justify-start   
mt-3 
`}
`
const SmallText = styled.p`
color: inherit; 
${tw`
inline-flex
text-xs
font-thin 
`}
`

const MonthlyPrice = styled.h5`
${tw`
text-gray-500
text-sm  
`}
`
const SmallIcon = styled.span`
${tw`
text-gray-400  
text-sm  
mr-1  
`}
`
const CarDetailsContainer = styled.div`
${tw`
flex  
w-full  
justify-between 
`}
`

const CarDetail = styled.div`
${tw`
flex  
items-center 
`}
`

const CarInfo = styled.h6`
${tw`
text-gray-400  
text-sm 
`}
`

const Separator = styled.div`
min-width: 100%;
min-height: 1px;  
${tw`
flex  
bg-gray-300 
mt-2
mb-2 
`}
`

const RentButton = styled(Button)`
 ${tw` 
 min-w-full  
 mt-5
 `}
`


export function Car(props: IcarProps) {
    const {name, thumbnailSrc, monthlyPrice, mileage, gearType, gas} = props;
    return (
        <CarContainer>
            <CarThumbNail>
                <img src={thumbnailSrc} alt="" />
            </CarThumbNail>
                <CarName>{name}</CarName>
                <PricesContainer>
                    <MonthlyPrice>Leasing: {monthlyPrice}DT<SmallText>/month</SmallText></MonthlyPrice>
                </PricesContainer>
                <Separator/>
                <CarDetailsContainer>
                <CarDetail>
                    <SmallIcon>
                        <FontAwesomeIcon icon={faTachometerAlt}/>
                    </SmallIcon>
                    <CarInfo>{mileage}</CarInfo>
                </CarDetail>
                <CarDetail>
                    <SmallIcon>
                        <FontAwesomeIcon icon={faEllipsisH}/>
                    </SmallIcon>
                    <CarInfo>{gearType}</CarInfo>
                </CarDetail>
                <CarDetail>
                    <SmallIcon>
                        <FontAwesomeIcon icon={faFillDrip}/>
                    </SmallIcon>
                    <CarInfo>{gas}</CarInfo>
                </CarDetail>
                </CarDetailsContainer>
                    <RentButton text="Book Now"/>
        </CarContainer>
    )

}