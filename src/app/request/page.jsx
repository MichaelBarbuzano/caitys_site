import React from 'react';
import NavBar from '../components/navbar'; // Import the NavBar component

const obj = { value: 1 };
const { value } = obj;
export default function request() {

  return (
    <div>
      <NavBar /> {/* Include the NavBar component */}
      {/* Your page content */}
      <h1 className="text-4xl font-bold text-center mb-8 z-10">Services</h1>
      <p>Integer Value: {value}</p>
    </div>
  );
}