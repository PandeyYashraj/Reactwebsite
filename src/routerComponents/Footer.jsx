import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineInstagram, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa"
const Footer = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-10 mx-auto mt-5 footer'>
            <h3 className='mt-3 mb-4 footer-head'>Subscribe and Follow Us!</h3>
              <button className='btn btn-dark'><Link to="/" className='ftr-lnk'>Subscribe</Link></button>
              <div className='d-inline-flex icon-box ms-2 mb-4'>
                <Link to="/"><AiOutlineInstagram className="icon" /></Link>
              </div>
              <div className='d-inline-flex icon-box ms-2'>
                <Link to="/"><FaFacebookF className="icon" /></Link>
              </div>
              <div className='d-inline-flex icon-box ms-2'>
                <Link to="/"><AiFillYoutube className="icon" /></Link>
              </div>
              <div className='d-inline-flex icon-box ms-2'>
                <Link to="/"><AiOutlineTwitter className="icon" /></Link>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
