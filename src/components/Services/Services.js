import React from 'react';
import './Services.css';
import Service from '../Home/Home/Service/Service';




const services = [
  {
    img: "https://study.com/cimages/course-image/health-course_123943_small.jpg",
    name: 'Dr Mahmud Hassan Khan',
    title: 'MBBS,FCPS. Orthopedic Surgery Department',
    decsription:'My fields, Mental health care'
  },
  {
    img: "https://study.com/cimages/course-image/basic-nursing-training_413221_small.jpeg",
    name: 'Dr Mahmud Hassan Khan',
    title: 'MBBS,FCPS. Orthopedic Surgery Department',
    decsription:'My fields, Mental health care'
  },
  {
    img: "https://study.com/cimages/course-image/introduction-to-pharmacology_363030_small.jpeg",
    name: 'Dr Mahmud Hassan Khan',
    title: 'MBBS,FCPS. Orthopedic Surgery Department',
    decsription:'My fields, Mental health care'
  },
  {
    img: "https://study.com/cimages/course-image/nclex-rn-study-guide-practice_330333_small.jpg",
    name: 'Dr Mahmud Hassan Khan',
    title: 'MBBS,FCPS. Orthopedic Surgery Department',
    decsription:'My fields, Mental health care'
  },
  {
    img: "https://study.com/cimages/course-image/health-physical-education-lesson-plans_268803_small.jpg",
    name: 'Dr Mahmud Hassan Khan',
    title: 'MBBS,FCPS. Orthopedic Surgery Department',
    decsription:'My fields, Mental health care'
  },
  {
    img: "https://study.com/cimages/course-image/health-physical-education-lesson-plans_268803_small.jpg",
    name: 'Dr Mahmud Hassan Khan',
    title: 'MBBS,FCPS. Orthopedic Surgery Department',
    decsription:'My fields, Mental health care'
  },
  {
    img: "https://study.com/cimages/course-image/health-physical-education-lesson-plans_268803_small.jpg",
    name: 'Dr Mahmud Hassan Khan',
    title: 'MBBS,FCPS. Orthopedic Surgery Department',
    decsription:'My fields, Mental health care'
  }
]

const Services = () => {
  return (
    <div >
      <h2 style={{color:'gray' ,fontStyle:'italic'}}>Our Special Care </h2>
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