// Gallery.jsx
import React from 'react';
import fs from 'fs';
import path from 'path';
import '../globals.css';
import Image from 'next/image';

function Gallery() {
  // Get the path to the gallery images folder
  const galleryImagesPath = path.join(process.cwd(), 'public', 'gallery_images');

  // Read the contents of the gallery images folder
  const galleryImageNames = fs.readdirSync(galleryImagesPath);


  return (
    <div>
      <div>
      <div className="gallery">
      <div className="image-grid">
      {[...Array(10)].map((_, index) => (
          <div className="pics" key={index}>
            <Image
              src="/assets/card1.png"
              alt={`Service Card ${index + 1}`}
              width={2400}
              height={100}
            />
          </div>
        ))}
          </div>
        </div>
        </div>
      </div>
  );
}

export default Gallery;

// Use getStaticProps or getServerSideProps in pages that use Gallery component
export async function getStaticProps() {
  const galleryImagesPath = path.join(process.cwd(), 'public', 'gallery_images');
  const galleryImageNames = fs.readdirSync(galleryImagesPath);
  return {
    props: {
      galleryImageNames,
    },
  };
}