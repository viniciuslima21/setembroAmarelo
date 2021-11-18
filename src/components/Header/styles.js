import styled from 'styled-components'

export const HeaderBg = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100%;
    height: 100vh;
    overflow: hidden;
`

export const Subtitle = styled.p`
    font-weight: 500;
    font-size: 1.4rem;
`

export const Tie = styled.img`
    position: absolute;
    width: 30vw;
    bottom: -5vw;
    right: -8vw;
    transform: rotate(15deg);
    user-select: none;
`