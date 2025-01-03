import React from "react";
import { Container, Row } from "reactstrap";
import "./style.css";
import ServicesList from "./servicesList";

export default function ServicesPage() {
  return (
    <div className="w-100">
      <div className="style-section mb-5">
        <Container className="text-center">
          <h1 className="text-light">Our Services</h1>
          <h3 className="text-light">Explore our comprehensive range of services</h3>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <ServicesList/>
          </Row>
        </Container>
      </div>
    </div>
  );
}
