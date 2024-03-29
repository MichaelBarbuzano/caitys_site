"use client"
import React, { useState, useEffect } from 'react';
import path from 'path';
import '../globals.css';
import { LazyLoadImage } from "react-lazy-load-image-component";

// Define an array of image names
const galleryImageNames = [
  'a.png',
  'a.png',
  'a.png',
  'a.png',
  'a.png',
  'a.png',
  'a.png',
  'a.png',
  'a.png',
  'a.png',
  'a.png',
  'a.png',
  'a.png',
  'a.png',
  'a.png',
  // Add more image names as needed
];

function Gallery() {
  const [imageLoaded, setImageLoaded] = useState(false)


  const columnData = [[], [], [], [], []];

  // Distribute images evenly across columns
  galleryImageNames.forEach((imageName, index) => {
    const columnIndex = index % 5; // Distribute images into 5 columns
    columnData[columnIndex].push(imageName);
  });

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }}>
        {columnData.map((columnImages, columnIndex) => (
          <div key={columnIndex} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {columnImages.map((imageName, index) => (
              <a href={`/gallery_images/${imageName}`} target="_blank" rel="noreferrer">
                <LazyLoadImage
                  key={index}
                  src={`/gallery_images/${imageName}`}
                  loading="lazy"
                  className="gallery-image"
                  style={{ width: "100%" }}
                  effect="blur"
                />
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
