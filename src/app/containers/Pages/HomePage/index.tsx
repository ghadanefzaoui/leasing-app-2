import React from 'react';
import styled from 'styled-components'
import tw from 'twin.macro';
import { BookCard } from '../../../components/bookCard';
import { Marginer } from '../../../components/marginer';
import { BookingSteps } from '../../bookingSteps';
import { TopSection } from '../../topSection';
import { AboutUs } from './aboutus';
import { TopCars } from './topCars';
import ServicesList from './servicesList';

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

export default function HomePage() {
    return (
    <PageContainer>
        <TopSection/>
        <BookCard/>
        <Marginer direction ="vertical" margin="8rem"/>
        <BookingSteps/>
        <AboutUs/>
        <TopCars/>
        <ServicesList/>
    </PageContainer>
    )
}