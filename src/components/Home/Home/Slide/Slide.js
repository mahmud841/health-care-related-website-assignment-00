import React from 'react';
import { Carousel } from 'react-bootstrap';
import carousel1 from '../../../../Images/carousel1.jpg';
import carousel2 from '../../../../Images/carousel2.jpg';
import carousel3 from '../../../../Images/carousel3.jpg';


const Slide = () => {
  return (
    <>
    <Carousel>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={carousel1}
    alt="World Health Condition"
  />
  <Carousel.Caption>
    <h3>World Health Organization</h3>
    <p>Hospital, an institution that is built, staffed, and equipped for the diagnosis of disease</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={carousel2}
    alt="Second slide"
  />

  <Carousel.Caption>
    <h3>World Health Organization</h3>
    <p>Hospital, an institution that is built, staffed, and equipped for the diagnosis of disease</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={carousel3}
    alt="Third slide"
  />

  <Carousel.Caption>
    <h3>World Health Organization</h3>
    <p>Hospital, an institution that is built, staffed, and equipped for the diagnosis of disease</p>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>
  </>
  );
};

export default Slide;

