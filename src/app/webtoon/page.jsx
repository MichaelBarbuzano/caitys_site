// about.js
import React from 'react';
import NavBar from '../components/navbar'; // Import the NavBar component
import Image from 'next/image';

export default function webtoon() {
  return (
    <div>
      <NavBar /> {/* Include the NavBar component */}
      {/* Your page content */}
      <div className="relative ">
      <Image
        src="/assets/comingSoon.png"
        alt="Service Card 1"
        width={2000}
        height={100}
      />
    </div>
    </div>
  );
}