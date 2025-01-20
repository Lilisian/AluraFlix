import React, { useState } from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  padding: 20px;
  background: radial-gradient(circle, #3fccfb 0%, #a746fc 100%);
`;

const Title = styled.h1`
  text-align: center;
  color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const Label = styled.label`
  margin-bottom: 5px;
  color: white;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Select = styled.select`
  margin-bottom: 20px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;


const TextArea = styled.textarea`
  margin-bottom: 20px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
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
  }
`;

const NuevoVideo = ({ onAddVideo }) => {
  const [formData, setFormData] = useState({
    titulo: '',
    categoria: '',
    imagen: '',
    video: '',
    descripcion: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddVideo(formData); // Call the function to add the new video
    setFormData({ titulo: '', categoria: '', imagen: '', video: '', descripcion: '' }); // Reset form
  };

  return (
    <MainContainer>
      <Title>Nuevo Video</Title>
      <Form onSubmit={handleSubmit}>
        <Label>Título:</Label>
        <Input type="text" name="titulo" value={formData.titulo} onChange={handleChange} />

        <Label>Categoría:</Label> 
        <Select name="categoria" value={formData.categoria} onChange={handleChange}>
        <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
          <option value="Front End">Front End</option>
          <option value="Back End">Back End</option>
          <option value="Innovación y Gestión">Innovación y Gestión</option>
        </Select>

        <Label>Imagen:</Label>
        <Input type="text" name="imagen" value={formData.imagen} onChange={handleChange} />

        <Label>Video:</Label>
        <Input type="text" name="video" value={formData.video} onChange={handleChange} />

        <Label>Descripción:</Label>
        <TextArea name="descripcion" value={formData.descripcion} onChange={handleChange}></TextArea>

        <Button type="submit">Guardar</Button>
      </Form>
    </MainContainer>
  );
};

export default NuevoVideo;
