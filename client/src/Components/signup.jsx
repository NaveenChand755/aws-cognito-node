import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
          const newUser = {
              username,
              email,
              password
          }
          try {
              const config = {
                  headers:{
                      'Content-Type':'application/json'
                  }
              }
              const body = JSON.stringify(newUser)
              const res = await axios.post('/auth/signup', body , config)
              alert(res.data.statusMessage)
          } catch (error) {
              alert(error.res.data)
          }
    }

  return (
    <form onSubmit ={e => onSubmit(e)} >
      <h3>Sign Up</h3>

      <div className="form-group">
        <label>Full name</label>
        <input
          type="text"
          name="username"
          className="form-control"
          placeholder="Full name"
          value={username}
          onChange={(e) => onChange(e)}
        />
      </div>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => onChange(e)}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => onChange(e)}
        />
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        Sign Up
      </button>
      <p className="forgot-password text-right">
        Click on to Verify email{" "}
        <Link className="nav-link" to={"/verify-email"}>
          Verify Email?
        </Link>
      </p>
    </form>
  );
};

export default SignUp;
