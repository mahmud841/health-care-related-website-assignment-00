import React from 'react';
import './Service.css';

const Service = ({ service }) => {
  const { name, img, title } = service;
  return (

    // <div className="col-lg-4 col-sm-6 col-12 main-container">
    <div className=" main-container">
     <div className="">
     <div className="">
        <img src={img} alt="" />
      </div>

      <div className="">
        <h5>{name} </h5>
        <p>{title} </p>
      </div>
     </div>
      


    </div>
  );
};

export default Service;