import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const VerifyEmail = () => {
  const [formData, setFormData] = useState({
    email: "",
    code: "",
  });

  const { email, code } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = async (e) => {
    e.preventDefault();
    const User = {
      email,
      code,
    };
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify(User);
      const res = await axios.post("/auth/verify-user", body, config);
      alert(res.data.statusMessage);
    } catch (error) {
      alert(error.res.data);
    }
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <h3>Verify Email</h3>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => onChange(e)}
        />
      </div>

      <div className="form-group">
        <label>Verification Code</label>
        <input
          type="verificationcode"
          className="form-control"
          name="code"
          placeholder="Enter Verification"
          value={code}
          onChange={(e) => onChange(e)}
        />
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        Submit
      </button>
      <p className="forgot-password text-right">
        Click on to Sign In
        <Link className="nav-link" to={"/sign-in"}>
          Sign In?
        </Link>
      </p>
    </form>
  );
};

export default VerifyEmail;
