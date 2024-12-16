import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../responsive';
import menuStyles from "./menuStyles";
import { Link } from "react-router-dom";

const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
  `};
`;

const NavItem = styled.li<{ menu?: any }>`
  ${tw`
    text-sm
    md:text-base
    text-black
    font-semibold
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-700
  `};
  ${({ menu }) => menu && css`
    ${tw`
      text-white
      text-xl
      mb-3
      focus:text-white
    `}
  `}
  a {
    text-decoration: none; /* Removes underline */
    color: inherit; /* Ensures link uses parent text color */
  }
`;

export function NavItems() {
    const isMobile= useMediaQuery({maxWidth: SCREENS.sm })
    if(isMobile)

    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          <NavItem menu>
            <Link to="/">Home</Link> {/* Use Link instead of anchor */}
          </NavItem>
          <NavItem menu>
            <Link to="/cars">Cars</Link> 
          </NavItem>
          <NavItem menu>
            <Link to="/">Maintenance</Link> 
          </NavItem>
          <NavItem menu>
            <Link to="/">Contact</Link> 
          </NavItem>
          <NavItem menu>
            <Link to="/">Login</Link> 
          </NavItem>
        </ListContainer>
      </Menu>
    );

  // Desktop view with standard navigation
  return (
    <ListContainer>
      <NavItem>
        <Link to="/">Home</Link> {/* Use Link instead of anchor */}
      </NavItem>
      <NavItem>
        <Link to="/cars">Cars</Link> 
      </NavItem>
      <NavItem>
        <Link to="/maintenance">Maintenance</Link> 
      </NavItem>
      <NavItem>
        <Link to="/">Contact</Link> 
      </NavItem>
      <NavItem>
        <Link to="/">Login</Link> 
      </NavItem>
    </ListContainer>
  );
}
