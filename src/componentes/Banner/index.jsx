import styled from "styled-components";

const FigureEstilizado = styled.figure`
  background-image: ${props => `url(${props.$backgroundImage})`};
  display: flex;
  flex-direction: column;
  justify-content: flex-end; 
  min-height: 500px;
  height: 100vh;
  margin: 0;
  max-width: 100%;
  background-size: cover;
  background-position: center;
  padding: 20px; 

  @media (max-width: 768px) {
    min-height: 300px;
    padding: 10px;
  }
`;

const ContenedorFlex = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: space-between; 
  align-items: flex-end; 
  width: 100%;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContenidoTexto = styled.div`
  display: flex;
  flex-direction: column; 
  max-width: 70%; 

  @media (max-width: 768px) {
    max-width: 100%;
    align-items: center;
    text-align: center;
  }
`;

const TituloEstilizado = styled.p`
  font-size: 18px;
  color: #ffffff;
  max-width: 600px;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const BannerTitle = styled.h2`
  color: #ffffff;
  font-size: 46px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const HighlightBoxes = styled.div`
  display: flex;
  margin: 10px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const HighlightBox = styled.div`
    width: 297px;
    height: 92px;
    background: #3fccfb;
    color: #fff;
    padding: 15px 64px;
    border-radius: 8px;
    font-size: 48px;
    font-weight: bolder;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      width: 100%;
      font-size: 24px;
      padding: 10px;
    }
`;

const ImagenEstilizada = styled.img`
  width: 647px;
  height: 333px;
  height: auto;
  border-radius: 8px;
  margin-left: 20px; 

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

const Banner = ({ texto, backgroundImage, titulo, Highlight, imagen }) => {
  return (
    <FigureEstilizado $backgroundImage={backgroundImage}>
      <ContenedorFlex>
        <ContenidoTexto>
          <HighlightBoxes>
            <HighlightBox>{Highlight}</HighlightBox>
          </HighlightBoxes>
          <BannerTitle>{titulo}</BannerTitle>
          <TituloEstilizado>{texto}</TituloEstilizado>
        </ContenidoTexto>
        {imagen && <ImagenEstilizada src={imagen} alt="Imagen del banner" />}
      </ContenedorFlex>
    </FigureEstilizado>
  );
};

export default Banner;
