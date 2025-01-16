import styled from "styled-components";

const FigureEstilizada = styled.figure`
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
`;

const ContenedorFlex = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: space-between; 
  align-items: flex-end; 
  width: 100%;
`;

const ContenidoTexto = styled.div`
  display: flex;
  flex-direction: column; 
  max-width: 70%; 
`;

const TituloEstilizado = styled.p`
  font-size: 18px;
  color: #ffffff;
  max-width: 600px;
  margin-top: 10px;
`;

const BannerTitle = styled.h2`
  color: #ffffff;
  font-size: 46px;
  margin-bottom: 10px;
`;

const HighlightBoxes = styled.div`
  display: flex;
  margin: 10px 0;
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
`;

const ImagenEstilizada = styled.img`
  width: 647px;
  height: 333px;
  height: auto;
  border-radius: 8px;
  margin-left: 20px; 
`;

const Banner = ({ texto, backgroundImage, titulo, Highlight, imagen }) => {
  return (
    <FigureEstilizada $backgroundImage={backgroundImage}>
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
    </FigureEstilizada>
  );
};

export default Banner;
