import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Carousel from '../../components/carousel/carousel';
import Searchbar from '../../components/searchbar/searchbar';
import CardGrid from '../../components/cards/card-grid';
import Cardlisting from '../../components/cards/card-listing';
import CardFeatured from '../../components/cards/card-featured';
import './home.css';
import Jumbotron from '../../components/jumbotron/jumbotron';
import Cardblog from '../../components/cards/card-blog';
import CardTestimonial from '../../components/cards/card-testimonials';
import Footer from '../../components/footer/footer';

function home() {
  return (
    <div>
        <Navbar/>
        <br></br>
        <Carousel/>
        <br></br>
        <Searchbar/>
        <br></br>
        <div className="title">
            <h7 className="pre-heading">WHAT WE DO</h7>
            <h2 className="heading">OUR MAIN FOCUS</h2>
        </div>
        <CardGrid/>
        <div className="title">
            <h7 className="pre-heading">OUR PROPERTY</h7>
            <h2 className="heading">LATEST PROPERTY</h2>
        </div>
        <Cardlisting/>
        <div className="title">
            <h7 className="pre-heading">PROPERTIES</h7>
            <h2 className="heading">FEATURED PROPERTIES</h2>
        </div>
        <CardFeatured/>
        <Jumbotron/>
        <div className="title">
            <h7 className="pre-heading">BLOG</h7>
            <h2 className="heading">OUR BLOG</h2>
        </div>
        <Cardblog/>
        <div className="title">
            <h7 className="pre-heading">Our Testimonial</h7>
            <h2 className="heading">Client Testimonial</h2>
        </div>
        <CardTestimonial/>
        <Footer/>
    </div>
  )
}

export default home