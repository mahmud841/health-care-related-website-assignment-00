import React from 'react';
import './Service.css';

const Service = ({ service }) => {
  const { name, img, title, description } = service;
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
        <p><small>{description} </small></p>
        <button>View Details </button>
      </div>
     </div>
      


    </div>
  );
};

export default Service;