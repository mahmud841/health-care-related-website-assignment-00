import React from 'react';
import {useParams} from 'react-router';

const Private = () => {
  const {serviceId} = useParams();
  return (
    <div>
      <h3>This is protected routing:{serviceId} </h3>
    </div>
  );
};

export default Private;