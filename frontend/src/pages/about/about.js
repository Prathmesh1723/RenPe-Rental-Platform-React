//JSX for About page
import React from "react";
import "./about.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
function about() {
  return (
    <div className="about--page--content">
      <Navbar />
      <div className="about--us--box">
        <div className="page--header">ABOUT US</div>
        <div className="about--us--information">
          {/* ToDo: add content for About page later */}
          Weather you do a search for Zillow, Apartment.com or fmh you will
          notice that we beat our biggest competitors in their own game.
          <br></br>
          Don't take our word for it. Just look at our top rated 69 reviews
          google with a cummulative of 4.8 stars on average.
          <br></br>
          Our job is quite simple. We find you a house that you can safely call,
          Home.
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default about;
