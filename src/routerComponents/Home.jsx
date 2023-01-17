import React from 'react'
import { Link } from 'react-router-dom';
import img from '../aassets/guy.jpg';
const Home = () => {
  return (
    <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 order-2 order-lg-1">
                  <div className='mt-4 ms-3'>
                    <p className="p1">Welcome.</p>
                    <p className='pt-2 p2'>My name is <strong>Yashraj Pandey</strong>, i'm a React JS Developer. In my team we provide web-services. Feel free to contact me, we are here to serve our services.  </p>
                    <p className='p2'>As a Web design and development team our primary focus is building trust. For more information, please check out my website click the button below.  </p>
                    <Link className='btn btn-outline-info mt-2 btn-style' to="Services">Get Started</Link>
                  </div>
                </div>
                <div className="col-md-6 pt-5 mt-3 order-1 order-lg-2 header-img">
                  <img src={img} class="img-fluid" alt="no-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Home;
