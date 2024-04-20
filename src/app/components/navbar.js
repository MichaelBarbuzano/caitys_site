'use client'
import React, { useState, useEffect } from 'react';

function NavBar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 520); // Adjust the threshold as needed for mobile screens
    };
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Initial check for mobile view
        handleResize();
    
        // Cleanup on component unmount
        return () => window.removeEventListener('resize', handleResize);
      }, []);
  return (
    <nav className="nav-bar p-4 flex flex-wrap justify-center items-center">
      <div className="home">
        {/* Using the anchor element with background image */}
        <a href="/" className="home-link"><img src="/assets/Primcon4.png" alt="Description of your image"></img></a>
        
      </div>
      <div className="container mx-auto flex justify-center" style={{ fontSize: '20px', fontFamily: 'impact, sans-serif', textShadow: '0 0 3px pink' }}>
        <a href="/services" className="text-white ml-4">Services</a>
        <a href="/characters" className="text-white ml-4">Characters</a>
        <a href="/webtoon" className="text-white ml-4">Webtoon</a>
      </div>

      
      {!isMobile && (
        <div className="social-icons flex justify-center mt-4">
          {/* Using the anchor element with background image */}
          <a href="https://twitter.com/PlayfulPetals" className="x-link" target="_blank"></a>
          <a href="https://www.instagram.com/primrosexvt/" className="insta-link ml-4" target="_blank"></a>
        </div>
      )}
      {isMobile && (
        <div className="social-icons flex justify-end mt-4">
          {/* Using smaller versions of the social icons for mobile */}
          <a href="https://twitter.com/PlayfulPetals" className="x-link" target="_blank"style={{ marginRight: '-15px', marginTop: '28px', width: '25px', height: '25px' }}></a>
          <a href="https://www.instagram.com/primrosexvt/" className="insta-link ml-4" target="_blank" style={{ marginRight: '-40px', marginTop: '28px', width: '25px', height: '25px' }}></a>
        </div>
      )}
    </nav>
  );
}

export default NavBar;