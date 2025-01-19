import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
    relative
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
    color: rgba(239, 68, 68, 1); /* Active link color */
  `}
  
  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      color: inherit;
    }
  }
`;

const DropdownMenu = styled.div<{ isVisible: boolean }>`
  ${tw`
    flex
    flex-col
    bg-white
    shadow-lg
    p-3
    rounded-lg
  `};
  z-index: 100;
  position: absolute;
  top: 100%;
  right: 0;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

function useClickOutside(ref: React.RefObject<HTMLElement>, handler: Function) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
}

export function NavItems() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Check for login status when component mounts
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true); // If token exists, set login state
    }
  }, []); // This ensures it runs only once when the component mounts

  const handleLogin = () => {
    localStorage.setItem("token", "dummy-token"); // Set token after login
    setIsLoggedIn(true); // Immediately update state
    navigate("/dashboard");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false); // Update state immediately
    setDropdownVisible(false); // Close dropdown
    navigate("/login"); // Redirect to login page
  };

  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setDropdownVisible((prevState) => !prevState);
  };

  useClickOutside(dropdownRef, () => setDropdownVisible(false));

  return (
    <ListContainer>
      <NavItem isActive={location.pathname === "/"}><Link to="/">Home</Link></NavItem>
      <NavItem isActive={location.pathname === "/cars"}><Link to="/cars">Cars</Link></NavItem>
      <NavItem isActive={location.pathname === "/services"}><Link to="/services">Services</Link></NavItem>
      <NavItem isActive={location.pathname === "/contact"}><Link to="/contact">Contact</Link></NavItem>

      {/* Conditional rendering of Login or Dropdown */}
      {!isLoggedIn ? (
        <NavItem isActive={location.pathname === "/login"} onClick={handleLogin}>
          <Link to="#">Login</Link> {/* Prevent navigation to keep it in the button */}
        </NavItem>
      ) : (
        <NavItem isActive={location.pathname === "/dashboard"} onClick={toggleDropdown}>
          <Link to="#">User Menu</Link> {/* Prevent navigation on click */}
          <DropdownMenu ref={dropdownRef} isVisible={dropdownVisible}>
            <NavItem isActive={location.pathname === "/client-space"}><Link to="/client-space">Client Space</Link></NavItem>
            <NavItem isActive={location.pathname === "/notifications"}><Link to="/notifications">Notifications</Link></NavItem>
            <NavItem isActive={false} onClick={handleLogout}>Logout</NavItem>
          </DropdownMenu>
        </NavItem>
      )}
    </ListContainer>
  );
}
