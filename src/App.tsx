import React, { useEffect } from "react";
import styled from 'styled-components';
import tw from 'twin.macro';
import './App.css';
import { HomePage } from './app/containers/HomePage';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AppContainer = styled.div`
${tw`
w-full
h-full
flex
flex-col
`}
`

function App() {

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  
  return (
    <AppContainer>
      <HomePage/>
    </AppContainer>
  );
}

export default App;
