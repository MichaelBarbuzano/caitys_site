'use client'
import React, { useState, useEffect } from 'react';
import NavBar from '../components/navbar'; // Import the NavBar component
import Image from 'next/image';
export default function Characters() {
  const [value, setValue] = useState(null);
  useEffect(() => {
    // Parse the query parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const value = "1";

    // Update the state with the parsed value
    setValue(value);
  }, []);
  const handleSelectChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <NavBar /> {/* Include the NavBar component */}
      <div style = {{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <select value={value} onChange={handleSelectChange} style={{ backgroundColor: 'white', color: 'black', border: '1px solid white' }}>
        <option value="1">Tenshi</option>
        <option value="2"> Naka </option>
        <option value="3">Soko</option>
        <option value="4">Dani</option>
      </select>
      {value === "1" && (
    <Image
      src="/assets/tenshi_sheet.jpg"
      alt="Service Card 1"
      width={950}
      height={200}
      style={{ paddingTop: '10px' }} // Add padding to the top of the image
    />
  )}
  {value === "2" && (
    <Image
      src="/assets/naka_sheet.jpg"
      alt="Service Card 2"
      width={950}
      height={100}
      style={{ paddingTop: '10px' }} // Add padding to the top of the image
    />
  )}
  {value === "3" && (
    <Image
      src="/assets/soko_sheet.jpg"
      alt="Service Card 3"
      width={950}
      height={100}
      style={{ paddingTop: '10px' }} // Add padding to the top of the image
    />
  )}
  {value === "4" && (
    <Image
      src="/assets/dani_sheet.jpg"
      alt="Service Card 3"
      width={950}
      height={100}
      style={{ paddingTop: '10px' }} // Add padding to the top of the image
    />
  )}
    </div>
    </div>
  );
}