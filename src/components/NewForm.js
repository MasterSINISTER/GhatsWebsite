import React, { useEffect, useState, useRef } from "react";
import "./newFormCss.css";
import Footer from "./Footer";
import { BrowserRouter as  Route,Router ,Link } from "react-router-dom";
import Heading from "./Heading";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import CustomNav from "./CustomNav";

function NewForm() {

  const firebaseConfig = {
    apiKey: "AIzaSyAjNsCyKNs4b5R6Pt9GwxSNY9ZQhMQYGAE",
    authDomain: "indian-ghats-project.firebaseapp.com",
    projectId: "indian-ghats-project",
    storageBucket: "indian-ghats-project.appspot.com",
    messagingSenderId: "708498472652",
    appId: "1:708498472652:web:64b070c98cb338b9828c69",
    measurementId: "G-MQDKBSXD83",
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(); // Replace with your authentication status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const errorElementRef = useRef(null);

  useEffect(() => {
    if (!isLoggedIn) {
      errorElementRef.current.textContent = "Invalid email or password";
    } else {
      errorElementRef.current.textContent = ""; // Clear any previous error message
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return unsubscribe;
  }, []);

  const signUp = async (e) => {
    e.preventDefault();
    const getPassword = document.getElementById("log-pass").value;
    const confirmPassword = document.getElementById("log-cpass").value;
    if (getPassword !== confirmPassword) {
      console.log("Passwords do not match !");
      setMessage("Passwords dont't Match");
      return;
    }
    
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
        );
        const user = userCredential.user;
        
        // <Modal title="Sign Up Success !" description='Enjoy the Visit'/>
      // alert("Sign Up Success !");
      setMessage("Sign Up Successfull !")
      // errorElementRef.current.textContent = "Sign Up Success !";
      navigate("/ghats"); // Replace '/success' with your desired redirect path
    } catch (error) {
      console.error(error);
      // console.log( "User Credentials are Wrong!");
setMessage("Wrong Credentials");
    }
  };

  const signIn = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // getResultRef.current.textContent = "Login Successful !";
      // errorElementRef.current.textContent = "Login Successful";
      // alert("Login Successfull")
      setMessage("Login Successfull!")
      setTimeout(() => {
        
        navigate("/ghats"); // Replace '/success' with your desired redirect path
      }, 1000);
    } catch (error) {
      console.error(error);
      // getResultRef.current.textContent = "User Credentials are Wrong!";
    setMessage("User Credentials are Wrong !");
    }
  };
  return (
    <>
      <CustomNav />
      <Heading title="join us" />
      <div className="maincontainer">
        <div className="section">
          <div className="auth-container">
            <div className="row full-height justify-content-center">
              <div className="col-12 text-center align-self-center py-5">
                <div className="section pb-5 pt-5 pt-sm-2 text-center">
                  <h6 className="mb-0 pb-3">
                    <span>Log In </span>
                    <span>Sign Up</span>
                  </h6>
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="reg-log"
                    name="reg-log"
                  />
                  <label htmlFor="reg-log"></label>
                  <div className="card-3d-wrap mx-auto">
                    <div className="card-3d-wrapper">
                      <div className="card-front">
                        <div className="center-wrap">
                          <div className="section text-center">
                            <h4 className="mb-4 pb-3">Log In</h4>
                            <div className="form-group">
                              <input
                                type="email"
                                name="logemail"
                                className="form-style"
                                placeholder="Your Email"
                                id="logemail"
                                autoComplete="off"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                              />
                              <i className="input-icon uil uil-at"></i>
                            </div>
                            <div className="form-group mt-2">
                              <input
                                type="password"
                                name="logpass"
                                className="form-style"
                                placeholder="Your Password"
                                id="logpass"
                                autoComplete="off"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                              />
                              <i className="input-icon uil uil-lock-alt"></i>
                            </div>
                            <Link
                              to="/ghats"
                              className="btn-newForm mt-4"
                              onClick={signIn}
                            >
                              submit
                            </Link>
                            {/* <p className="mb-0 mt-4 text-center">
                              <a href="#0" className="link">
                                Forgot your password?
                              </a>
                            </p> */}
                          </div>
                          <div>
                            <p style={{fontSize:'1.2rem',fontFamily:'Poppins'}}>{message}</p>
                          </div>
                          <br/>
                          <p
                            className="error-message"
                            ref={errorElementRef}
                          ></p>
                        </div>
                      </div>
                      <div className="card-back" style={{ marginTop: "2%" }}>
                        <div className="center-wrap">
                          <div className="section text-center">
                            <h4 className="mb-4 pb-3">Sign Up</h4>
                            <div className="form-group">
                              <input
                                type="text"
                                name="logname"
                                className="form-style"
                                placeholder="Your Full Name"
                                id="logname"
                                autoComplete="off"
                                required
                              />
                              <i className="input-icon uil uil-user"></i>
                            </div>
                            <div className="form-group mt-2">
                              <input
                                type="email"
                                name="logemail"
                                className="form-style"
                                placeholder="Your Email"
                                id="logemail"
                                autoComplete="off"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                              />
                              <i className="input-icon uil uil-at"></i>
                            </div>
                            <div className="form-group mt-2">
                              <input
                                type="password"
                                name="logpass"
                                className="form-style"
                                placeholder="Your Password"
                                id="log-pass"
                                autoComplete="off"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                              />
                              <i className="input-icon uil uil-lock-alt"></i>
                            </div>
                            <div className="form-group mt-2">
                              <input
                                type="password"
                                name="confpass"
                                className="form-style"
                                placeholder="Confirm Password"
                                id="log-cpass"
                                autoComplete="off"
                                required
                              />
                              <i className="input-icon uil uil-lock-alt"></i>
                            </div>
                            <Link
                              to="/ghats"
                              className="btn-newForm mt-4"
                              onClick={signUp}
                            >
                              submit
                            </Link>
                          </div>
                          <div>
                            <p id="msg-dsp">{message}</p>
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
