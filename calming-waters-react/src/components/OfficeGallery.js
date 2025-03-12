import React, { useState } from "react";

const images = [
  { src: "/calming-waters-pics/office1.jpeg", alt: "Office 1" },
  { src: "/calming-waters-pics/office2.jpeg", alt: "Office 2" },
  { src: "/calming-waters-pics/office3.jpeg", alt: "Office 3" },
  { src: "/calming-waters-pics/office4.jpg", alt: "Office 4" },
];

const OfficeGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-container">
      <div className="gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="gallery-image"
            onClick={() => setSelectedImage(image.src)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <span className="close">&times;</span>
          <img src={selectedImage} alt="Selected" className="modal-content" />
        </div>
      )}
    </div>
  );
};

export default OfficeGallery;