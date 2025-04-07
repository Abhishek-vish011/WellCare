// DoctorAppointmentForm.jsx

import React, { useState } from "react";

const AppointForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    doctor: "",
    reason: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Backend logic can be added here
    console.log("Appointment Data:", formData);
    setSubmitted(true);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg mx-auto" style={{ maxWidth: "1000px" }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Book Appointment</h3>

          {submitted ? (
            <div className="alert alert-success text-center">
              Appointment booked successfully!
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Preferred Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Preferred Time</label>
                <input
                  type="time"
                  className="form-control"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Select Doctor</label>
                <select
                  className="form-select"
                  name="doctor"
                  required
                  value={formData.doctor}
                  onChange={handleChange}
                >
                  <option value="">-- Choose --</option>
                  <option value="dr_smith">Dr. Smith</option>
                  <option value="dr_jones">Dr. Jones</option>
                  <option value="dr_kumar">Dr. Kumar</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Reason for Visit</label>
                <textarea
                  className="form-control"
                  rows="3"
                  name="reason"
                  required
                  value={formData.reason}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Book Appointment
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointForm;
