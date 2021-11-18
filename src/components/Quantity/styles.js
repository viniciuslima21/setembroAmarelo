import styled from 'styled-components'

import griefImg from '../../assets/grief.jpg'

export const QuantityBg = styled.div`
    display: grid;
    @media (max-width: 1024px) { grid-template-columns: 1fr; }
    @media (min-width: 1025px) { grid-template-columns: 1fr 2fr; }
    width: 100%;
    min-height: 80vh;
`

export const ImgBg = styled.div`
    @media (max-width: 1024px) { display: none; }
    background-image: url(${griefImg});
    background-size: cover;
    background-position: right center;
    background-repeat: no-repeat;
`

export const DeathsBg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background: ${props => props.theme.colors.black};
    text-align: center;

    p {
        color: ${props => props.theme.colors.primary};
        padding-bottom: 50px;
    }
`