import React, { useState } from 'react';
import axios from 'axios';

function Geocode() {
  const [address, setAddress] = useState('');
  const [result, setResult] = useState(null);

  const fetchCoordinates = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/geocode?address=${address}`);
      setResult(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setResult({error: "Failed to fetch data"});
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Geocode</h2>
      <div className="mb-4">
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        placeholder="Enter address"
      />
      </div>
      <button onClick={fetchCoordinates} className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Get Coordinates</button>
      {result && <div className="mt-4">{JSON.stringify(result)}</div>}
    </div>
  );
}

export default Geocode;
