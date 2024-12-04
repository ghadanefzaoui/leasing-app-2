import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Logo } from '../logo';

const FooterContainer = styled.div`
/* min-height: 24em; */
background-color: rgb(29,33,36);
${tw`
pt-10   
md:pt-16  
pb-1  
flex 
flex-col
min-w-full  
items-center 
justify-center  
`}
`
const InnerContainer = styled.div`
${tw`
max-w-screen-2xl
flex 
h-full 
w-full
flex-wrap
justify-center
`}
`
const RedIcon = styled.span`
${tw`
w-8
h-8
bg-red-500
rounded-full  
flex  
items-center  
justify-center  
text-white   
text-base   
mr-2  
`}
`

const AboutContainer = styled.div`
${tw`
flex
flex-col  
mr-2
md:mr-7
pl-10 
pr-10  
md:pl-3 
md:pr-3
`}
`

const AboutText = styled.p`
${tw`
text-white  
text-sm   
max-w-xs
font-normal  
leading-5  
mt-2
`}
`

const LinksList = styled.ul`
${tw`
outline-none 
list-none  
flex  
flex-col  
`}
`

const ListItem = styled.li`
${tw`
mb-3 
`}

& > a {
    ${tw`
    text-sm 
    text-white
    transition-all 
    hover:text-gray-200 
    `}
}
`
const SectionContainer = styled.div`
${tw`
w-full 
md:w-auto
flex 
flex-col
mr-2 
md:mr-12  
pl-10
pr-10
md:pl-3
md:pr-3  
mt-6  
md:mt-0  
`}
`
const HorizontalContainer = styled.div`
${tw`
flex  
flex-row
items-center
`}
`
const HeaderTitle = styled.h3`
${tw`
text-xl  
font-bold  
text-white  
mb-3
`}
`
const SmallText = styled.div`
${tw`
text-sm  
text-white 
`}
`
const BottomContainer = styled.div`
${tw`
flex
mt-5 
mb-5
`}
`
const CopyRightText = styled.span`
font-size:12px;
${tw`
text-gray-400 
`}
`



export function Footer(){
return (
    <FooterContainer>
        <InnerContainer>
        <AboutContainer>
            <Logo color='white' bgColor='dark'/>
            <AboutText>
            RentIt Lorem ipsum. Accusamus deserunt voluptatibus, quod, eum voluptatem quis eveniet optio! Corporis porro quis 
            ad possimus facere?
            </AboutText>
        </AboutContainer>
        <SectionContainer>
        <HeaderTitle> Our Links</HeaderTitle>
        <LinksList>
        <ListItem><a href="#">Home</a></ListItem>
        <ListItem><a href="#">About Us</a></ListItem>
        <ListItem><a href="#">Stories</a></ListItem>
        <ListItem><a href="#">Services</a></ListItem>
        <ListItem><a href="#">Models</a></ListItem>
        </LinksList>
        </SectionContainer>
        <SectionContainer>
        <HeaderTitle> More</HeaderTitle>
        <LinksList>
        <ListItem><a href="#">Home</a></ListItem>
        <ListItem><a href="#">About Us</a></ListItem>
        <ListItem><a href="#">Stories</a></ListItem>
        <ListItem><a href="#">Services</a></ListItem>
        <ListItem><a href="#">Terms &amp; Conditions</a></ListItem>
        </LinksList>
        </SectionContainer>
        <SectionContainer>
            <HeaderTitle>Call Now</HeaderTitle>
            <HorizontalContainer>
                <RedIcon>
                    <FontAwesomeIcon icon={faPhoneAlt}/>
                </RedIcon>
                <SmallText>+359-0039-233-43 </SmallText>
            </HorizontalContainer>
        </SectionContainer>
        <SectionContainer>
            <HeaderTitle>Email Us</HeaderTitle>
            <HorizontalContainer>
                <RedIcon>
                    <FontAwesomeIcon icon={faEnvelope}/>
                </RedIcon>
                <SmallText>hello@rent.drive</SmallText>
            </HorizontalContainer>
        </SectionContainer>
        </InnerContainer>
        <BottomContainer>
            <CopyRightText>All Rights Reserved</CopyRightText>
        </BottomContainer>
    </FooterContainer>
)
}