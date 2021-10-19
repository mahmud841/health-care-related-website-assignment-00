import React from 'react';
import './Services.css';
import Service from '../Home/Home/Service/Service';




const services = [
  {
    img: "https://study.com/cimages/course-image/health-course_123943_small.jpg",
    name: 'Principle of Health',
    title: 'MBBS,FCPS. Orthopedic Surgery Department',
    description:'Health 101: Principles of Health has been evaluated and recommended for 3 semester hours and may be transferred to over 2,000 colleges and universities. Youll learn from expert instructors, and the course is available to study at any time. Finishing this course allows you to apply for transfer credit, which can save you money on your degree.'
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