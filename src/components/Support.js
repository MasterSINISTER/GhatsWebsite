import React from 'react';
import Footer from './Footer';
import '../index.css'
import CustomNav from './CustomNav';



export default function Support() {
  return (
    <>
    {/* <Navbar/> */}
    <CustomNav/>
    {/* <Heading title="Contact Us"/> */}
    <section className="bg-light">
      <div className="support-container py-5">
        <div className="p-5 lc-block">
          <div className="lc-block">
          </div>
          <div className="lc-block">
            <div editable="rich">
              <h2 className="fw-bolder display-3">Get in touch.</h2>
            </div>
          </div>
          <div className="lc-block col-md-8">
            <div editable="rich">
              <p className="lead">Get Assistance and Resolve Queries: Our Dedicated Support Team is Here to Help</p>
            </div>
          </div>
        </div>
        <div className="p-5 lc-block shadow rounded-3 col-xl-10 offset-xl-1">
          <form className='support-form' style={{borderRadius:'30px'}}>
            <div className="form-group mb-4">
              <label>Your Name :</label>
              <input name="mouseglue" type="text" className="form-control" placeholder="Enter the Name" value="" autoComplete="off" hidden required/>
              <input name="name" type="text" className="form-control" placeholder="Enter the Name" value="" />
            </div>
            <div className="form-group mb-4">
              <label>Your Email Address</label>
              <input name="email" type="email" className="form-control" placeholder="Enter the Email" value="" />
            </div>
            <div className="form-group mb-4">
              <label>Subject :</label>
              <input name="subject" type="text" className="form-control" placeholder="Enter the Subject" required/>
            </div>
            <div className="form-group mb-4">
              <label>Your Message</label>
              <textarea name="message" className="form-control"  maxLength="300" style={{width:'200%'}}></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-lg" id="support-button">Submit Form</button>
          </form>
        </div>
      </div>
    </section>
    <section>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="lc-block col-lg-8">
              <div editable="rich">
                <h2 style={{fontSize:'3rem'}}>Reach Us !</h2>
                <p style={{fontSize:'1.3rem'}}>Birla Institute of Technology, Mesra<br/>
Ranchi 835215, Jharkhand, INDIA</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="lc-block overflow-hidden">
              <div className="ratio ratio-1x1" lc-helper="gmap-embed">
                <iframe src="https://maps.google.com/maps?q=BITMESRA%2C%20UK&amp;t=m&amp;z=8&amp;output=embed&amp;iwloc=near" style={{borderRadius:'20px'}}></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  <br/>
  <br/>
  <br/>
  <br/>

    <Footer/>
    </>
  );
}
