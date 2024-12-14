import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { SCREENS } from '../../components/responsive';

const AboutUsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    items-center
    justify-center
    pt-4
    pb-4
    pl-7
    pr-7
    md:pl-0
    md:pr-0
    bg-white
  `}
  @media (min-width: ${SCREENS.sm}) {
    ${tw`flex-nowrap`} /* For small screens, make sure the flex direction stays row */
  }
`;

const CarContainer = styled.div`
  width: 100%; /* Default takes up full width */
  height: 15em;

  img {
    width: auto;
    height: 100%;
    opacity: 0;
    transform: translateX(-50px);
    transition: opacity 1.5s ease, transform 1.5s ease;
  }

  &.visible img {
    opacity: 1;
    transform: translateX(0);
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
`;

const InfoContainer = styled.div`
  ${tw`
    2xl:w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
  `}
  width: 100%; /* Default takes up full width */
  text-align: left;
`;

const Title = styled.h1`
  ${tw`
    text-black
    text-2xl
    md:text-5xl
    font-extrabold
    md:font-black
    md:leading-normal
  `}
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1.5s ease, transform 1.5s ease;
  
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const InfoParagraph = styled.p`
  ${tw`
    text-sm
    md:text-base
    text-gray-500
    font-normal
    mt-4
  `}
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1.5s ease, transform 1.5s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

export function AboutUs() {
  const [isCarVisible, setCarVisible] = useState(false);
  const [isTitleVisible, setTitleVisible] = useState(false);
  const [isParagraphVisible, setParagraphVisible] = useState(false);

  // Add types to useRef
  const carRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);

  // Intersection Observer API to trigger animations when elements are in view
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === carRef.current && entry.isIntersecting) {
          setCarVisible(true);
        }
        if (entry.target === titleRef.current && entry.isIntersecting) {
          setTitleVisible(true);
        }
        if (entry.target === paragraphRef.current && entry.isIntersecting) {
          setParagraphVisible(true);
        }
      });
    }, options);

    if (carRef.current) observer.observe(carRef.current);
    if (titleRef.current) observer.observe(titleRef.current);
    if (paragraphRef.current) observer.observe(paragraphRef.current);

    return () => {
      if (carRef.current) observer.unobserve(carRef.current);
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (paragraphRef.current) observer.unobserve(paragraphRef.current);
    };
  }, []);

  return (
    <AboutUsContainer>
      <CarContainer ref={carRef} className={isCarVisible ? 'visible' : ''}>
        <img
          src="https://vehicle-images.dealerinspire.com/stock-images/chrome/f4cdd7526d0f1e0d98d5baf0acbc1713.png"
          alt="Jeep Car"
        />
      </CarContainer>
      <InfoContainer>
        <Title ref={titleRef} className={isTitleVisible ? 'visible' : ''}>
          Hop On For An Experience Like No Other
        </Title>
        <InfoParagraph ref={paragraphRef} className={isParagraphVisible ? 'visible' : ''}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sit at rerum eaque laboriosam
          officiis asperiores nobis iure reiciendis reprehenderit esse maxime aspernatur neque enim odit, 
          aliquam ab tempore suscipit!
        </InfoParagraph>
      </InfoContainer>
    </AboutUsContainer>
  );
}
