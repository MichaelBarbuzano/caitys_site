import Image from 'next/image';
import React from 'react';
import NavBar from '../components/navbar'; // Import the NavBar component

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

        {/* Listing services */}
        <div className="grid grid-cols-3 gap-20 relative mt-56 p-5">
          {/* Service cards */}
          <div className="relative ">
            <Image
              src="/assets/serviceCard.png"
              alt="Service Card 1"
              width={2400}
              height={100}
            />
            <a href="/about">
            <Image
              src="/assets/buyButton.png"
              alt="Buy Button 1"
              width={2400}
              height={100}
              className="-mt-52" // Add negative margin-top to move the button closer to the image
            />
            </a>
          </div>
          <div className="relative ">
            <Image
              src="/assets/serviceCard.png"
              alt="Service Card 2"
              width={2400}
              height={100}
            />
            <Image
              src="/assets/buyButton.png"
              alt="Buy Button 1"
              width={2400}
              height={100}
              className="-mt-52" // Add negative margin-top to move the button closer to the image
            />
          </div>
          <div className="relative">
            <Image
              src="/assets/serviceCard.png"
              alt="Service Card 3"
              width={2400}
              height={100}
            />
            <Image
              src="/assets/buyButton.png"
              alt="Buy Button 1"
              width={2400}
              height={100}
              className="-mt-52" // Add negative margin-top to move the button closer to the image
            />
          </div>
        </div>
      </div>
    </div>
  );
}
