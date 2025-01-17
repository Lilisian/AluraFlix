import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: radial-gradient(circle, #3fccfb 0%, #a746fc 100%);
  padding: 30px 50px;
  border-radius: 12px;
  width: 400px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8);
`;

const ModalTitle = styled.h2`
  text-align: center;
  color: #fff;
  font-size: 36px;
`;

const ModalContent = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #fff;
  font-size: 18px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: rgba(234, 248, 232, 0.5);
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: rgba(234, 248, 232, 0.5);
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: rgba(234, 248, 232, 0.5);
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #3fccfb;
    box-shadow: 0px 4px 15px rgba(255, 255, 255, 0.5);
  }
`;

const ButtonSalir = styled.button`
  padding: 10px;
  background-color: rgba(178, 13, 13, 0.7);
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    box-shadow: 0px 4px 15px rgba(255, 255, 255, 0.5);
    color: #000;
  }
`;

const Modal = ({ isOpen, onClose, image, onSave }) => {
  const [formData, setFormData] = useState({
    titulo: '',
    categoria: '',
    imagen: '',
    video: '',
    descripcion: '',
  });

  const categories = ["Front End", "Back End", "Innovación y Gestión"];

  useEffect(() => {
    if (image) {
      setFormData({
        titulo: image.name || '',
        categoria: image.category || '',
        imagen: image.path || '',
        video: image.video || '',
        descripcion: image.description || '',
      });
    }
  }, [image]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClear = () => {
    setFormData({
      titulo: '',
      categoria: '',
      imagen: '',
      video: '',
      descripcion: '',
    });
  };

  const handleSave = () => {
    const updatedImage = { ...image, ...formData };
    onSave(updatedImage); // Call the save function with the updated data
    onClose(); // Close the modal after saving
  };

  if (!isOpen) return null; 

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalTitle>EDITAR CARD</ModalTitle>
        <ModalContent>
          <Label>Título:</Label>
          <Input
            type="text"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
          />

          <Label>Categoría:</Label>
          <Select
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
          >
            <option value="">Seleccione una categoría</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </Select>

          <Label>Imagen:</Label>
          <Input
            type="text"
            name="imagen"
            value={formData.imagen}
            onChange={handleChange}
          />

          <Label>Video:</Label>
          <Input
            type="text"
            name="video"
            value={formData.video}
            onChange={handleChange}
          />

          <Label>Descripción:</Label>
          <TextArea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
          ></TextArea>
        </ModalContent>

        <ModalActions>
          <Button onClick={handleSave}>Guardar</Button>
          <Button onClick={handleClear}>Limpiar</Button>
          <ButtonSalir onClick={onClose}>Salir</ButtonSalir>
        </ModalActions>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
