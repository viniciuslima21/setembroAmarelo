import styled from 'styled-components'

export const HelpBg = styled.div`
    text-align: justify;
    background: ${props => props.theme.colors.second};
    
    p {
        padding: 8px;
    }

    p:last-child {
        text-align: center;
    }
`