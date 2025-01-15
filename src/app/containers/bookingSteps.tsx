import React, { useEffect, useRef, useState } from 'react';
import { faMapMarkedAlt, faCalendarAlt, faCarSide } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import tw from 'twin.macro';

// Container Styles
const Container = styled.div`
  ${tw`
    w-full
    flex  
    flex-col   
    items-center  
    pt-3  
    pb-3   
    lg:pt-6  
    lg:pb-6
  `}
`;

// Title Styles
const Title = styled.h2`
  ${tw`
    text-3xl 
    lg:text-5xl   
    text-black  
    font-extrabold  
  `}
`;

// Steps Container
const StepsContainer = styled.div`
  ${tw`
    flex   
    justify-evenly 
    flex-wrap  
    mt-7  
    lg:mt-16
  `}
`;

// Step Container (Individual Step)
const StepContainer = styled.div`
  ${tw`
    flex 
    flex-col   
    md:w-96  
    items-center 
    m-3
  `}
`;

// Step Box (Container for each step's icon, title, description)
const Step = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    flex  
    rounded-lg  
    items-center  
    justify-center  
    p-6 
    duration-300  // Smooth transition
    flex-col  // Add flex-column to align content vertically
    text-center  // Ensure text is horizontally centered
  `}
`;

// Step Title Styles
const StepTitle = styled.h4`
  ${tw`
    text-black 
    text-lg 
    font-semibold  
    mt-4
    text-center  // Center the text horizontally
  `}
`;

// Step Description Styles
const StepDescription = styled.p`
  ${tw`
    w-10/12
    text-xs 
    md:text-sm 
    text-center  // Center the text horizontally
    text-gray-800 
    mx-auto  // Make sure the text is centered with automatic margins
  `}
`;

// Step Icon Styles
const StepIcon = styled.span`
  ${tw`
    text-red-500
    text-3xl 
    group-hover:text-black  // Change icon color on hover
    duration-300  // Smooth transition for hover effect
  `}
`;

// CSS for fade-up animation with delay
const fadeUpAnimation = `
  @keyframes fadeUp {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const AnimatedStepContainer = styled.div<{ delay: number }>`
  animation: fadeUp 1s ease-out forwards;
  animation-delay: ${(props) => props.delay}s;
  opacity: 0;
  transform: translateY(30px);
  ${fadeUpAnimation}
`;

// BookingSteps Component
export function BookingSteps() {
  const [isVisible, setIsVisible] = useState(false);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  // IntersectionObserver to detect when the element is in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when the element is in view
        }
      },
      { threshold: 0.5 }
    );

    // Observe each step container
    stepRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      stepRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <Container>
      <Title>How it works</Title>
      <StepsContainer>
        {[1, 2, 3].map((index) => (
          <StepContainer
            key={index}
            ref={(el) => (stepRefs.current[index - 1] = el)}
          >
            {isVisible && (
              <AnimatedStepContainer delay={index * 0.5}>
                <Step>
                  <StepIcon>
                    {index === 1 && <FontAwesomeIcon icon={faMapMarkedAlt} />}
                    {index === 2 && <FontAwesomeIcon icon={faCalendarAlt} />}
                    {index === 3 && <FontAwesomeIcon icon={faCarSide} />}
                  </StepIcon>
                </Step>
                <StepTitle>
                  {index === 1
                    ? 'Choose Your Location'
                    : index === 2
                    ? 'Pick Up Date'
                    : 'Book Your car'}
                </StepTitle>
                <StepDescription>
                  {index === 1
                    ? 'Find the nearest ride to book.'
                    : index === 2
                    ? 'Let us know when you want it.'
                    : 'You like it? It\'s yours. Just Book it.'}
                </StepDescription>
              </AnimatedStepContainer>
            )}
          </StepContainer>
        ))}
      </StepsContainer>
    </Container>
  );
}
