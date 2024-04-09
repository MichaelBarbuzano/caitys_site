/** @type {import('next').NextConfig} */
const nextConfig = {}
const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
    optimizeImages: true, // Enable image optimization
    handleImages: ['jpeg', 'png'], // Specify which image types to handle
    /* Other configuration options here */
    
  }); 
