import React from 'react';
import Geocode from './geocode';
import ReverseGeocode from './reverseGeocode';
import CalculateDistance from './calculateDistance';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="App">
      <h1 className="text-xl font-semibold mt-10">Geolocation API Frontend</h1>
      <div className="flex justify-center space-x-4 mt-5">
        <div className="w-1/3">
          <Geocode />
        </div>
        <div className="w-1/3">
          <ReverseGeocode />
        </div>
        <div className="w-1/3">
          <CalculateDistance />
        </div>
      </div>
    </div>
  );
}

export default App;
