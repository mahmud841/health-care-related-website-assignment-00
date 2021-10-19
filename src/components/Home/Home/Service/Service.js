import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
  const { id, name, img, title, description } = service;
  return (

    // <div className="col-lg-4 col-sm-6 col-12 main-container">
    <div className="cart-container">
     <div className="">
     <div className="">
        <img src={img} alt="" />
      </div>

      <div className="">
        <h2>{name} </h2>
        <h5>{title} </h5>
        <p>{description}</p>
        <Link to={`/service/${id}`}>
      <button className="btn btn-warning">View Details </button>
      </Link>
      </div>
     </div>
      


    </div>
  );
};

export default Service;