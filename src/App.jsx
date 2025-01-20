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
import NuevoVideo from "./componentes/NuevoVideo";

const Fondo = styled.div`
  background: radial-gradient(circle, #3fccfb 0%, #a746fc 100%);
  width: 100%;
  min-height: 100vh;
`;

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageData, setImageData] = useState(null);
  const [categories, setCategories] = useState({
    backend: [],
    frontend: [],
    "innovacion y gestion": [],
  });
  const [isNuevoVideoOpen, setIsNuevoVideoOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleEdit = (image) => {
    setImageData(image);
    setIsModalOpen(true);
  };

  const handleSave = (updatedImage) => {
    setCategories((prevCategories) => {
      const updatedCategories = { ...prevCategories };
      const categoryKey = updatedImage.categoria.toLowerCase();
      
      // Aseguramos que la categoría esté definida
      if (updatedCategories[categoryKey]) {
        const index = updatedCategories[categoryKey].findIndex(img => img.id === updatedImage.id);
        if (index !== -1) {
          updatedCategories[categoryKey][index] = updatedImage;
        }
      }
      
      return updatedCategories;
    });
    setImageData(updatedImage);
  };

  const handleNuevoVideoOpen = () => {
    setIsNuevoVideoOpen(true);
  };

  const handleAddVideo = (newVideo) => {
    const newId = Date.now(); // Generate a unique ID based on the current timestamp
    const videoWithId = { ...newVideo, id: newId }; // Add the new ID to the video object

    setCategories((prevCategories) => {
      const updatedCategories = { ...prevCategories };
      const categoryKey = newVideo.categoria.toLowerCase();

      // Aseguramos que la categoría esté definida
      if (updatedCategories[categoryKey]) {
        updatedCategories[categoryKey].push(videoWithId);
      }
      return updatedCategories;
    });
    setIsNuevoVideoOpen(false); // Close the NuevoVideo form after adding
  };

  const handleHomeClick = () => {
      setIsNuevoVideoOpen(false); // Close the Nuevo Video form if open
      setIsModalOpen(false); // Close any open modal
      // Additional logic to reset the view to the home content can be added here
  };

  return (
      <>
          <Fondo>
              <GlobalStyles />
              <Header onNuevoVideoClick={handleNuevoVideoOpen} onHomeClick={handleHomeClick} />
              {isNuevoVideoOpen ? (
                  <>
                      <NuevoVideo onAddVideo={handleAddVideo} />
                      <Modal isOpen={isModalOpen} onClose={handleCloseModal} image={imageData} onSave={handleSave} />
                  </>
              ) : (
                  <>
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
                      <Modal isOpen={isModalOpen} onClose={handleCloseModal} image={imageData} onSave={handleSave} />
                  </>
              )}
              <Footer />
          </Fondo>
      </>
  );
};

export default App;

