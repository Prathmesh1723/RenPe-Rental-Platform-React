import React from "react";
import "./contact.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
function contact() {
  return (
    <div>
      <Navbar />
      <div className="contact--us--box">
        <div className="Contact-us-header">Contact us</div>
        <div className="contatc-form">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else. Your details
              </Form.Text>
            </Form.Group>
            <InputGroup>
              {/* className="mb-3" */}
              <Form.Group>
                <Form.Label>Write to us your enquiry</Form.Label>
                <Form.Control id="Input" placeholder="Write queries here" />
                <Form.Text className="text-muted">
                  We'll get back to you as soon as possible
                </Form.Text>
              </Form.Group>
            </InputGroup>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default contact;
