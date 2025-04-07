import React from "react";

function ContactPage() {
  return (
    <div>
      <div className="container">
        <div className="my-5">
          <h2 className="text-primary">Contact Us</h2>
          <p style={{fontWeight:"bold", color:"gray"}}>For all types of Queries</p>
        </div>
        <div className="my-5">
          <h5>Public Relation Officers</h5>
          <p>Contact No 0755 2742212-16 (Extn 1105,1108,1127)</p>
        </div>
        <div className="my-5">
          <h5>For Appointment Related Queries</h5>
          <p>Contact No 9205-010</p>
        </div>
        <div className="my-5">
          <h5>Assist. Administrative Officer </h5>
          <p>Contact No 0755 2742212-16 (Extn 6507)</p>
        </div>
        <div className="my-5">
          <h5>Helpline No</h5>
          <p> 0755 2740875 (24 Hours)</p>
        </div>
        <div className="row">
            <div className="col-lg-4 col-sm-12">
                <h5>For feedback/complaints please write to:</h5>
                <a style={{color:"pink", fontSize:"20px"}} href="#">feedback@wellcare.com</a>
            </div>
            <div className="col-lg-4 col-sm-12">
                <h5>
                For feedback/complaints please write to:</h5>
                <a style={{color:"pink", fontSize:"20px"}} href="#">reachus@wellcare.com</a>
            </div>
            <div className="col-lg-4 col-sm-12">
                <h5>For investors related queries contact:</h5>
                <a style={{color:"pink", fontSize:"20px"}} href="#">investorrelaton-lg@w col-sm-12ellcare.com</a>
            </div>
        </div>
        <div className="my-5" >
          <h5>Address</h5>
          <p>
            Bhopal WellCare Hospital & Research Center Raisen Bypass Road, Near
            Karond Chouraha, Bhopal - 462038 (M.P.) Phones 0755 2742212-16 FAX
            0755 2748309
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
