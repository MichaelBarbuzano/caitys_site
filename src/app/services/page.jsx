import Image from 'next/image';
import React from 'react';
import NavBar from '../components/navbar'; // Import the NavBar component
import Card from '../components/Card';

export default function Services() {
  return (
    <div>
      <NavBar /> {/* Include the NavBar component */}
      {/* Your page content */}

      {/* Images and text */}
      <div className="background-container relative">
        <Image
          src="/assets/services.png"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center bottom"
        />
        <h1 className="text-4xl font-bold text-center mb-8 z-10">Services</h1>

        {/* Listing services <Card />*/}
        <Card />
      </div>
    </div>
  );
}
