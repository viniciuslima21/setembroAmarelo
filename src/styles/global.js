import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        overflow-x: hidden;
        font-family: 'Caveat', sans-serif;
        background: ${props => props.theme.colors.primary};
        -webkit-font-smoothing: antialiased !important;
    }

    html {
        scroll-behavior: smooth; //Scroll suave
    }

    p {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 1.3rem;
        color: ${props => props.theme.colors.black};
    }

    h1 {
        font-weight: 700;
        color: ${props => props.theme.colors.black};
        @media (max-width: 767px) { font-size: 3.5rem; }
        @media (min-width: 768px) and (max-width: 1024px) { font-size: 5rem; }
        @media (min-width: 1025px) { font-size: 5vw; }
    }

    h3 {
        font-weight: 800;
        font-size: 3.5rem;
        margin-bottom: 10px;
        text-align: center;
        color: ${props => props.theme.colors.black};
    }

    h4 {
        font-weight: 400;
        font-size: 5rem;
        line-height: 5rem;
        color: ${props => props.theme.colors.primary};
    }

    h5 {
        font-weight: 400;
        font-size: 3rem;
        line-height: 3rem;
        color: ${props => props.theme.colors.black};
    }

    a {
        color: ${props => props.theme.colors.white};
        text-decoration: none;

        :hover {
            transition: .5s ease;
            color: ${props => props.theme.colors.yellow}
        }
    }
`

export default GlobalStyles