// NavBar.js
import React from 'react';

function NavBar() {
  return (
    <nav className="nav-bar p-4">
      <div className="home">
        {/* Using the anchor element with background image */}
        <a href="/" className="home-link"></a>
      </div>
      <div className="container mx-auto flex justify-center" style={{ fontSize: '25px', fontFamily: 'impact, sans-serif', textShadow: '0 0 3px pink' }}>
        <a href="/about" className="text-white ml-4" >About</a>
        <a href="/services" className="text-white ml-4">Services</a>
        <a href="/characters" className="text-white ml-4">Characters</a>
        <a href="/webtoon" className="text-white ml-4">Webtoon</a>
      </div>

      <div className="x">
      {/* Using the anchor element with background image */}

      <a href="https://twitter.com/PlayfulPetals" className="x-link" target="_blank"></a>
      </div>
      <div className="insta">
      {/* Using the anchor element with background image */}

      <a href="https://www.instagram.com/primrosexvt/" className="insta-link" target="_blank"></a>
      </div>
    </nav>
  );
}

export default NavBar;