import React, { useEffect, useState,useRef } from 'react';
import "./newFormCss.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Heading from "./Heading";
import { getAuth,signInWithEmailAndPassword ,onAuthStateChanged,createUserWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { initializeApp } from "firebase/app";

import TypeIt from "typeit-react";

function NewForm() {
  
  const firebaseConfig = {
    apiKey: "AIzaSyAjNsCyKNs4b5R6Pt9GwxSNY9ZQhMQYGAE",
    authDomain: "indian-ghats-project.firebaseapp.com",
    projectId: "indian-ghats-project",
    storageBucket: "indian-ghats-project.appspot.com",
    messagingSenderId: "708498472652",
    appId: "1:708498472652:web:64b070c98cb338b9828c69",
    measurementId: "G-MQDKBSXD83"
  };
  const app = initializeApp(firebaseConfig);
  const auth=getAuth() // Replace with your authentication status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const errorElementRef = useRef(isLoggedIn);
  useEffect(() => {
    if (!isLoggedIn) {
      errorElementRef.current.textContent = "Invalid email or password";
    } else {
      errorElementRef.current.textContent = ""; // Clear any previous error message
    }
  }, [isLoggedIn]);
  //Sign Up Authentication:
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return unsubscribe;
  }, []);

  const signUp = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      alert("Sign Up SuccessFull !");
      navigate('/login'); // Replace '/success' with your desired redirect path
    } catch (error) {
      console.error(error);
      alert("User Credentials are Wrong!");
    }
  };
  //Sign In Authentication:
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return unsubscribe;
  }, []);

  const signIn = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      alert("Login Successful!");
      navigate('/ghats'); // Replace '/success' with your desired redirect path
    } catch (error) {
      console.error(error);
      alert("User Credentials are Wrong!");
    }
  };
  return (
    <>
      <Navbar />
	  <Heading title="join us"/>
      <div className="maincontainer">
        <div class="section">
          <div class="container">
            <div class="row full-height justify-content-center">
              <div class="col-12 text-center align-self-center py-5">
                <div class="section pb-5 pt-5 pt-sm-2 text-center">
                  <h6 class="mb-0 pb-3">
                    <span>Log In </span>
                    <span>Sign Up</span>
                  </h6>
                  <input
                    class="checkbox"
                    type="checkbox"
                    id="reg-log"
                    name="reg-log"
                  />
                  <label for="reg-log"></label>
                  <div class="card-3d-wrap mx-auto">
                    <div class="card-3d-wrapper">
                      <div class="card-front">
                        <div class="center-wrap">
                          <div class="section text-center">
                            <h4 class="mb-4 pb-3">Log In</h4>
                            <div class="form-group">
                              <input
                                type="email"
                                name="logemail"
                                class="form-style"
                                placeholder="Your Email"
                                id="logemail"
                                autocomplete="off"
                                required
                                onChange={(e)=>setemail(e.target.value)}
                              />
                              <i class="input-icon uil uil-at"></i>
                            </div>
                            <div class="form-group mt-2">
                              <input
                                type="password"
                                name="logpass"
                                class="form-style"
                                placeholder="Your Password"
                                id="logpass"
                                autocomplete="off"
                                required
                                onChange={(e)=>setpassword(e.target.value)}
                              />
                              <i class="input-icon uil uil-lock-alt"></i>
                            </div>
                            <Link to="/ghats" class="btn mt-4" onClick={signIn}>
                              submit
                            </Link>
                            <p class="mb-0 mt-4 text-center">
                              <a href="#0" class="link">
                                Forgot your password?
                              </a>
                            </p>
                          </div>
                          <p className="error-message" ref={errorElementRef}></p>
                        </div>
                      </div>
                      <div class="card-back">
                        <div class="center-wrap">
                          <div class="section text-center">
                            <h4 class="mb-4 pb-3">Sign Up</h4>
                            <div class="form-group">
                              <input
                                type="text"
                                name="logname"
                                class="form-style"
                                placeholder="Your Full Name"
                                id="logname"
                                autocomplete="off"
                                required
                              />
                              <i class="input-icon uil uil-user"></i>
                            </div>
                            <div class="form-group mt-2">
                              <input
                                type="email"
                                name="logemail"
                                class="form-style"
                                placeholder="Your Email"
                                id="logemail"
                                autocomplete="off"
                                required
                                onChange={(e)=>setemail(e.target.value)}
                              />
                              <i class="input-icon uil uil-at"></i>
                            </div>
                            <div class="form-group mt-2">
                              <input
                                type="password"
                                name="logpass"
                                class="form-style"
                                placeholder="Your Password"
                                id="logpass"
                                autocomplete="off"
                                required
                                onChange={(e)=>setpassword(e.target.value)}
                              />
                              <i class="input-icon uil uil-lock-alt"></i>
                            </div>
                            <div class="form-group mt-2">
                              <input
                                type="password"
                                name="confpass"
                                class="form-style"
                                placeholder="Confirm Password"
                                id="logpass"
                                autocomplete="off"
                                required
                              />
                              <i class="input-icon uil uil-lock-alt"></i>
                            </div>
                            <Link to="/ghats" class="btn mt-4" onClick={signUp}>
                              submit
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NewForm;
