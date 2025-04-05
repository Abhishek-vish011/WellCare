import React from "react";
import { Link } from "react-router-dom";
function DoctorPage() {
  return (
    <div>
      <div className="container mt-5">
       
          <div class="container-fluid">
            <form class="d-flex" role="search">
              <input
                class="form-control me-3"
                type="search"
                placeholder="Search for Doctor's Specialities and Hospitals"
                aria-label="Search"
                style={{width:"30rem", height:"3rem"}}
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <p style={{margin:'1rem'}}>To get appointment of best doctor enter here..</p>

          <div className="specialList text-center bg-primary text-light rounded">
            <h2 className="p-3">To Book Appointments</h2>
          </div>
    
      </div>
      <div className="conatiner doctorList">
        <div className="row">
          <div className="col-lg-4 col-sm-12 mt-3">
            <div class="card" style={{ width: "25rem" }}>
              <img
                src="/media/Images/Doctor1.jpg"
                class="card-img-top"
                alt="load"
              />
              <div class="card-body">
                <h5 class="card-title">Dr. Arvind Joshi</h5>
                <p class="card-text">Internal Medicine</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <b>Experience:</b> 10+ Years
                </li>
                <li class="list-group-item">
                  <b>Gender:</b> Male
                </li>
              </ul>
              <div class="card-body">
                <button className="btn btn-primary">
                  <Link
                    to="/appointment"
                    class="card-link"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Book an Appointment
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 mt-3">
            <div class="card" style={{ width: "25rem" }}>
              <img
                src="/media/Images/Doctor22.jpg"
                class="card-img-top"
                alt="load"
              />
              <div class="card-body">
                <h5 class="card-title">Dr. HK Pande</h5>
                <p class="card-text">Urology</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <b>Experience:</b> 12+ Year
                </li>
                <li class="list-group-item">
                  <b>Gender:</b> Male
                </li>
              </ul>
              <div class="card-body">
                <button className="btn btn-primary">
                  <Link
                    to="/appointment"
                    class="card-link"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Book an Appointment
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 mt-3">
            <div class="card" style={{ width: "25rem" }}>
              <img
                src="/media/Images/Doctor3.avif"
                class="card-img-top"
                alt="load"
              />
              <div class="card-body">
                <h5 class="card-title">Dr. Anjali Sharma</h5>
                <p class="card-text">
                  Liver Transplant and Biliary Sciences, Robotic Surgery
                </p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <b>Experience:</b> 8+ Year
                </li>
                <li class="list-group-item">
                  <b>Gender:</b> Female
                </li>
              </ul>
              <div class="card-body">
                <button className="btn btn-primary">
                  <Link
                    to="/appointment"
                    class="card-link"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Book an Appointment
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-12 mt-5">
            <div class="card" style={{ width: "25rem" }}>
              <img
                src="/media/Images/Doctor4.avif"
                class="card-img-top"
                alt="load"
              />
              <div class="card-body">
                <h5 class="card-title">Dr. Harshita Khare</h5>
                <p class="card-text">
                  Medical Oncology, Cancer Care / Oncology
                </p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <b>Experience:</b> 15+ Year
                </li>
                <li class="list-group-item">
                  <b>Gender:</b> Female
                </li>
              </ul>
              <div class="card-body">
                <button className="btn btn-primary">
                  <Link
                    to="/appointment"
                    class="card-link"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Book an Appointment
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 mt-5">
            <div class="card" style={{ width: "25rem" }}>
              <img
                src="/media/Images/Doctor5.jpg"
                class="card-img-top"
                alt="load"
              />
              <div class="card-body">
                <h5 class="card-title">Dr. Sandeep Jat</h5>
                <p class="card-text">
                  Cardiac Sciences, Cardiology, Interventional Cardiology
                </p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <b>Experience:</b> 13+ Year
                </li>
                <li class="list-group-item">
                  <b>Gender:</b> Male
                </li>
              </ul>
              <div class="card-body">
                <button className="btn btn-primary">
                  <Link
                    to="/appointment"
                    class="card-link"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Book an Appointment
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 mt-5">
            <div class="card" style={{ width: "25rem" }}>
              <img
                src="/media/Images/Doctor6.jpg"
                class="card-img-top"
                alt="load"
              />
              <div class="card-body">
                <h5 class="card-title">Dr. Priyansh Rajput</h5>
                <p class="card-text">
                  Radiation Oncology, Cancer Care / Oncology
                </p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <b>Experience:</b> 10+ Year
                </li>
                <li class="list-group-item">
                  <b>Gender:</b> Male
                </li>
              </ul>
              <div class="card-body">
                <button className="btn btn-primary">
                  <Link
                    to="/appointment"
                    class="card-link"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Book an Appointment
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-12 mt-5">
            <div class="card" style={{ width: "25rem" }}>
              <img
                src="/media/Images/Doctor7.webp"
                class="card-img-top"
                alt="load"
              />
              <div class="card-body">
                <h5 class="card-title">Dr. Kritika Paal</h5>
                <p class="card-text">Nephrology, Kidney Transplant</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <b>Experience:</b> 5+ Year
                </li>
                <li class="list-group-item">
                  <b>Gender:</b> Female
                </li>
              </ul>
              <div class="card-body">
                <button className="btn btn-primary">
                  <Link
                    to="/appointment"
                    class="card-link"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Book an Appointment
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 mt-5">
            <div class="card" style={{ width: "25rem" }}>
              <img
                src="/media/Images/Doctor8.webp"
                class="card-img-top"
                alt="load"
              />
              <div class="card-body">
                <h5 class="card-title">Dr. Anjelina Jeth </h5>
                <p class="card-text">Obstetrics And Gynaecology</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <b>Experience:</b> 11+ Year
                </li>
                <li class="list-group-item">
                  <b>Gender:</b> Female
                </li>
              </ul>
              <div class="card-body">
                <button className="btn btn-primary">
                  <Link
                    to="/appointment"
                    class="card-link"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Book an Appointment
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 mt-5">
            <div class="card" style={{ width: "25rem" }}>
              <img
                src="/media/Images/Doctor9.webp"
                class="card-img-top"
                alt="load"
              />
              <div class="card-body">
                <h5 class="card-title">Dr. Monika Bhati</h5>
                <p class="card-text">Endocrinology & Diabetes</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <b>Experience:</b> 8+ Year
                </li>
                <li class="list-group-item">
                  <b>Gender:</b> Female
                </li>
              </ul>
              <div class="card-body">
                <button className="btn btn-primary">
                  <Link
                    to="/appointment"
                    class="card-link"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Book an Appointment
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-12 mt-5">
            <div class="card" style={{ width: "25rem" }}>
              <img
                src="/media/Images/Doctor10.jpg"
                class="card-img-top"
                alt="load"
              />
              <div class="card-body">
                <h5 class="card-title">Dr. Diya Chouhan</h5>
                <p class="card-text">Cardiac Surgery (CTVS), Cardiac Surgery</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <b>Experience:</b> 12+ Year
                </li>
                <li class="list-group-item">
                  <b>Gender:</b> Female
                </li>
              </ul>
              <div class="card-body">
                <button className="btn btn-primary">
                  <Link
                    to="/appointment"
                    class="card-link"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Book an Appointment
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 mt-5">
            <div class="card" style={{ width: "25rem" }}>
              <img
                src="/media/Images/Doctor11.jpg"
                class="card-img-top"
                alt="load"
              />
              <div class="card-body">
                <h5 class="card-title">Dr. Sushant Dhir</h5>
                <p class="card-text">ENT(Ear Nose Throat)</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <b>Experience:</b> 18+ Year
                </li>
                <li class="list-group-item">
                  <b>Gender:</b> Male
                </li>
              </ul>
              <div class="card-body">
                <button className="btn btn-primary">
                  <Link
                    to="/appointment"
                    class="card-link"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Book an Appointment
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 mt-5">
            <div class="card" style={{ width: "25rem" }}>
              <img
                src="/media/Images/Doctor12.jpg"
                class="card-img-top"
                alt="load"
              />
              <div class="card-body">
                <h5 class="card-title">Dr. Pooja Roy</h5>
                <p class="card-text">Neurosciences, Neurology</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <b>Experience:</b> 12+ Year
                </li>
                <li class="list-group-item">
                  <b>Gender:</b> Female
                </li>
              </ul>
              <div class="card-body">
                <button className="btn btn-primary">
                  <Link
                    to="/appointment"
                    class="card-link"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Book an Appointment
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorPage;
