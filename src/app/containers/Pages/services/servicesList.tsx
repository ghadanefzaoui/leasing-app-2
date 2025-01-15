import React from "react";
import { Col, Button } from "reactstrap";
import "./style.css"; // Updated to reflect services styling
import { Link } from "react-router-dom";
import img01 from "../../../../assets/images/maint.jpg";
import img02 from "../../../../assets/images/assurance.jpg";
import img03 from "../../../../assets/images/carkey.jpg";
import img04 from "../../../../assets/images/Car_Replace.jpg";
import img05 from "../../../../assets/images/buyout.jpeg";
import img06 from "../../../../assets/images/gps.jpg";


// Define the types for the services item
interface ServiceItem {
  id: number;
  imgUrl: string;
  title: string;
  description: string;
}

// Example data for services
const servicesData: ServiceItem[] = [
  {
    id: 1,
    imgUrl: img01,
    title: "Maintenance",
    description: "Keep your vehicle running smoothly with our comprehensive maintenance packages.",
    // We offer routine checkups, oil changes, brake services, tire rotations, and more to ensure your car is always in optimal condition.
  },
  {
    id: 2,
    imgUrl: img02,
    title: "Insurance",
    description: "Get peace of mind with our tailored insurance packages.",
    //We provide a variety of insurance coverage options, including liability, collision, and comprehensive plans to keep your leased vehicle protected against any unforeseen circumstances.
  },
  {
    id: 3,
    imgUrl: img03,
    title: "International Leasing",
    description: "We offer international car leasing services so you can rent a vehicle in different countries.",
  },
  {
    id: 4,
    imgUrl: img04,
    title: "Vehicle Replacement",
    description: "Get a replacement vehicle while your car is being serviced.",
  },
  {
    id: 5,
    imgUrl: img05,
    title: "Buyout Option",
    description: "If you fall in love with your leased vehicle, simply make it yours.",
  },
  {
    id: 6,
    imgUrl: img06,
    title: "GPS & Telematics",
    description: "Stay connected and in control with our GPS and telematics services.",
    //Track the location of your vehicle, monitor fuel efficiency, and even schedule maintenance appointments directly through the system.
  },
];

const ServicesList: React.FC = () => {
  return (
    <>
      {servicesData.map((item: ServiceItem) => (
        <ServiceItemComponent item={item} key={item.id} />
      ))}
    </>
  );
};

// Define prop types for the ServiceItemComponent
interface ServiceItemProps {
  item: ServiceItem;
}

const ServiceItemComponent: React.FC<ServiceItemProps> = ({ item }) => {
  const { imgUrl, title, description } = item;

  return (
    <Col lg="4" md="6" sm="6" className="mb-5">
      <div className="services__item">
        <img src={imgUrl} alt="" className="w-100" />
        <div className="services__info p-3">
          <Link to={`/services/${title}`} className="services__title">
            {title}
          </Link>
          <p className="section__description mt-3">
            {description.length > 100 ? description.substr(0, 100) : description}
          </p>

          <Link to={`/services/${title}`} className="read__more">
            <Button>Details</Button>
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default ServicesList;
