"use client"
import React, { useState, useEffect } from 'react';
import path from 'path';
import '../globals.css';
import { LazyLoadImage } from "react-lazy-load-image-component";

// Define an array of image names
const galleryImageNames = [
  'a.png',
  'abcIMG_0790.png',
   'abIMG_0339.png',
'IMG_0001.png',
'IMG_0004.png',
'IMG_0022.png',
'IMG_0099.png',
'IMG_0327.png',
'IMG_0339.png',
'IMG_0400.png',
'IMG_0401.png',
'IMG_0432.png',
'IMG_0468.png',
'IMG_0509.png',
'IMG_0512.png',
'IMG_0548.png',
'IMG_0555.png',
'IMG_0573.png',
'IMG_0583.png',
'IMG_0589.png',
'IMG_0594.png',
'IMG_0622.png',
'IMG_0629.png',
'IMG_0637.png',
'IMG_0641.png',
'IMG_0645.png',
 'IMG_0648.png',
  'IMG_0657.png',
   'IMG_0659.png',
    'IMG_0665.png',
     'IMG_0679.png',
      'IMG_0719.png',
       'IMG_0743.png',
        'IMG_0744.png',
         'IMG_0767.png',
          'IMG_0769.png',
           'IMG_0770.png',
            'rosePattern.png',
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
                  placeholderSrc="placeholder.jpg"
                  style={{ width: "100%" }}
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
