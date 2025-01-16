import React from "react";
import styled from "styled-components";


const CategoriaContainer = styled.div`
  background: ${props => props.background || "#f4f4f4"};
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CategoriaTitle = styled.h3`
  font-size: 24px;
  color: ${props => props.color || "#000"};
  margin-bottom: 10px;
`;

const CategoriaDescription = styled.p`
  font-size: 16px;
  color: #666;
`;

const Categoria = ({ title, description, background, color }) => {
  return (
    <CategoriaContainer background={background}>
      <CategoriaTitle color={color}>{title}</CategoriaTitle>
      <CategoriaDescription>{description}</CategoriaDescription>
    </CategoriaContainer>
  );
};

export default Categoria;
