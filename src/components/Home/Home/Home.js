import React from 'react';
import Doctors from './Doctors/Doctors';
import Services from './Services/Services';
import Slide from './Slide/Slide';

const Home = () => {
  return (
    <div>
      {/* <Doctors></Doctors> */}
      <Slide></Slide>
      <Services></Services>
    </div>
  );
};

export default Home;