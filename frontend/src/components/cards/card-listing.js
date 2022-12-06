import React from 'react';
import './card.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faBed} from '@fortawesome/free-solid-svg-icons';
import '../../fontawesome';

function cardlisting() {
  return (
    //vedant
    <div className="container_property1">
    <div className="card_property">
      <div className="card_property-header">
        <img src="assets/house1.jpg" alt="rover"  />
      </div>
      <div className="card_property-body">
        <div className='card_outer'>
          <h5 className='card_inner'>Duplex Apartment</h5>
          <h5 className="card-subtitle mb-2 text-muted">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$180000
          </h5>
        </div>
        <p>
          <i className="fa-sharp fa-solid fa-location-dot"></i>
          Malibu, California
        </p>
        <p>
            <FontAwesomeIcon icon= "fa-bed"/>{' '} 4 {' '}
            <FontAwesomeIcon icon= "fa-bath"/>{' '} 4 {' '}
            &nbsp;&nbsp;<FontAwesomeIcon icon= "fa-maximize"/>{' '} 1200sq ft. {' '}
        </p>
        <div className="user_property">
          <img src="https://studyinbaltics.ee/wp-content/uploads/2020/03/86.jpg"
            alt="user_property" />
          <div className="user_property-info">
            <h5>July Dec</h5>
            <small>Listed: 15 min Ago</small>
          </div>
        </div>
      </div>
    </div>
    <div className="card_property">
      <div className="card_property-header">
        <img src="assets/house2.jpg" alt="ballons" />
      </div>
      <div className="card_property-body">
        <div className='card_outer'>
          <h5 className='card_inner'>Duplex Apartment</h5>
          <h5 className="card-subtitle mb-2 text-muted">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$300000
          </h5>
        </div>
        <p>
          <i className="fa-sharp fa-solid fa-location-dot"></i>
          Manhattan, New York
        </p>
        <p>
            <FontAwesomeIcon icon= "fa-bed"/>{' '} 6 {' '}
            <FontAwesomeIcon icon= "fa-bath"/>{' '} 6 {' '}
            &nbsp;&nbsp;<FontAwesomeIcon icon= "fa-maximize"/>{' '} 2500sq ft. {' '}
        </p>
        <div className="user_property">
          <img src="https://studyinbaltics.ee/wp-content/uploads/2020/03/VxDQx_gA.jpg"
            alt="user_property" />
          <div className="user_property-info">
            <h5>Eyup Ucmaz</h5>
            <small>Listed: 2h Ago</small>
          </div>
        </div>
      </div>
    </div>
    <div className="card_property">
      <div className="card_property-header">
        <img src="assets/house3.jpg" alt="city" width="200px" height="200px" />
      </div>
      <div className="card_property-body">
        <div className='card_outer'>
          <h5 className='card_inner'>Duplex Apartment</h5>
          <h5 className="card-subtitle mb-2 text-muted">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$200000
          </h5>
        </div>
        <p>
          <i className="fa-sharp fa-solid fa-location-dot"></i>
          Miami, Florida
        </p>
        <p>
            <FontAwesomeIcon icon= "fa-bed"/>{' '} 4 {' '}
            <FontAwesomeIcon icon= "fa-bath"/>{' '} 4 {' '}
            &nbsp;&nbsp;<FontAwesomeIcon icon= "fa-maximize"/>{' '} 1200sq ft. {' '}
        </p>
        <div className="user_property">
          <img src="https://studyinbaltics.ee/wp-content/uploads/2020/03/3799Ffxy.jpg" alt="user_property" />
          <div className="user_property-info">
            <h5>Carrie Brewer</h5>
            <small>Listed: 3h Ago</small>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default cardlisting;