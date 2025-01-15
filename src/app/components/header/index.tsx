import React from "react";
import { Container } from "reactstrap";
import "./header.css";

// Define prop types
interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <section className="common__section mb-5">
      <Container className="text-center">
        <h1 className="text-light">{title}</h1>
        <h3 className="text-light">{subtitle}</h3>
      </Container>
    </section>
  );
};

export default Header;
