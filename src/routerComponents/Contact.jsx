import React, { useState } from 'react'

const Contact = () => {
  let [data, updateData]=useState({name:"",contact:"",email:"",pwd:""});
  
  const change=(e)=>{
    updateData({...data,[e.target.name]:e.target.value});
  }
  return (
    <>
      <div className='container-fluid mt-3'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <h1 className='text-center service-head p1'>Contact Us</h1>
            <form onSubmit={(e)=>{
                e.preventDefault();
                window.alert("Data Submitted Successfully");
                updateData({name:"",contact:"",email:"",pwd:""});
            }}>
              <div className="form-group mt-3">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" name='name' value={data.name} onChange={change} required />
              </div>
              <div className="form-group mt-2">
                <label>Mobile No.</label>
                <input type="mobile" className="form-control" placeholder="Enter your contact no." minLength={10} maxLength={10} name='contact' value={data.contact} onChange={change} required />
              </div>
              <div className="form-group mt-2">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter your email address" name='email' value={data.email} onChange={change} required />
              </div>
              <div className="form-group mt-2">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="enter your Password" minLength={6} name='pwd' value={data.pwd} onChange={change} required />
              </div>
              <div className="form-group mt-2">
                <label>Enquiry</label>
                <textarea className="form-control" aria-label="With textarea" placeholder="how can we help you?"></textarea>
              </div>
              <div className='text-center mt-4'>
                <button type="submit" className="btn btn-primary col-4 mx-auto">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div> 
    </>
)
}

export default Contact;
