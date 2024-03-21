import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Ghats from './Ghats'; // Import the other component

const API_KEY = '5e7913a910631a6474146e6679b3f338';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const Practice = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [Vtemperature, setTemperature] = useState(null); // New state to store temperature

  useEffect(() => {
    fetchWeatherData('Varanasi');
  }, []);

  const fetchWeatherData = async (city) => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric',
        },
      });
      console.log("Weather :",response.data);
      setWeatherData(response.data);
      setTemperature(response.data.main.temp); // Set temperature state
    } catch (error) {
      setError('Error fetching weather data. Please try again.');
    }
    
  };
  

  return (
    <div>
          <Ghats Vtemperature={Vtemperature} /> {/* Pass temperature as prop */}
    </div>
  );
};

export default Practice;
