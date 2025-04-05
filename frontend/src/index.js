import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import Navbar from './landing_page/Navbar';
import Hero from './landing_page/Hero/HomePage';
import About from './landing_page/About/AboutPage';
import FindDoctor from './landing_page/FindDoctor/DoctorPage';
import Investor from './landing_page/Investor/InvestorPage';
import Career from './landing_page/Career/CareerPage';
import Contact from './landing_page/Contact/ContactPage';
import NotFound from './landing_page/NotFound';
import Footer from './landing_page/Footer';
import AppointForm from './landing_page/Appointment/AppointForm';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar/>
   <Routes>
     <Route path="/" element={<Hero/>}/>
     <Route path="/searchdoctors" element={<FindDoctor/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/investor" element={<Investor/>}/>
     <Route path="/career" element={<Career/>}/>
     <Route path="/contact" element={< Contact/>}/>
     <Route path="/appointment" element={<AppointForm/>}/>

     <Route path="*" element={<NotFound/>}/>
   </Routes>
    <Footer/>
    </BrowserRouter>
);


