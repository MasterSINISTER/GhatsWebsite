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
            "url(https://images.unsplash.com/photo-1578378377576-2ed7065bdb87?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
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
