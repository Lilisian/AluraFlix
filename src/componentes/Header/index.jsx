import styled from "styled-components";

const HeaderEstilizado = styled.header`
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    padding: 30px;
    box-shadow: 0px 4px 10px #3fccfb;
    margin-bottom: 20px;
    justify-content: space-between;

    img {
        height: 40px;
    }

    button {
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        border-radius: 10px;
        padding: 10px 70px;
        cursor: pointer;
        font-size: 18px;
        transition: background-color 0.3s ease, box-shadow 0.3s ease;
    }

    button:hover {
        background-color: #3fccfb;
        box-shadow: 0px 4px 15px rgba(63, 204, 251, 0.5);
    }

    .buttons {
        display: flex;
        gap: 20px;
    }

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
        padding: 20px;

        .buttons {
            flex-direction: column;
            gap: 10px;
        }

        button {
            width: 100%;
            padding: 10px;
            text-align: center;
        }
    }
`;

const Header = ({ onNuevoVideoClick, onHomeClick }) => {
    return (
        <HeaderEstilizado>
            <img src="imagenes/LogoMain.png" alt="Logo AluraFlix"/>
            <div className="buttons">
                <button onClick={onHomeClick}>Home</button>
                <button onClick={onNuevoVideoClick}>Nuevo video</button>
            </div>
        </HeaderEstilizado>
    );
};

export default Header;
