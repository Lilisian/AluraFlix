import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ImageCard from "./ImageCard";

const CategoriaContainer = styled.div`
  background: ${(props) => props.background || "#f4f4f"};
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CategoriaTitle = styled.h3`
  font-size: 32px;
  background-color: ${(props) => props.backgroundColor || "#000"};
  margin-bottom: 30px;
  display: inline-block;
  padding: 25px 100px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.9);
  color: aliceblue;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const Categoria = ({ title, category, background, backgroundColor, onEdit }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
const fetchImages = async () => {
  try {
    const response = await fetch("http://localhost:3000/images");
    console.log('Response status:', response.status); // Log the response status
    const data = await response.json();
    console.log('Fetched images data:', data); // Log the fetched data

    // Filter images by category
    const categoryImages = data[category] || [];
    setImages(categoryImages);
  } catch (error) {
    console.error("Error fetching images:", error);
  }
};


    fetchImages();
  }, [category]);

  const handleDelete = async (id) => {
    try {
      // Perform a DELETE request to the API
      await fetch(`http://localhost:3000/images/${id}`, {
        method: "DELETE",
      });

      // Update the local state by removing the image with the specified ID
      setImages((prevImages) => prevImages.filter((image) => image.id !== id));
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  // Show only if there are images in the category
  if (images.length === 0) {
    return (
      <CategoriaContainer background={background}>
        <CategoriaTitle backgroundColor={backgroundColor}>
          {title}
        </CategoriaTitle>
        <p>No hay imágenes disponibles en esta categoría.</p>
      </CategoriaContainer>
    );
  }

  return (
    <CategoriaContainer background={background}>
      <CategoriaTitle backgroundColor={backgroundColor}>
        {title}
      </CategoriaTitle>
      <ImageContainer>
        {images.map((image) => (
          <ImageCard
            key={image.id}
            imagePath={image.path}
            imageName={image.name}
            onDelete={() => handleDelete(image.id)}
            onEdit={() => onEdit(image)}
          />
        ))}
      </ImageContainer>
    </CategoriaContainer>
  );
};

export default Categoria;
