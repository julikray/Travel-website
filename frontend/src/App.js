import React from 'react';
import Navbar from "./compoment/Navbar";
import Footer from "./compoment/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './compoment/Home';
import About from './compoment/About';
import Package from './compoment/Package';
import Book from './compoment/Book';
import Login from './compoment/Login';
import Signup from './compoment/SignUp';



function App() {
 

  return (
    <BrowserRouter>
   
      <Navbar />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/package" element={<Package />} />
        <Route path='/book' element={<Book/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>

   
  );
}

export default App;