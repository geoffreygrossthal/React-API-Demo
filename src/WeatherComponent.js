//Import React and necessary hooks from the React library
import React, { useEffect, useState } from 'react';
//Import axios library for making HTTP requests
import axios from 'axios';

//Define a functional component called WeatherComponent
const WeatherComponent = ({ apiKey, location }) => {
    //Define state variable weatherData to store weather information
    const [weatherData, setWeatherData] = useState(null);

  //useEffect hook to fetch weather data when component mounts or dependencies change
  useEffect(() => {
    //Define an asynchronous function fetchWeather to fetch weather data
    const fetchWeather = async () => {
      try {
        //Make a GET request to WeatherAPI.com using axios
        const response = await axios.get('http://api.weatherapi.com/v1/current.json', {
          params: {
            key: apiKey, //WeatherAPI.com API key passed as prop
            q: location, //Location passed as prop
            aqi: 'no'    //Optional parameter to exclude AQI information
          }
        });

        //Update weatherData state with response data
        setWeatherData(response.data);
      } catch (error) {
        console.error('Failed to fetch weather data:', error); // Log error if fetching data fails
      }
    };

    // Call fetchWeather function to fetch weather data
    fetchWeather();
  }, [apiKey, location]); // Dependency array ensures useEffect runs when apiKey or location change

  // Conditional rendering based on weatherData state
  if (!weatherData) {
    return <div>Loading...</div>; // Display loading message if weatherData is null
  }

  // Render weather information once weatherData is available
  return (
    <div>
      <h2>Weather in {weatherData.location.name}, {weatherData.location.country}</h2>
      <p>Temperature: {weatherData.current.temp_c} degrees Celsius</p>
      <p>Condition: {weatherData.current.condition.text}</p>
    </div>
  );
};

export default WeatherComponent; // Export WeatherComponent as default


