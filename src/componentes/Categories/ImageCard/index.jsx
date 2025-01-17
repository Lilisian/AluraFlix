import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 420px;
  height: 260px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: space-around;
  gap: 10px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  color: #fff;
  background-color: #007bff;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ImageCard = ({ imagePath, imageName, onEdit, onDelete }) => {
  return (
    <CardContainer>
      <Image src={imagePath} alt={imageName} />
      <ButtonContainer>
        <Button onClick={() => onEdit({ imagePath, imageName })}>Editar</Button>
        <Button onClick={onDelete}>Borrar</Button>
      </ButtonContainer>
    </CardContainer>
  );
};

export default ImageCard;
