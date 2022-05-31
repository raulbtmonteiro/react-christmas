import styled from 'styled-components'

export const HomeContainer= styled.section`
    background-color: ${props => props.theme.backgroundColor};
`;

export const HomeWrapper= styled.div`
    max-width: 1170px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        max-height: 360px;
    }
`;

export const HomeInfo = styled.div`
    button{
        margin-bottom: 12em;
    }
`;

export const HomeTitle = styled.h1`
    font-weight: 600;
    font-size: 48px;
    line-height: 1.08em;

    margin-top: 2em;

    color: ${props => props.theme.titleColor};
`;

export const HomeDescription = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5em;

    margin: 1.5em 0 2.5em;
    max-width: 444px;

    color: ${props => props.theme.descriptionColor};
`;