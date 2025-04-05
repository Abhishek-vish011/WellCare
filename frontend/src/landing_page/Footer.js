import React from "react";
import '../index.css'
function Footer(){
    return (
        <div className="mt-5" style={{borderTop:"1px solid gray"}}>
            <div className="container m-6 p-0">
                <div className="row mt-4">
                    <div className="col-lg-4 col-sm-12 text-center ">
                        <div>
                            <img src="/media/Images/logo2.png" alt="load"/>
                        </div>
                        <p>Airport Road, Street No.314 <br/> Infront of Milatry session,<br/> City of lake, Bhopal(M.P).</p>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <div className="mt-3">
                        <h6 className="m-2 text-center" style={{fontWeight:"bold"}}>STAY IN TOUCH</h6>
                        </div>
                        <div className="d-flex  justify-content-center mt-4">
                        <div>
                            <img className="m-3 social" src="/media/Images/face.png" alt="load"/>
                        </div>
                        <div>
                            <img className="m-3 social" src="/media/Images/insta.png" alt="load"/>
                        </div>
                        <div>
                            <img className="m-3 social" src="/media/Images/twitters.png" alt="load"/>
                        </div>
                        <div>
                            <img className="m-3 social" src="/media/Images/youtube.png" alt="load"/>
                        </div>
                        </div>
                        <div className="text-center">
                            <img style={{width:"6rem"}} src="/media/Images/google.svg" alt="load0"/>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 text-center mt-3">
                        <p>Privacy Policy | Terms & Conditions | Online payment & refund policy | Gifting Policy | Tele-consult | Sitemap | Contact Us | Contact | Partners.</p>
                        <p>© 2022 Fortis Healthcare. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
            </div>
    );
}

export default Footer;