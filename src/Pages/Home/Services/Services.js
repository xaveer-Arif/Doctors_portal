import React from "react";
import Fluoride from "../../../Assets/images/fluoride.png";
import cavity from "../../../Assets/images/cavity.png";
import whitening from "../../../Assets/images/whitening.png";
import SingleServices from "./SingleServices";

const Services = () => {
  const servicesInfo = [
    {
      key: 1,
      img: `${Fluoride}`,
      name: "Fluoride Treatment",
      info: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      key: 2,
      img: `${cavity}`,
      name: "Cavity Filling",
      info: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      key: 3,
      img: `${whitening}`,
      name: "Teeth Whitening",
      info: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];
  return (
    <div>
      <h1>Our Service</h1>
      <h1>Services We Provide</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2  
       sm:grid-cols-1 gap-4 lg:mx-12 ">
        {
            servicesInfo.map(service => <SingleServices 
            key={service.id}
            service={service}
            />)
        }
      </div>
    </div>
  );
};

export default Services;
