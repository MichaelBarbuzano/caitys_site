import Image from 'next/image'
import React from 'react';
import NavBar from './components/navbar'; // Import the NavBar component
import Gallery from './components/gallery'; // Import the Gallery component

export default function Home() {
  return (
    <div>
      {/*Navigation bar */}
      <nav className="nav-bar bg-gray-800 p-4">
        <div className="home">
      {/* Using the anchor element with background image */}

      <a href="/" className="home-link"></a>
      </div>

      <div className="container mx-auto flex justify-center">
          <a href="/about" className="text-white ml-4">About</a>
          <a href="/services" className="text-white ml-4">Services</a>
          <a href="/characters" className="text-white ml-4">Characters</a>
          <a href="/comic" className="text-white ml-4">Comic</a>
        </div>
      </nav>
      {/* Main content */}
      <main className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4 flex justify-center">Homepage</h1>
        
        {/* Images and text */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Image
              src="/assets/test.png"
              alt="Image 1"
              width={400}
              height={300}
            />
            <p className="mt-2">Description for image 1</p>
          </div>
          <div>
            <Image
              src="/assets/test.png"
              alt="Image 2"
              width={400}
              height={300}
            />
            <p className="mt-2">Description for image 2</p>
          </div>
        </div>
      </main>
      <h1>Gallery Page</h1>
      <Gallery /> {/* Include the Gallery component */}
    </div>
  );
}
