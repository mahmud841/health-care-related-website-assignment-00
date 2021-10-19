import React from 'react';
import './Services.css';
import  {  useState, useEffect } from 'react';
import Service from '../Home/Home/Service/Service';


const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
      fetch('services.json')
      .then(res => res.json())
    .then(data => setServices(data))
  },[])
  return (
    <div >
      <h1 style={{color:'gray',fontStyle:'italic'}}>Our Special Care </h1>
      <div>
        {
         services.map(service => <Service
         key={service.name}
         service={service}
         ></Service> )
        }
      </div>
    </div>
  );
};

export default Services;