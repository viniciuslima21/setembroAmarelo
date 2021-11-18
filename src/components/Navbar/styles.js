import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
    from { opacity: 0; }
    to   { opacity: 1; }
`

export const NavbarContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    width: 100%;
    max-width: 100%;
    top: 0;
    z-index: 2;
    padding: 0 5vw;
    color: ${props => props.theme.colors.black};
    transition: .5s ease;
    background: ${props => props.changeBg === false ? 'rgba(0,8, 20, 0)' : 'rgba(230, 181, 7, .95)'};
    @media (min-width: 1025px) { padding: 0 8vw; }
`

export const Logo = styled.div`
    font-weight: 800;
    font-size: 2.3rem;
    margin: 1rem 0;
`

export const Buttons = styled.div`
    display: none;
    @media (min-width: 1025px) { display: flex; }
`

export const Button = styled.a`
    font-weight: 500;
    font-size: ${props => props.buttonHamburger ? '1.3rem' : '1.5rem'};
    text-decoration: none;
    cursor: pointer;
    margin-left: ${props => !props.buttonHamburger && '5rem'};
    ${props => props.buttonHamburger && 'margin: 1.5rem 0'};
    color: ${props => props.theme.colors.black};


    :hover {
        color: black;
    }
`

export const Hamburger = styled.div`
    font-size: 2rem;
    @media (min-width: 1025px) { display: none; }

    :hover {
        color: ${props => props.theme.colors.yellow};
    }
`

export const ButtonsHamburger = styled.div`
    position: fixed;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: ${props => props.opened === false ? 'none' : 'flex'};
    animation: ${fadeIn} .5s;

    z-index: 1;
    width: 100%;
    height: 100vh;
    background: ${props => props.theme.colors.second};
`