// Gallery.js
import React from 'react';
import fs from 'fs';
import path from 'path';

function Gallery() {
  // Get the path to the gallery images folder
  const galleryImagesPath = path.join(process.cwd(), 'public', 'gallery_images');

  // Read the contents of the gallery images folder
  const galleryImageNames = fs.readdirSync(galleryImagesPath);

  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <div className="image-grid">
        {galleryImageNames.map((imageName, index) => (
          <img
            key={index}
            src={`/gallery_images/${imageName}`}
            alt={`Image ${index + 1}`}
            className="gallery-image"
            style={{ width: '50%', height: '50%' }} // Scale down each image to half of its original size
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;