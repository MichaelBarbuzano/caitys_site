// NavBar.js
import React from 'react';

function NavBar() {
  return (
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
  );
}

export default NavBar;