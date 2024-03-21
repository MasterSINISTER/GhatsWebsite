import React, { useState, useEffect } from "react";
import axios from "axios";
import Ghats from "../components/Ghats"; // Assuming you might still want to use it for something

const API_KEY = "5e7913a910631a6474146e6679b3f338";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

const UjjainWeather = () => {
  const [Vtemperature, setVTemperature] = useState(null); // Varanasi temperature
  const [Utemperature, setUTemperature] = useState(null); // Ujjain temperature
  const [Ptemperature, setPTemperature] = useState(null); // Bihar temperature
  const [Mtemperature, setMTemperature] = useState(null); // Mathura temperature
  const [Rtemperature, setRTemperature] = useState(null); // Rishikesh temperature
  const [Patemperature, setPaTemperature] = useState(null); // Patna temperature

  const [error, setError] = useState("");

  useEffect(() => {
    fetchWeatherData("Varanasi", setVTemperature);
    fetchWeatherData("Ujjain", setUTemperature);
    fetchWeatherData("Bihar", setPTemperature);
    fetchWeatherData("Mathura", setMTemperature);
    fetchWeatherData("Rishikesh", setRTemperature);
    fetchWeatherData("Patna", setPaTemperature);
  }, []);

  const fetchWeatherData = async (city, setTemperature) => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          q: city,
          appid: API_KEY,
          units: "metric",
        },
      });
      console.log(`${city} Weather:`, response.data);
      setTemperature(response.data.main.temp); // Set the respective city's temperature
    } catch (error) {
      setError("Error fetching weather data. Please try again.");
      console.error(error);
    }
  };

  return (
    <div>
      <Ghats
        Vtemperature={Vtemperature}
        Utemperature={Utemperature}
        Ptemperature={Ptemperature}
        Mtemperature={Mtemperature}
        Rtemperature={Rtemperature}
        Patemperature={Patemperature}
      />{" "}
      {/* Pass temperature as prop */}
    </div>
  );
};

export default UjjainWeather;
