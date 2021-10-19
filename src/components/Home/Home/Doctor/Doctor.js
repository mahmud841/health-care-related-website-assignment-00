import React from 'react';
import './Doctor.css';

const Doctor = ({doctor}) => {
  const  { name, img, specialist, address, practice, description} = doctor;
  return (
    <div className=" cart-container pb-3">
      <div className="doctor-img">
        <img className="img-fluid" src={img} alt="" />
      </div>
      <div>
        <h5>Name:{name} </h5>
        <h5>Specialist:{specialist} </h5>
        <p>Practising In:{practice} </p>
        <p><small>Description:{description} </small></p>
        <address>Address:{address}</address>
      </div>
      
    </div>
  );
};

export default Doctor;