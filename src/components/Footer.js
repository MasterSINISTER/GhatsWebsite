import React from "react";
import "./footerStyle.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

<link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Play&display=swap" rel="stylesheet"/> 
<footer>
<div class="footer">
<div class="row" style={{display:'inline-block'}}>
<a href="https://www.facebook.com"><i class="fa fa-facebook"></i></a>
<a href="/"><i class="fa fa-instagram"></i></a>
<a href="/"><i class="fa fa-youtube"></i></a>
<a href="/"><i class="fa fa-twitter"></i></a>
</div>

<div class="row">
<ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/gallery">Gallery</Link></li>
<li><Link to="/support">Support</Link></li>
<li><Link to="/team">Meet Our Team</Link></li>
</ul>
</div>

<div class="row">
INFERNO Copyright © 2021 Inferno - All rights reserved || Designed By: Mahesh 
</div>
</div>
</footer>
    </>
  );
}
