import React from "react";
import "./galleryCss.css";
import { Link } from "react-router-dom";
import Breadcrum from "./Breadcrum";
import Footer from "./Footer";

const Ghats = ({
  Vtemperature,
  Utemperature,
  Ptemperature,
  Mtemperature,
  Rtemperature,
  Patemperature,
}) => {
  return (
    <>
      <div
        style={{
          marginLeft: "-20%",
          // marginTop: "3%",
          backgroundColor: "transparent",
        }}
      >
        {/* <CustomNav /> */}
      </div>
      {/* <Heading title="Indian Ghats"/> */}
      <Breadcrum />
      <h1
        style={{ textAlign: "center", fontSize: "5rem", fontFamily: "Poppins" }}
      >
        Pooja&nbsp;Ghats
      </h1>
      <div className="container" style={{ marginTop: "0px" }}>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col">
            <div
              className="lc-block card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg card-varanasi "
              lc-helper="background"
              style={{
                backgroundImage:
                  "url('https://images.cnbctv18.com/wp-content/uploads/2022/12/varanasi-1019x573.jpg?impolicy=website&width=1024&height=720')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                overflow: "hidden  ",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <div className="lc-block pt-5 mt-7 mb-5 my-2">
                  <div editable="rich">
                    <h2
                      className="display-6 lh-1 fw-bold"
                      id="card-title"
                      style={{
                        color: "white",
                        fontSize: "3rem",
                        fontFamily: "Poppins",
                        marginTop: "15%",
                      }}
                    >
                      Varanasi
                    </h2>
                    <p style={{ color: "white" }}>
                      Varanasi, also known as Banaras or Kashi, is one of the
                      oldest continuously inhabited cities in the world and is
                      considered one of the holiest cities in Hinduism.
                    </p>
                  </div>
                  <div className="getWeather">
                    <p style={{ fontFamily: "Poppins", fontSize: "1.4rem" }}>
                      {Vtemperature}°C
                    </p>
                  </div>
                </div>
                <ul className="lc-block d-flex list-unstyled mt-auto ms-auto">
                  <Link
                    className="btn btn-link btn-sm text-white "
                    id="btn-readmore"
                    to="/ghats/varanasi"
                    role="button"
                  >
                    Read more
                  </Link>
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
                  "url('https://www.thestatesman.com/wp-content/uploads/2022/01/Ujjain-The-city-of-mahakal.jpgphoto-google.jpg')",
                backgroundSize: "cover",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <div className="lc-block pt-5 mt-5 mb-4">
                  <div editable="rich">
                    <h2
                      className="display-6 lh-1 fw-bold"
                      style={{
                        color: "white",
                        fontSize: "3rem",
                        fontFamily: "Poppins",
                      }}
                    >
                      Ujjain
                    </h2>
                    <p>
                      Ujjain, located in the Malwa region of Madhya Pradesh,
                      India, is a city steeped in history, spirituality, and
                      cultural significance.
                    </p>
                  </div>
                  <div className="getWeather">
                    <p style={{ fontFamily: "Poppins", fontSize: "1.4rem" }}>
                      {Utemperature}°C
                    </p>
                  </div>
                </div>
                <ul className="lc-block d-flex list-unstyled mt-auto ms-auto">
                  <Link
                    className="btn btn-link btn-sm text-white "
                    id="btn-readmore"
                    to="/ghats/ujjain"
                    role="button"
                  >
                    Read more
                  </Link>
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
                  "url('https://upload.wikimedia.org/wikipedia/commons/0/0f/Evening_view_of_Har-ki-Pauri%2C_Haridwar.jpg')",
                backgroundSize: "cover",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <div className="lc-block pt-5 mt-5 mb-4">
                  <div editable="rich">
                    <h2
                      className="display-6 lh-1 fw-bold"
                      style={{
                        color: "white",
                        fontSize: "3rem",
                        fontFamily: "Poppins",
                      }}
                    >
                      Haridwar
                    </h2>
                    <p>
                      Haridwar is an ancient city located in the northern Indian
                      state of Uttarakhand, in the foothills of the Shivalik
                      range.
                    </p>
                  </div>
                  <div className="getWeather">
                    <p style={{ fontFamily: "Poppins", fontSize: "1.4rem" }}>
                      {Ptemperature}°C
                    </p>
                  </div>
                </div>
                <ul className="lc-block d-flex list-unstyled mt-auto ms-auto">
                  <Link
                    className="btn btn-link btn-sm text-white "
                    id="btn-readmore"
                    to="/ghats/haridwar"
                    role="button"
                  >
                    Read more
                  </Link>
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
                  "url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Vishram_Ghat.jpg/1280px-Vishram_Ghat.jpg')",
                backgroundSize: "cover",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <div className="lc-block pt-5 mt-5 mb-4">
                  <div editable="rich">
                    <h2
                      className="display-6 lh-1 fw-bold"
                      style={{
                        color: "white",
                        fontSize: "3rem",
                        fontFamily: "Poppins",
                      }}
                    >
                      Mathura
                    </h2>
                    <p>
                      Mathura, located in the northern Indian state of Uttar
                      Pradesh, is a city of immense religious and historical
                      significance, revered as the birthplace of Lord Krishna,
                      one of the most revered deities in Hinduism.
                    </p>
                  </div>
                  <div className="getWeather">
                    <p style={{ fontFamily: "Poppins", fontSize: "1.4rem" }}>
                      {Mtemperature}°C
                    </p>
                  </div>
                </div>
                <ul className="lc-block d-flex list-unstyled mt-auto ms-auto">
                  <Link
                    className="btn btn-link btn-sm text-dark "
                    id="btn-readmore"
                    to="/ghats/mathura"
                    role="button"
                  >
                    Read more
                  </Link>
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
                  "url('https://rishikeshdaytour.com/blog/wp-content/uploads/2019/03/Rishikesh-Uttarakhand-India.jpg')",
                backgroundSize: "cover",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <div className="lc-block pt-5 mt-5 mb-4">
                  <div editable="rich">
                    <h2
                      className="display-6 lh-1 fw-bold"
                      style={{
                        color: "white",
                        fontSize: "3rem",
                        fontFamily: "Poppins",
                      }}
                    >
                      Rishikesh
                    </h2>
                    <p>
                      A city located in the northern Indian state of
                      Uttarakhand. Rishikesh is renowned as a spiritual and yoga
                      hub, nestled in the foothills of the Himalayas along the
                      banks of the holy river Ganges.
                    </p>
                  </div>
                  <div className="getWeather">
                    <p style={{ fontFamily: "Poppins", fontSize: "1.4rem" }}>
                      {Rtemperature}°C
                    </p>
                  </div>
                </div>
                <ul className="lc-block d-flex list-unstyled mt-auto ms-auto">
                  <Link
                    className="btn btn-link btn-sm text-white "
                    id="btn-readmore"
                    to="/ghats/rishikesh"
                    role="button"
                  >
                    Read more
                  </Link>
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
                  "url('https://api.airporttransfer.com/storage/media/posts/patna-airport-to-patna-railway-station-65a78fb9293a5.jpg')",
                backgroundSize: "cover",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <div className="lc-block pt-5 mt-5 mb-4">
                  <div editable="rich">
                    <h2
                      className="display-6 lh-1 fw-bold"
                      style={{
                        color: "white",
                        fontSize: "3rem",
                        fontFamily: "Poppins",
                      }}
                    >
                      Patna
                    </h2>
                    <p>
                      Patna, the capital city of the Indian state of Bihar, is a
                      vibrant metropolis with a rich historical and cultural
                      heritage.
                    </p>
                  </div>
                  <div className="getWeather">
                    <p style={{ fontFamily: "Poppins", fontSize: "1.4rem" }}>
                      {Patemperature}°C
                    </p>
                  </div>
                </div>
                <ul className="lc-block d-flex list-unstyled mt-auto ms-auto">
                  <Link
                    className="btn btn-link btn-sm text-white "
                    id="btn-readmore"
                    to="/ghats/patna"
                    role="button"
                  >
                    Read more
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default Ghats;
