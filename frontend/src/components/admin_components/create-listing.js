import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import './admin-components.css';
import { Button } from "react-bootstrap";


function submit(){
  alert("Listing created successfully!!")
  
}


function CreateListing() {

  
  return (
    <div>
      <Navbar/>
      <br/>
      <br/>
      <br/>
      <form className="createForm">
        <label>
          Type of Property:
          <input type="text" required/>
        </label>
        <label>
          No of rooms:
          <input type="text" required/>
        </label>
        <label>
          No of Baths:
          <input type="text" required/>
        </label>
        <label>Choose image of Property</label>
        <input
          type="file"
          id="avatar"
          name="avatar"
          accept="image/png, image/jpeg"
          required
        />
      </form>
      <button type="submit" className="btn btn-primary" onClick={submit}>Submit</button>
      <Footer/>
      </div>
  );
}

export default CreateListing;
