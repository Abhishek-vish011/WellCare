// About.jsx
import React from 'react';

const AboutPage = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center text-primary mb-4">About Us</h1>

      <p className="lead text-center mb-5">
        Welcome to <strong>WellCare</strong>, your trusted platform for streamlined doctor availability and appointment scheduling.
      </p>

      <div className="mb-5">
        <h2 className="text-secondary mb-3">Our Mission</h2>
        <p>
          To revolutionize healthcare accessibility by providing a seamless digital solution where patients can:
        </p>
        <ul>
          <li>View real-time doctor availability</li>
          <li>Schedule appointments with ease</li>
          <li>Receive timely reminders and updates</li>
        </ul>
      </div>

      <div className="mb-5">
        <h2 className="text-secondary mb-3">What We Offer</h2>
        <ul>
          <li><strong>Doctor Availability Dashboard:</strong> Instantly check which doctors are available based on specialty, location, and timing.</li>
          <li><strong>Smart Appointment Booking:</strong> Book appointments in just a few clicks — no calls, no queues.</li>
          <li><strong>Automated Allocation System:</strong> Appointments are assigned fairly and efficiently to reduce wait times.</li>
          <li><strong>Secure Patient Records:</strong> All interactions and data are handled with top-tier privacy and security.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-secondary mb-3">Who We Serve</h2>
        <p>
          Whether you're a patient seeking prompt medical attention or a healthcare provider aiming to manage appointments better,
          our platform is designed with you in mind.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
