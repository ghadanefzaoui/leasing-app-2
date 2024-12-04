import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { SCREENS } from '../../components/responsive'
import JeepCar from '../../../assets/images/jeep.png'

const AboutUsContainer = styled.div`
${tw`
w-full 
flex   
flex-wrap  
items-center  
justify-center  
2xl:flex-nowrap
pt-4  
pb-4   
pl-7  
pr-7 
md:pl-0 
md:pr-0  
bg-white
`}
`

const CarContainer = styled.div`
width: auto;
height: 15em;
margin-left: -50px; 

img {
    width: auto;
    height: 100%;
}

@media (min-width: ${SCREENS.sm}) {
    height: 28em;
}
@media (min-width: ${SCREENS.md}) {
    height: 30em;
}
@media (min-width: ${SCREENS['2xl']}) {
    height: 35em;
    margin-left: 0;
}
`

const InfoContainer = styled.div`
${tw`
2xl:w-1/2  
flex  
flex-col   
md:ml-6  
2xl:ml-16  
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

const InfoParagraph = styled.p` 
${tw`
max-w-2xl 
text-sm 
md:text-base  
text-gray-500 
font-normal
mt-4    
`}
`

export function AboutUs() {
return (
    <AboutUsContainer>
        <CarContainer>
            <img src={JeepCar}/>
        </CarContainer>
        <InfoContainer>
            <Title>Hop On For An Experience Like No Other</Title>
            <InfoParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sit at rerum eaque laboriosam
            officiis asperiores nobis iure reiciendis reprehenderit esse maxime aspernatur neque enim odit, 
            aliquam ab tempore suscipit!
            </InfoParagraph>
        </InfoContainer>
    </AboutUsContainer>
)
}