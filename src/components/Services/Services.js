import React from 'react';
import './Services.css';
import Service from '../Home/Home/Service/Service';




const services = [
  {
    img: "https://i.ibb.co/YLYWCyz/one.jpg",
    name: 'Dr Mahmud Hassan Khan',
    title: 'MBBS,FCPS. Orthopedic Surgery Department',
    decsription:'My fields, Mental health care'
  },
  {
    img: "https://i.ibb.co/DLVxPjj/seven.jpg",
    name: 'Dr Mahmud Hassan Khan',
    title: 'MBBS,FCPS. Orthopedic Surgery Department',
    decsription:'My fields, Mental health care'
  },
  {
    img: "https://i.ibb.co/DLVxPjj/seven.jpg",
    name: 'Dr Mahmud Hassan Khan',
    title: 'MBBS,FCPS. Orthopedic Surgery Department',
    decsription:'My fields, Mental health care'
  },
  {
    img: "https://i.ibb.co/DLVxPjj/seven.jpg",
    name: 'Dr Mahmud Hassan Khan',
    title: 'MBBS,FCPS. Orthopedic Surgery Department',
    decsription:'My fields, Mental health care'
  },
  {
    img: "https://i.ibb.co/DLVxPjj/seven.jpg",
    name: 'Dr Mahmud Hassan Khan',
    title: 'MBBS,FCPS. Orthopedic Surgery Department',
    decsription:'My fields, Mental health care'
  }
]

const Services = () => {
  return (
    <div >
      <h2 style={{color:'red'}}>Our Special Care </h2>
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