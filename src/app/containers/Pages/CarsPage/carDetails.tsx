import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import BookingForm from "./BookingForm";
import PaymentMethod from "./PaymentMethod";
import carData from "./carData";

// TypeScript interfaces for car data
interface Car {
  id: number;
  brand: string;
  rating: number;
  carName: string;
  imgUrl: string;
  model: string;
  price: number;
  speed: string;
  gps: string;
  seatType: string;
  automatic: string;
  description: string;
}

const CarDetails = () => {
  const { slug } = useParams(); 

  // Find the car based on the slug
  const singleCarItem = carData.find((item) => item.carName === slug);

  // Scroll to top when car details are loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleCarItem]); // This effect will run whenever `singleCarItem` changes

  // Handle case where car is not found
  if (!singleCarItem) {
    return <div>Car not found</div>; // or a custom error page
  }

  return (
    <div className="w-100 pt-4" style={{ backgroundColor: "#f7f7f7", borderRadius: ".5rem" }} title={singleCarItem.carName}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={singleCarItem.imgUrl} alt={singleCarItem.carName} className="w-100" />
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{singleCarItem.carName}</h2>

                <div className="d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    ${singleCarItem.price}.00 / Day
                  </h6>

                  <span className="d-flex align-items-center gap-2">
                    <span style={{ color: "rgba(239,68,68,1)" }}>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    ({singleCarItem.rating} ratings)
                  </span>
                </div>

                <p className="section__description">{singleCarItem.description}</p>

                <div className="d-flex align-items-center mt-3" style={{ columnGap: "4rem" }}>
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-roadster-line" style={{ color: "rgba(239,68,68,1)" }}></i>{" "}
                    {singleCarItem.model}
                  </span>

                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-settings-2-line" style={{ color: "rgba(239,68,68,1)" }}></i>{" "}
                    {singleCarItem.automatic}
                  </span>

                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-timer-flash-line" style={{ color: "rgba(239,68,68,1)" }}></i>{" "}
                    {singleCarItem.speed}
                  </span>
                </div>

                <div className="d-flex align-items-center mt-3" style={{ columnGap: "2.8rem" }}>
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-map-pin-line" style={{ color: "rgba(239,68,68,1)" }}></i>{" "}
                    {singleCarItem.gps}
                  </span>

                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-wheelchair-line" style={{ color: "rgba(239,68,68,1)" }}></i>{" "}
                    {singleCarItem.seatType}
                  </span>

                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-building-2-line" style={{ color: "rgba(239,68,68,1)" }}></i>{" "}
                    {singleCarItem.brand}
                  </span>
                </div>
              </div>
            </Col>

            <Col lg="7" className="mt-5">
              <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold">Booking Information</h5>
                <BookingForm />
              </div>
            </Col>

            <Col lg="5" className="mt-5">
              <div className="payment__info mt-5">
                <h5 className="mb-4 fw-bold">Payment Information</h5>
                <PaymentMethod />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default CarDetails;
