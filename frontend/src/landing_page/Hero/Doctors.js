import React from 'react'


function Doctors() {
    return ( 
       <div className='container mt-3'>
        <div className='row m-5'>
            <div className='text-center'>
            <h4>ONLINE MOBILE APPOINTMENT SCHEDULING PLATFORM</h4>
            <h5 className='text-primary'>Online Appointment, Phone-in Appointment, Walk-in Appointment with Token</h5>
            </div>
        </div>
        <div className='row text-center'>
            <div className='col-lg-4 col-sm-12'>
             <div>
                <img style={{width:"15rem"}} src='/media/Images/Appoint1.webp' alt='load'/>
             </div>
             <h3 className='text-primary'>Doctor Near Me</h3>
             <p>Doctor / Hospital / Specialization to match specific consultation needs. Confirmed Online Appointment slots, practice locations, to select from to book appointment for clinic consultation or video consultation.</p>
             </div>
            <div className='col-lg-4 col-sm-12'>
             <div>
                <img style={{width:"26rem"}} src='/media/Images/Appoint5.webp' alt='load'/>
             </div>
             <h3 className='text-primary'>Know Your Doctor</h3>
             <p>Request appointments based on slots, date,consultation location. Know your Doctor to book confirmed doctor Appointment effortlessly with clinic details of practice location to engage with patients effortlessly.</p>
             </div>
            <div className='col-lg-4 col-sm-12'>
             <div>
                <img  style={{width:"15rem"}} src='/media/Images/Appoint3.jpg' alt='load'/>
             </div>
             <h3 className='text-primary'>Book Confirmed Appointment</h3>
             <p>Avoid endless back and forth  communication; empowering with Google verified SMS & dynamic Email notifications. Confirmed Doctor Appointment, clinical procedure scheduling, schedule next consultation with token.</p>
             </div>
        </div>
       </div>
     );
}

export default Doctors;