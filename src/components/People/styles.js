import styled from 'styled-components'

export const PeopleBg = styled.div``

export const Content = styled.div`
    position: relative;
    display: flex!important;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100%;
    min-height: 100vh;
    background: ${props => props.black && props.theme.colors.black};
    text-align: center;

    img {
        max-height: 300px;
        max-width: 90vw;
        margin-bottom: 25px; 
        border: 5px solid ${props => props.black ? props.theme.colors.primary : props.theme.colors.black};
    }

    p, h5 {
        color: ${props => props.black && props.theme.colors.primary};
    }

    p {
        padding: 10px 0;
        font-size: 1.5rem;
        line-height: 1.5rem;
        @media (max-width: 767px) { padding: 10px 5%; }
        @media (min-width: 768px) and (max-width: 1024px) { padding: 10px 10%; }
        @media (min-width: 1025px) { padding: 10px 20%; }
    }
`

export const Arrow = styled.p`
    @media (max-width: 767px) { display: none; }
    position: absolute;
    font-size: 0.8rem!important;
    top: 35px;
    color: ${props => props.black && props.theme.colors.primary};
`

export const PageBalls = styled.div`
    position: absolute;
    display: flex;
    bottom: 35px;
`

export const Ball = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 0 3px;
    background: ${props => props.black ? props.theme.colors.primary : props.theme.colors.black};
`

export const BallSelected = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 0 3px;
    background: none;
    border: 2px solid ${props => props.black ? props.theme.colors.primary : props.theme.colors.black };
`