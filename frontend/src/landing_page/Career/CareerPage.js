import React from "react";

function CareerPage() {
  return (
    <div>
        <div>
        <img style={{width:"100%"}} src="/media/Images/Opportunity.webp" alt="load"/>
        </div>
      <div className="container mt-5">
        <div className="row text-center">
            <h2 className="text-primary">Wellcare Medical Department for Good</h2>
            <h2  className="text-primary">Today, Tomorrow, Always.</h2>
            <p>At Fortis, our vision is to create a world-class integrated healthcare delivery system in India, entailing the finest medical skills combined with compassionate patient care.                
            <br/>Empowered by our values - Patient centricity, Teamwork, Ownership, Innovation, and Integrity, we are transforming care across our hospital network.</p>
        </div>
        <div className="row">
          <div className="col-lg-6 col-sm-12 mt-3">
            <div class="card text-bg-dark">
              <img style={{opacity:"0.5"}} src="/media/Images/Nursing.jpg" class="card-img" alt="..." />
              <div class="card-img-overlay">
                <h2 class="card-title">Nursing</h2>
                <p class="card-text">
                Find the nursing role that fits your professional goals with us
                </p>
                <p class="card-text">
                  <button className="btn" style={{backgroundColor:"#fbd0dd"}}>Click Here to Apply</button>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 mt-3">
            <div class="card text-bg-dark">
              <img style={{opacity:"0.5"}} src="/media/Images/technicians.jpg" class="card-img" alt="..." />
              <div class="card-img-overlay">
                <h2 class="card-title">Technicians</h2>
                <p class="card-text">
                Explore careers in Radiology, Diagnostic, Physiotherapy, Nutrition, Ophthalmology, Audio, Dental, Mental Wellness, Renal practices.
                </p>
                <p class="card-text">
                  <button className="btn" style={{backgroundColor:"#fbd0dd"}}>Click Here to Apply</button>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-sm-12 mt-3">
            <div class="card text-bg-dark">
              <img style={{opacity:"0.5"}} src="/media/Images/medicsup.jpg" class="card-img" alt="..." />
              <div class="card-img-overlay">
                <h2 class="card-title">Medical Supports</h2>
                <p class="card-text">
                Explore careers in Medical Administration, Clinical Research, Bio medical engineering, Clinical Pharmacology, Blood Bank functions
                </p>
                <p class="card-text">
                  <button className="btn" style={{backgroundColor:"#fbd0dd"}}>Click Here to Apply</button>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 mt-3">
            <div class="card text-bg-dark">
              <img style={{opacity:"0.5"}} src="/media/Images/clinic.webp " class="card-img" alt="..." />
              <div class="card-img-overlay">
                <h2 class="card-title">Clinicians</h2>
                <p class="card-text">
                Explore jobs for practicing clinicians across specialties and Fortis Hospitals
                </p>
                <p class="card-text">
                  <button className="btn" style={{backgroundColor:"#fbd0dd"}}>Click Here to Apply</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerPage;
