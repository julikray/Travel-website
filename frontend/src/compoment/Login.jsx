import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./signup.css";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        formData
      );
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="SignUp">
      <div className="Sign_form">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button className='btnSign'  type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
