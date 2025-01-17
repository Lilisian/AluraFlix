import React from 'react';
import logo from '/imagenes/LogoMain.png';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
`;

const Logo = styled.img`
    width: 168px;
    height: 40px;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <Logo src={logo} alt="Logo" />
        </FooterContainer>
    );
};

export default Footer;