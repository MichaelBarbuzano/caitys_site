/** @type {import('next').NextConfig} */
const nextConfig = {}
const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
    optimizeImages: true, // Enable image optimization
    /* Other configuration options here */
  });
