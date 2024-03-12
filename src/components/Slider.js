// import React, { useEffect, useState } from 'react';

// const Slider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const slides = document.querySelectorAll('.slide');

//     const showSlide = () => {
//       slides[currentSlide].classList.remove('active');
//       const nextSlide = (currentSlide + 1) % slides.length;
//       setCurrentSlide(nextSlide);
//       slides[nextSlide].classList.add('active');
//     };

//     const intervalId = setInterval(showSlide, 3000);

//     return () => clearInterval(intervalId); // Cleanup the interval on component unmount
//   }, [currentSlide]);

//   const goToPrevSlide = () => {
//     const slides = document.querySelectorAll('.slide');
//     const prevSlide = (currentSlide - 1 + slides.length) % slides.length;
//     setCurrentSlide(prevSlide);
//   };

//   const goToNextSlide = () => {
//     const slides = document.querySelectorAll('.slide');
//     const nextSlide = (currentSlide + 1) % slides.length;
//     setCurrentSlide(nextSlide);
//   };

//   return (
//     <>
//       <div className="slider">
//         <img src="https://wallpapers.com/images/hd/castle-forest-fog-art-n24j44c8gpbpcthb.webp" className="slide" alt="Slide 1" />
//         <img src="https://wallpapers.com/images/high/sakura-tree-in-the-cave-ray2i186cyqz9y4a.webp" className="slide" alt="Slide 2" />
//         <img src="https://wallpapers.com/images/hd/castle-traveler-trekking-branch-rlhd74lmwirb0ebp.webp" className="slide" alt="Slide 3" />
//         <img src="https://wallpapers.com/images/hd/castle-palace-lake-reflection-xpbybunzbu8tlbux.webp" className="slide" alt="Slide 4" />

//         {/* <div className="arrow-buttons">
//           <button onClick={goToPrevSlide}>&#9665;</button>
//           <button onClick={goToNextSlide}>&#9655;</button>
//         </div>
//         <div className="slide-counter">
//           Slide {currentSlide + 1} of 4
//         </div> */}
//       </div>
//     </>
//   );
// };

// export default Slider;
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./Home.css";
import TypeIt from "typeit-react";


export default function Slider() {
  return (
    <>
      <div
        className="d-flex min-vh-100"
        lc-helper="background"
        style={{
          backgroundImage:
            "url(https://imagetolink.com/ib/JRg5cysyI7.png?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;h=768&amp;fit=crop&amp;ixid=eyJhcHBfaWQiOjM3ODR9)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundColor: "#444",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="align-self-center text-center text-light col-md-8 offset-md-2">
          <div className="lc-block mb-4">
            <div editable="rich">
              <TypeIt><h1 className="display-1 fw-bolder">Spirit in Every Stone !</h1></TypeIt>
            </div>
          </div>

          <div className="lc-block">
            <div editable="rich">
              <p className="lead">
                Bridging spirituality and serenity, our Indian Pooja Ghats
              </p>
              <p className="lead">
                offer divine tranquility for your sacred rituals.
              </p>
            </div>
          </div>

          <div className="lc-block">
            <Link to="/login">
              <button id="btn-explore" type="submit">
                Sign Up
              </button>
            </Link>
            <path
              fillRule="evenodd"
              d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            ></path>
            <path
              fillRule="evenodd"
              d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
            ></path>
            <script
              async
              src="https://unpkg.com/smoothscroll-polyfill/dist/smoothscroll.min.js"
            ></script>
          </div>
        </div>
      </div>
    </>
  );
}
