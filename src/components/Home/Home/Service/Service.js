import React from 'react';
import './Service.css';

const Service = ({ service }) => {
  const { name, img, title } = service;
  return (

    <div className="col-lg-4 col-sm-6 col-12">
      <div className="img-container">
        <img src={img} alt="" />
      </div>

      <div className="service-container">
        <h1>{name} </h1>
        <h3>{title} </h3>
      </div>
      


    </div>
  );
};

export default Service;