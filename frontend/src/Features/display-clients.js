/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from 'react';
import useRequestMaker from '../hooks/request-maker';
import { useSelector } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import '../css/display-homes.css'



function DisplayClients({handleHomeDrop}) {
  const [homesToSchedule, setHomesToSchedule] = useState([])

  const homes = useSelector(state => state.homes);

  const handleState = (home) => {
   setHomesToSchedule(prev => [...prev, home]);
  };


  return (
    <div className='container-fluid'>
      <div className="row">
        {homes.map(home => (
          <div key={home._id} className="col-4">
            <div className="card my-3" style={{width: "18rem"}}>
              <div className="card-body">
                <h5 className="card-title">{home.name}</h5>
                <p className="card-text">{home.address.street}, {home.address.city}, {home.address.state}, {home.address.zip}</p>
                <a href='/manage' className="btn btn-primary">Manage</a>
              </div>
              </div>
          </div>
        ))}
      </div>
    </div>
    
  
  );
}

export default DisplayClients;
