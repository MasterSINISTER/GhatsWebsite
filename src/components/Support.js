import React from 'react';
import Navbar from './Navbar';
import Heading from './Heading';
import Footer from './Footer';
import '../index.css'



export default function Support() {
  return (
    <>
    <Navbar/>
    {/* <Heading title="Contact Us"/> */}
    <section className="bg-light">
      <div className="container py-5">
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
              <p className="lead">Duis non neque vel purus porttitor eleifend sit amet placerat quam. Etiam rhoncus libero vitae enim ullamcorper.</p>
            </div>
          </div>
        </div>
        <div className="p-5 lc-block shadow rounded-3 col-xl-10 offset-xl-1">
          <form className='support-form'>
            <div className="form-group mb-4">
              <label>Your Name :</label>
              <input name="mouseglue" type="text" className="form-control" placeholder="John Doe" value="" autoComplete="off" hidden required/>
              <input name="name" type="text" className="form-control" placeholder="John Doe" value="" />
            </div>
            <div className="form-group mb-4">
              <label>Your Email Address</label>
              <input name="email" type="email" className="form-control" placeholder="name@example.com" value="" />
            </div>
            <div className="form-group mb-4">
              <label>Subject :</label>
              <input name="subject" type="text" className="form-control" placeholder="Contact Subject" required/>
            </div>
            <div className="form-group mb-4">
              <label>Your Message</label>
              <textarea name="message" className="form-control" rows="3" maxLength="300"></textarea>
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
                <h2>React Us !</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lacus est. Etiam diam metus, lobortis non augue at, placerat viverra risus. Cras ornare faucibus laoreet. Aenean vel nisi in ipsum congue fermentum et ut arcu. Proin leo diam,
                  vulputate eu tellus ac, mattis cursus nunc. In aliquet erat ac eros congue maximus. Fusce cursus leo at elit tincidunt, consequat ultrices ante pretium. Vivamus ut dapibus nisl, nec condimentum purus.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="lc-block overflow-hidden">
              <div className="ratio ratio-1x1" lc-helper="gmap-embed">
                <iframe src="https://maps.google.com/maps?q=BITMESRA%2C%20UK&amp;t=m&amp;z=8&amp;output=embed&amp;iwloc=near"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}
