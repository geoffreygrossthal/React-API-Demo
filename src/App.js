//Date: 7/23/2024
//Programmer: Geoffrey Grossthal
//Program: App.js component for react app

import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherComponent from './WeatherComponent';

function App() {
  const apiKey = '3a6e356b738a4199b99151954241107';
  const cities = ['London', 'New York', 'Tokyo', 'Paris', 'Scottsdale'];

  const [currentCityIndex, setCurrentCityIndex] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState('/london-background.jpg'); // Initial background image URL

  // Function to update city index and background image every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCityIndex((prevIndex) => (prevIndex + 1) % cities.length);
    }, 10000);

    // Cleanup function to clear interval on component unmount
    return () => clearInterval(timer);
  }, [cities.length]);

  // Function to update background image based on city index
  useEffect(() => {
    const images = [
      '/london-background.jpg',
      '/new-york-background.jpg',
      '/tokyo-background.jpg',
      '/paris-background.jpg',
      '/scottsdale-background.jpg'
    ]; // Example image URLs for each city
    setBackgroundImage(images[currentCityIndex]);
  }, [currentCityIndex]);

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <p>
          My name is Geoffrey.
          This is my react app showing the weather of various locations with pictures.
          The link below provides access to the weather API.
        </p>
        <a
          className="App-link"
          href="https://www.weatherapi.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Weather API Site
        </a>
        <WeatherComponent apiKey={apiKey} location={cities[currentCityIndex]} />
      </header>
    </div>
  );
}

export default App;

