import React from "react";
import "D:/IGWP React/my-ghats/src/index.css";
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Heading from "./Heading";
export default function Terms() {
  return (
    <>
      <Navbar />
      <Heading title="Our Terms and Conditions" />
      <p>
        <div className="terms-container">
          <div>
            <h2>1. Acceptance of Terms</h2>
            By accessing and using the Travel Bug (hereinafter referred
            to as "the Travel Bug"), you agree to comply with and be bound by these
            Terms and Conditions of Use. If you do not agree with any part of
            these terms, you should not use the Website.
          </div>
          <div>
            <h2>2. Changes to Terms</h2>
            Travel Bug reserves the right to update or modify these
            Terms and Conditions at any time without prior notice. Your
            continued use of the Website after such modifications will
            constitute your acknowledgment and acceptance of the revised terms.
          </div>
          <div>
            <h2>3. Use of the Website</h2>
            a. You agree to use the Website for lawful purposes and in a manner
            consistent with all applicable local, state, national, and
            international laws and regulations. <br></br>b. You will not engage in any
            conduct that could disrupt, damage, disable, or impair the operation
            or functionality of the Website.
          </div>
          <div>
            <h2>4. Intellectual Property</h2>
            a. All content on the Website, including text, images, graphics,
            logos, and other materials, is the property of Travel Bug
            and is protected by intellectual property laws.<br></br> b. You may not
            reproduce, distribute, modify, display, perform, or otherwise use
            any content from the Website without the express written consent of
            Travel Bug.
          </div>
          <div>
            <h2>5. User-Generated Content</h2>
            a. Users may submit content, including but not limited to comments,
            reviews, and photos. <br></br>b. By submitting content, you grant Travel Bug a non-exclusive, royalty-free, perpetual, irrevocable,
            and fully sublicensable right to use, reproduce, modify, adapt,
            publish, translate, create derivative works from, distribute, and
            display such content worldwide.
          </div>
          <div>
            <h2>6. Privacy</h2>
            a. Our Privacy Policy outlines how we collect, use, and protect your
            personal information. By using the Website, you consent to the
            collection and use of this information as described in the Privacy
            Policy.
          </div>
          <div>
            <h2>7. Disclaimer of Warranties</h2>
            a. The Website is provided "as is" and "as available," without any
            warranties of any kind, whether express or implied. <br></br>b. Travel Bug does not warrant that the Website will be error-free,
            uninterrupted, secure, or free of viruses or other harmful
            components.
          </div>
          <div>
            <h2>8. Limitation of Liability</h2>
            a. Travel Bug and its affiliates, officers, directors,
            employees, agents, and third-party service providers shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages, including without limitation, loss of profits,
            data, use, goodwill, or other intangible losses.
          </div>
          <div>
            <h2>9. Governing Law and Jurisdiction</h2>
            These Terms and Conditions are governed by and construed in
            accordance with the laws of India. You agree to submit to the
            exclusive jurisdiction of the courts located within India for the
            resolution of any disputes.
          </div>
          <div>
            10. Contact Information If you have any questions about these Terms
            and Conditions, you may contact us at [Your Contact Information].
            Travel Bug [Your Address] [Your Email Address] [Your Phone
            Number]
          </div>
          Last Updated: [Date]
        </div>
      </p>
              <Link to='/'><button className="btn-goHome">Go Back to Home</button></Link>
              <div>

                <img src={process.env.PUBLIC_URL+'/images/Banaras.jpg'} alt="Test"></img>
              </div>
      <Footer />
    </>
  );
}
