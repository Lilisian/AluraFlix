import styled from "styled-components";
import GlobalStyles from "./componentes/GlobalStyles";
import Header from "./componentes/Header";
import Banner from "./componentes/Banner";
import banner from "./assets/banner.png";
import imgBanner from "./assets/img__banner.png";
import Frontend from "./componentes/Categories/Frontend";
import Backend from "./componentes/Categories/Backend";
import Innovacion from "./componentes/Categories/Innovacion";
import Gestion from "./componentes/Categories/Gestion";
import Footer from "./componentes/Footer";



const Fondo = styled.div`
  background: radial-gradient(circle, #3fccfb 0%, #a746fc 100%);
  width: 100%;
  min-height: 100vh;
`;

function App() {
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
         <Frontend />
         <Backend />
         <Innovacion />
         <Gestion />
         <Footer/> 
      </Fondo>
    </>
  );
}

export default App;
