import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
  //*******************destructuring properties****************** 
  const { id, name, img, title, description } = service;
  return (

    <div className="card-container">
      <div className="">
        <div className="">
          <img src={img} alt="" />
        </div>

        <div className="">
          <h2>{name} </h2>
          <h5>{title} </h5>
          <p>{description}</p>
          <Link to={`/service/${id}`}>
            <button style={{ color: 'black' }} className="btn btn-secondary">View Details {name.toUpperCase()} </button>
          </Link>
        </div>
      </div>



    </div>
  );
};

export default Service;