import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './signup.css'

const Signup = () => {
const navigate = useNavigate();


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/signup', formData);
 
      console.log(response.data);
      navigate('/login');
     
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <div className='SignUp'>



      <div className='Sign_form'>
      <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Name' />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange}  placeholder='e-mail' />
        </div>
        <div> 
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange}  placeholder='password' />
        </div>
        <button className='btnSign' type="submit">Signup</button>
      </form>

      </div>

    </div>
  );
};

export default Signup;




