import React, { Component } from 'react'
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer'
import "./login.css"

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleSubmit(e) {
        e.preventDefault();
        const { email, password } = this.state;
        console.log(email, password);
        fetch("http://localhost:5000/login-user", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "userRegister");
            if (data.status == "ok") {
              alert("login successful");
              window.localStorage.setItem("token", data.data);
              window.location.href = "./userDetails";
            }
          });
      }
    render() {
    return (
      <div>
      <Navbar/>
      <form className="login" onSubmit={this.handleSubmit}>
        <h3>Sign In to RentPe</h3>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => this.setState({ email: e.target.value })}   
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
          <div>
              <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
            </label>
            </div>
            <div className='remember'>
              <p className="forgot-password text-right">
            Forgot <a href="#">password</a>?
            </p>
            </div>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right newUser">
          New user? <a href="#">Sign Up</a>
        </p>
      </form>
      <Footer />
      </div>
    )
  }
}