import React from 'react';
import './card.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faBed} from '@fortawesome/free-solid-svg-icons';
import '../../fontawesome';

function cardblog() {
  return (
    //vedant
    <div className="container_property1">
    <div className="card_property">
      <div className="card_property-header">
        <img src="assets/house1.jpg" alt="rover"/>
      </div>
      <div className="card_property-body">
        <div className='card_outer'>
          <h5 className='card_inner'>Why live in London</h5>
        </div>
      </div>
    </div>
    <div className="card_property">
      <div className="card_property-header">
        <img src="assets/house2.jpg" alt="ballons"/>
      </div>
      <div className="card_property-body">
        <div className='card_outer'>
          <h5 className='card_inner'>Live near Avengers HQ</h5>
        </div>
      </div>
    </div>
    <div className="card_property">
      <div className="card_property-header">
        <img src="assets/house3.jpg" alt="city" />
      </div>
      <div className="card_property-body">
        <div className='card_outer'>
          <h5 className='card_inner'>Buying a Mansion</h5>
        </div>
      </div>
    </div>
  </div>
  )
}

export default cardblog;