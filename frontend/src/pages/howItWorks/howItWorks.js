import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./howItWorks.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
// import caro
function howItWorks() {
  return (
    <div className="how-it-works">
      <Navbar />
      <div className="how-it-works-text">How it Works? Take a look below</div>
      <ProgressBar animated now={20} />

      <Footer />
    </div>
  );
}

export default howItWorks;
