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
      <main className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4 flex justify-center">Homepage</h1>
        
      </main>
      {/* Include the Gallery component */}
      <Gallery /> 
    </div>
  );
}
