import React from "react";

// Define the type for the service item
interface ServiceItemType {
  id: string | number;
  icon: string;
  title: string;
  desc: string;
}

// Service data array
const serviceData: ServiceItemType[] = [
  {
    id: 1,
    title: "Fast Contract Management",
    icon: "ri-check-double-line",
    desc: "Expedite the processing of leasing documents, ensuring quick approval and streamlined documentation management.",
  },
  {
    id: 2,
    title: "Maintenance Scheduling",
    icon: "ri-tools-line",
    desc: "Swiftly schedule and track maintenance requests, ensuring timely service.",
  },
  {
    id: 3,
    title: "Unlimited Miles Car Rental",
    icon: "ri-roadster-line",
    desc: "Unlimited mileage options for car rentals, ensuring clients can travel without worrying about additional costs.",
  },
  {
    id: 4,
    title: "Fast & Easy Booking",
    icon: "ri-timer-flash-line",
    desc: "Fast booking process for cars & services.",
  },
  {
    id: 5,
    title: "24/7 Customer Support",
    icon: "ri-customer-service-2-line",
    desc: "Round-the-clock support through a fast and responsive chat.",
  },
  {
    id: 6,
    title: "Exclusive Offers and Discounts.",
    icon: "ri-discount-percent-line",
    desc: "Exclusive discounts and special offers.",
  },
];

const ServicesList: React.FC = () => {
  return (
    <div className="section">
      <div className="row">
        <div className="col-lg-12 mb-5 text-center">
          <h6 className="section__subtitle"> Discover our</h6>
          <h2 className="section__title">Popular Services</h2>
        </div>
        {serviceData.map((item: ServiceItemType) => (
          <ServiceItem item={item} key={item.id} />
        ))}
        <style>
          {`
          .section {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 130px;
            padding-top: 30px;
            margin: auto;
          }
  
          .service__item span i {
            font-size: 2.5rem;
            color: rgba(239,68,68,1);
          }

          .service__item h6 {
            font-size: 1.2rem;
            font-weight: 600;
            transition: 0.3s;
          }

          .service__item h6:hover {
            color: rgba(239,68,68,1);
          }

          @media only screen and (max-width: 768px) {
            .service__item h6 {
              font-size: 1.1rem;
            }
          }

          .section__title {
             color: rgba(239,68,68,1);
            font-weight: 600;
            font-size: 2rem;
          }

          .section__subtitle {
            font-weight: 600;
            font-size: 1.2rem;
          }
          `}
        </style>
      </div>
    </div>
  );
};


const ServiceItem: React.FC<{ item: ServiceItemType }> = ({ item }) => (
  <div className="col-lg-4 col-md-4 col-sm-6 mb-3">
    <div className="service__item">
      <span className="mb-3 d-inline-block">
        <i className={item.icon} />
      </span>

      <h6>{item.title}</h6>
      <p className="section__description">{item.desc}</p>
    </div>
  </div>
);

export default ServicesList;
