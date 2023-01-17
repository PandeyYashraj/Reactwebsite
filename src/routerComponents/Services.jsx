import React from 'react'
import img1 from '../aassets/1.jpg';
import img2 from '../aassets/2.jpg';
import img3 from '../aassets/3.jpg';
import img4 from '../aassets/4.jpg';
import img5 from '../aassets/5.jpg';
import Card from './Card';
import CardData from './CardData';
const Services = () => {
  return (
      <> 
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-10 mx-auto mt-4'>
                <h5 className='text-center p2 mt-4'><b>Web Design & Development</b></h5>
                <h1 className='text-center p1 service-head mt-3'>Your website should be your best salesperson</h1>
              
              <div id="carouselExampleInterval" className="carousel slide mt-5" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="5000">
                    <img src={img1} className="d-block w-100" alt="no-image"/>
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <img src={img2} className="d-block w-100" alt="no-image"/>
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <img src={img3} className="d-block w-100" alt="no-image"/>
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <img src={img4} className="d-block w-100" alt="no-image"/>
                  </div>
                  <div className="carousel-item">
                    <img src={img5} className="d-block w-100" alt="no-image"/>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <h1 className='text-center p1 service-head mt-5'>Our Services</h1>
              <div className='row mb-5'>  
                  {
                    CardData.map((v,ind)=>{
                    return <Card key={ind} img={v.image} title={v.title} />
                    })
                  }
              </div>    
            </div>
          </div>
        </div>  
      </>
  )
}

export default Services;
