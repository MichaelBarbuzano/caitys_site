// about.js
import React from 'react';
import NavBar from '../components/navbar'; // Import the NavBar component
import Image from 'next/image';

export default function About() {
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
    </div>
    </div>
  );
}