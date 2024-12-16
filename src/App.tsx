import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Navbar } from "./app/components/navbar";
import { Footer } from "./app/components/footer";
import RoutesConfig from "./router";

const AppContainer = styled.div`
${tw`
flex
flex-col
items-center
overflow-x-hidden
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
    <Router>
    <Navbar/>
      <RoutesConfig/>
    <Footer/>
    </Router>
    </AppContainer>
  );
}

export default App;
