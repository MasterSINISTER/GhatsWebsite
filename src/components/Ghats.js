import React from "react";
import './galleryCss.css'
import Navbar from "./Navbar";
import Heading from "./Heading";
import CustomNav from "./CustomNav";

export default function Ghats() {
  return (
    <>
    <div style={{marginLeft:'-20%',marginTop:'3%',backgroundColor:'transparent'}}>
    <CustomNav />
    </div>
    {/* <Heading title="Indian Ghats"/> */}
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div className="col">
            <div
              className="lc-block card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
              lc-helper="background"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1444910958049-f45a1ac7ace5?crop=entropy&amp;amp;cs=tinysrgb&amp;amp;fit=crop&amp;amp;fm=jpg&amp;amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8MTA2fHxmbG93ZXJzfGVufDB8MHx8fDE2MjE1MDQwMjg&amp;amp;ixlib=rb-1.2.1&amp;amp;q=80&amp;amp;w=1080&amp;amp;h=76')",
                backgroundSize: "cover",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <div className="lc-block pt-5 mt-7 mb-5 my-2">
                  <div editable="rich">
                    <h2 className="display-6 lh-1 fw-bold">
                      <br></br><br></br> Varanasi
                    </h2>
                    <p>
                      Quickly design and customize responsive mobile-first sites
                      with Bootstrap.
                    </p>
                  </div>
                </div>
                <ul className="lc-block d-flex list-unstyled mt-auto ms-auto">
                  <a
                    className="btn btn-link btn-sm text-white " id="btn-readmore"
                    href="/"
                    role="button"
                  >
                    Read more
                  </a>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="lc-block card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
              lc-helper="background"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1444910958049-f45a1ac7ace5?crop=entropy&amp;amp;cs=tinysrgb&amp;amp;fit=crop&amp;amp;fm=jpg&amp;amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8MTA2fHxmbG93ZXJzfGVufDB8MHx8fDE2MjE1MDQwMjg&amp;amp;ixlib=rb-1.2.1&amp;amp;q=80&amp;amp;w=1080&amp;amp;h=76')",
                backgroundSize: "cover",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <div className="lc-block pt-5 mt-5 mb-4">
                  <div editable="rich">
                    <h2 className="display-6 lh-1 fw-bold">
                      Ujjain
                    </h2>
                    <p>
                      Quickly design and customize responsive mobile-first sites
                      with Bootstrap.
                    </p>
                  </div>
                </div>
                <ul className="lc-block d-flex list-unstyled mt-auto ms-auto">
                  <a
                    className="btn btn-link btn-sm text-white " id="btn-readmore"
                    href="/"
                    role="button"
                  >
                    Read more
                  </a>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="lc-block card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
              lc-helper="background"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1444910958049-f45a1ac7ace5?crop=entropy&amp;amp;cs=tinysrgb&amp;amp;fit=crop&amp;amp;fm=jpg&amp;amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8MTA2fHxmbG93ZXJzfGVufDB8MHx8fDE2MjE1MDQwMjg&amp;amp;ixlib=rb-1.2.1&amp;amp;q=80&amp;amp;w=1080&amp;amp;h=76')",
                backgroundSize: "cover",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <div className="lc-block pt-5 mt-5 mb-4">
                  <div editable="rich">
                    <h2 className="display-6 lh-1 fw-bold">
                      Prayagraj
                    </h2>
                    <p>
                      Quickly design and customize responsive mobile-first sites
                      with Bootstrap.
                    </p>
                  </div>
                </div>
                <ul className="lc-block d-flex list-unstyled mt-auto ms-auto">
                  <a
                    className="btn btn-link btn-sm text-white " id="btn-readmore"
                    href="/"
                    role="button"
                  >
                    Read more
                  </a>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="lc-block card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
              lc-helper="background"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1507499739999-097706ad8914?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8MTB8fHNwYWNlfGVufDB8MXx8fDE2MjE4NDQ2MTY&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=768')",
                backgroundSize: "cover",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <div className="lc-block pt-5 mt-5 mb-4">
                  <div editable="rich">
                    <h2 className="display-6 lh-1 fw-bold">
                      Short title, long jacket
                    </h2>
                    <p>
                      Quickly design and customize responsive mobile-first sites
                      with Bootstrap.
                    </p>
                  </div>
                </div>
                <ul className="lc-block d-flex list-unstyled mt-auto ms-auto">
                  <a
                    className="btn btn-link btn-sm text-dark " id="btn-readmore"
                    href="/"
                    role="button"
                  >
                    Read more
                  </a>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="lc-block card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
              lc-helper="background"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1444910958049-f45a1ac7ace5?crop=entropy&amp;amp;cs=tinysrgb&amp;amp;fit=crop&amp;amp;fm=jpg&amp;amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8MTA2fHxmbG93ZXJzfGVufDB8MHx8fDE2MjE1MDQwMjg&amp;amp;ixlib=rb-1.2.1&amp;amp;q=80&amp;amp;w=1080&amp;amp;h=76')",
                backgroundSize: "cover",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <div className="lc-block pt-5 mt-5 mb-4">
                  <div editable="rich">
                    <h2 className="display-6 lh-1 fw-bold">
                      Much longer title that wraps to multiple lines
                    </h2>
                    <p>
                      Quickly design and customize responsive mobile-first sites
                      with Bootstrap.
                    </p>
                  </div>
                </div>
                <ul className="lc-block d-flex list-unstyled mt-auto ms-auto">
                  <a
                    className="btn btn-link btn-sm text-white " id="btn-readmore"
                    href="/"
                    role="button"
                  >
                    Read more
                  </a>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="lc-block card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
              lc-helper="background"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1580133748682-099a97d17e6c?crop=entropy&amp;amp;cs=tinysrgb&amp;amp;fit=crop&amp;amp;fm=jpg&amp;amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8MTV8fGplbGx5JTIwZmlzaHxlbnwwfDB8fHwxNjIxNTA0MDU1&amp;amp;ixlib=rb-1.2.1&amp;amp;q=80&amp;amp;w=1080&amp;amp;h=768')",
                backgroundSize: "cover",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <div className="lc-block pt-5 mt-5 mb-4">
                  <div editable="rich">
                    <h2 className="display-6 lh-1 fw-bold">
                      Another longer title belongs here
                    </h2>
                    <p>
                      Quickly design and customize responsive mobile-first sites
                      with Bootstrap.
                    </p>
                  </div>
                </div>
                <ul className="lc-block d-flex list-unstyled mt-auto ms-auto">
                  <a
                    className="btn btn-link btn-sm text-white " id="btn-readmore"
                    href="/"
                    role="button"
                  >
                    Read more
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
