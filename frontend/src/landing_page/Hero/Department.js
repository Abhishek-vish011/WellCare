import React from 'react'
function Department() {
    return ( 
        <div className='container mt-5 mb-5 border-top'>
            <div className='text-center m-5'>
                 <h5 className='text-primary'>Department</h5>
                 <h4>Our Medical Services</h4>
            </div>
            <div className='row'>
                <div className='col-lg-3 col-sm-12 text-center depart'>
                   <div className='mt-4'>
                        <img style={{width:"16rem"}} src='/media/Images/X-ray2.jpg' alt='load' />
                    </div>
                    <h4 className='mt-4'>Radiologist</h4>
                    <p>The department of X-Rays</p>
                </div>
                <div className='col-lg-3 col-sm-12 text-center'>
                    <div>
                        <img style={{width:"18rem"}}  src='/media/Images/Heart.jpg' alt='load' />
                    </div>
                    <h4>Cardiologist</h4>
                    <p>The Department of Cardologist</p>
                </div>
                <div className='col-lg-3 col-sm-12 text-center'>
                  <div>
                        <img style={{width:"22rem"}} src='/media/Images/Neuro2.jpg' alt='load' />
                    </div>
                    <h4>Neurologist</h4>
                    <p>The department of Neurologist</p>
                </div>
                <div className='col-lg-3 col-sm-12 text-center'>
                <div>
                        <img style={{width:"15rem"}}  src='/media/Images/Blood.webp' alt='load' />
                    </div>
                    <h4>Blood Bank</h4>
                    <p>The department of Blood bank</p>
                </div>
            </div>
        </div>
     );
}

export default Department;