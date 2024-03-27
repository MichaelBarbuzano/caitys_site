// Gallery.jsx
import React from 'react';
import fs from 'fs';
import path from 'path';
import '../globals.css';

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
        {galleryImageNames.map((imageName, index) => (
          <div className="pics" key={index}  >
            <a href={`/gallery_images/${imageName}`} target="_blank" rel="noreferrer">
          <img
            key={index}
            src={`/gallery_images/${imageName}`}
            alt={`Image ${index + 1}`}
            className="gallery-image"
            style={{ width: "100%" }}
          />
          </a>
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