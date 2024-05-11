import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import './index.css';

function CalculateDistance() {
  const [lat1, setLat1] = useState('');
  const [lng1, setLng1] = useState('');
  const [lat2, setLat2] = useState('');
  const [lng2, setLng2] = useState('');
  const [result, setResult] = useState(null);

  const fetchDistance = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/calculate_distance?lat1=${lat1}&lng1=${lng1}&lat2=${lat2}&lng2=${lng2}`);
      setResult(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setResult({error: "Failed to fetch data"});
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Calculate Distance</h2>
      <div className="mb-4">
        <input
          type="text"
          value={lat1}
          onChange={(e) => setLat1(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter latitude 1"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          value={lng1}
          onChange={(e) => setLng1(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter longitude 1"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          value={lat2}
          onChange={(e) => setLat2(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter latitude 2"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          value={lng2}
          onChange={(e) => setLng2(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter longitude 2"
        />
      </div>
      <button
        onClick={fetchDistance}
        className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Get Distance
      </button>
      {result && <div className="mt-4">{JSON.stringify(result)}</div>}
    </div>
  );
}

export default CalculateDistance;
