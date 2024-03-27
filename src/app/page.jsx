import Image from 'next/image'
import React from 'react';
import NavBar from './components/navbar'; // Import the NavBar component
import Gallery from './components/gallery'; // Import the Gallery component
import './globals.css'

export default function Home() {
  return (
    <div>
      {/*Navigation bar */}
      <NavBar /> 
      {/* Include the Gallery component */}
      
      <Gallery /> 

    </div>
  );
}
