import styled from "styled-components";

const HeaderEstilizado = styled.header`
    background-color: #000000;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 30px;
    box-shadow: 0px 4px 10px #3fccfb;
    margin-bottom: 20px;

    img {
        height: 40px;
    }

    button {
        background-color: #a746fc;
        color: white;
        border-radius: 10px;
        padding: 10px 20px;
        cursor: pointer;
        font-size: 16px;
        transition: background-color 0.3s ease, box-shadow 0.3s ease;
    }

    button:hover {
        background-color: #3fccfb;
        box-shadow: 0px 4px 15px rgba(63, 204, 251, 0.5);
    }
`

const Header = () => {
    return <HeaderEstilizado>
            <img src="imagenes/LogoMain.png" alt="Logo AluraFlix"/>
            <button>Home</button>
            <button>Nuevo video</button>
        </HeaderEstilizado>
}

export default Header