import React from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images }) => {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery; 