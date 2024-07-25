//Date: 7/23/2024
//Programmer: Geoffrey Grossthal
//Program: App.js component for react app

//Importing necessary modules from React and other files
import React, { useState, useEffect } from 'react';
//Import logo file
import logo from './logo.svg';
//Import CSS styles for App component
import './App.css';
//Import weather component
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
      '/new-york-background.jpg',
      '/tokyo-background.jpg',
      '/paris-background.jpg',
      '/scottsdale-background.jpg',
      '/london-background.jpg',
    ]; // Example image URLs for each city
    setBackgroundImage(images[currentCityIndex]);
  }, [currentCityIndex]);

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. My name is Geoffrey.
        </p>
        <WeatherComponent apiKey={apiKey} location={cities[currentCityIndex]} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

