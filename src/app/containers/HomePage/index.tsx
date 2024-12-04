import React from 'react';
import styled from 'styled-components'
import tw from 'twin.macro';
import { BookCard } from '../../components/bookCard';
import { Footer } from '../../components/footer';
import { Marginer } from '../../components/marginer';
import { Navbar } from '../../components/navbar';
import { BookingSteps } from '../bookingSteps';
import { TopSection } from '../topSection';
import { AboutUs } from './aboutus';
import { TopCars } from './topCars';

const PageContainer = styled.div`
${tw`
flex
flex-col
w-full
h-full
items-center
overflow-x-hidden
`}
`;

export function HomePage() {
    return (
    <PageContainer>
        <Navbar />
        <TopSection/>
        <BookCard/>
        <Marginer direction ="vertical" margin="8rem"/>
        <BookingSteps/>
        <AboutUs/>
        <TopCars/>
        <Footer/>
    </PageContainer>
    )
}