import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../responsive';
import menuStyles from "./menuStyles";
import { Link, useLocation } from "react-router-dom"; // Import useLocation hook to access the current location

const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
  `};
`;

const NavItem = styled.li<{ menu?: any, isActive: boolean }>`
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
  `};
  ${({ menu }) => menu && css`
    ${tw`
      text-white
      text-xl
      mb-3
      focus:text-white
    `};
  `}
  
  ${({ isActive }) => isActive && css`
    color: rgba(239, 68, 68, 1); /* Apply active color */
  `}
  
  a {
    text-decoration: none; /* Removes underline */
    color: inherit; /* Ensures link uses parent text color */
    &:hover {
      color: inherit; /* Prevent hover color change */
    }
  }
`;

export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  const location = useLocation(); // Get current location

  if (isMobile)
    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          <NavItem menu isActive={location.pathname === "/"}> {/* Check if the current path is "/" */}
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem menu isActive={location.pathname === "/cars"}> {/* Check if the current path is "/cars" */}
            <Link to="/cars">Cars</Link>
          </NavItem>
          <NavItem menu isActive={location.pathname === "/services"}> {/* Check if the current path is "/services" */}
            <Link to="/services">Services</Link>
          </NavItem>
          <NavItem menu isActive={location.pathname === "/contact"}> {/* Check if the current path is "/contact" */}
            <Link to="/contact">Contact</Link>
          </NavItem>
          <NavItem menu isActive={location.pathname === "/login"}> {/* Check if the current path is "/login" */}
            <Link to="/login">Login</Link>
          </NavItem>
        </ListContainer>
      </Menu>
    );

  // Desktop view with standard navigation
  return (
    <ListContainer>
      <NavItem isActive={location.pathname === "/"}> {/* Check if the current path is "/" */}
        <Link to="/">Home</Link>
      </NavItem>
      <NavItem isActive={location.pathname === "/cars"}> {/* Check if the current path is "/cars" */}
        <Link to="/cars">Cars</Link>
      </NavItem>
      <NavItem isActive={location.pathname === "/services"}> {/* Check if the current path is "/services" */}
        <Link to="/services">Services</Link>
      </NavItem>
      <NavItem isActive={location.pathname === "/contact"}> {/* Check if the current path is "/contact" */}
        <Link to="/contact">Contact</Link>
      </NavItem>
      <NavItem isActive={location.pathname === "/login"}> {/* Check if the current path is "/login" */}
        <Link to="/login">Login</Link>
      </NavItem>
    </ListContainer>
  );
}
