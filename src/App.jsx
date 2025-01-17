import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./componentes/GlobalStyles";
import Header from "./componentes/Header";
import Banner from "./componentes/Banner";
import banner from "./assets/banner.png";
import imgBanner from "./assets/img__banner.png";
import Footer from "./componentes/Footer";
import Categoria from "./componentes/Categories";
import Modal from "./componentes/Modal";

const Fondo = styled.div`
  background: radial-gradient(circle, #3fccfb 0%, #a746fc 100%);
  width: 100%;
  min-height: 100vh;
`;

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageData, setImageData] = useState(null); // State to hold the current image data
  const [categories, setCategories] = useState({
    backend: [],
    frontend: [],
    "innovacion y gestion": [],
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleEdit = (image) => {
    setImageData(image); // Set the current image data to be edited
    setIsModalOpen(true); // Open the modal
  };

  const handleSave = (updatedImage) => {
    // Update the state with the new image data
    setCategories((prevCategories) => {
      const updatedCategories = { ...prevCategories };
      const categoryKey = updatedImage.categoria.toLowerCase();
      const index = updatedCategories[categoryKey].findIndex(img => img.id === updatedImage.id);
      if (index !== -1) {
        updatedCategories[categoryKey][index] = updatedImage; // Update the image in the category
      }
      return updatedCategories;
    });
    setImageData(updatedImage);
  };

  return (
    <>
      <Fondo>
        <GlobalStyles />
        <Header />
        <Banner
          Highlight="Front End"
          titulo="Challenge React"
          texto="Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React."
          backgroundImage={banner}
          imagen={imgBanner}
        />

        <div>
          <Categoria
            title="BACK END"
            category="backend"
            background="rgba(234, 248, 232, 0.5)"
            backgroundColor="#2c5f2d"
            onEdit={handleEdit}
            images={categories.backend}
          />
          <Categoria
            title="FRONT END"
            category="frontend"
            background="rgba(234, 244, 252, 0.5)"
            backgroundColor="#2d5f8a"
            onEdit={handleEdit}
            images={categories.frontend}
          />
          <Categoria
            title="INNOVACIÓN Y GESTIÓN"
            category="innovacion y gestion"
            background="rgba(253, 236, 234, 0.5)"
            backgroundColor="#8a2d2d"
            onEdit={handleEdit}
            images={categories["innovacion y gestion"]}
          />
        </div>

        <div>
          <Modal isOpen={isModalOpen} onClose={handleCloseModal} image={imageData} onSave={handleSave} />
        </div>

        <Footer />
      </Fondo>
    </>
  );
};
export default App;
