import React from 'react'
import img from '../aassets/About.png';
const About = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <h1 className='text-center service-head p1 mt-4'>Who we are</h1>
            <div className='row mt-2'>
              <div className='col-md-6  mt-5 order-2 order-lg-1'>
                <h2>About Us</h2>
                <p className='p2'>We have been in this industry since 2020 and have developed enough websites which include Business websites, eCommerce websites, and Web Applications. Over the years, we have garnered the industry experience to have the expertise to develop professional website design which stands out as unique in the market and also which comes as an affordable package to many startups.</p>
              </div>
              <div className='col-md-6 order-1 order-lg-2 header-img'>
                <img src={img} className="img-fluid" alt="no-image" />
              </div>
            </div>
            <h2 className='text-center mt-5'>Meet People Behind the Scene @Technician</h2>
            <p className='p2 text-center mt-3'>Our team is like a family, working for the last 2+ years to tackle genuine issues of society and meeting the needs of our clients. At Technician, we love what we do and consequently working with fun is life at Technician.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;
