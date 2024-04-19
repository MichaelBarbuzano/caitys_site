
import Image from 'next/image'
import React from 'react';
import Head from 'next/head'; // Import Head from next/head
import NavBar from './components/navbar'; // Import the NavBar component
import Gallery from './components/gallery'; // Import the Gallery component
import './globals.css'

export default function Home() {
  return (
    <div>
      {/* Include the viewport meta tag */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* Navigation bar */}
      <NavBar />
      {/* Include the Gallery component */}
      <Gallery />
    </div>
  );
}
