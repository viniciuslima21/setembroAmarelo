import styled from 'styled-components'

export const CampaignBg = styled.div`
    background: ${props => props.theme.colors.second};
    text-align: justify;

    p {
        padding: 8px;
    }

    p:last-child {
        text-align: center;
    }

`