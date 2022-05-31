import styled from 'styled-components'

export const Wrapper = styled.section`
    max-width: 1170px;
    margin: 0 auto;
    text-align: center;

    @media screen and (max-width: 1170px) {
        padding: 0 24px;
    }
`;

export const AcessoriesTitle = styled.h2`
    font-weight: 600;
    font-size: 48px;
    line-height: 1.5em;

    margin-top: 1em;

    color: ${props => props.theme.titleColor};

    @media screen and (max-width: 720px) {
        font-size: 24px;
    }
`;

export const AcessoriesDescription = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5em;

    max-width: 477px;
    margin: 0.75em auto 0 auto;

    color: ${props => props.theme.descriptionColor};

    @media screen and (max-width: 720px) {
        font-size: 14px;
    }
`;

export const AcessoriesFlex = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;

    margin: 32px 0 82px;

    @media screen and (max-width: 720px) {
        flex-direction: column;
        gap: 2em;
    }
`;

export const FlexCardImg = styled.img`
    height: 200px;

    @media screen and (max-width: 720px) {
        height: 100px;
    }
`;

export const FlexCardTitle = styled.h3`
    font-weight: 500;
    font-size: 20px;
    line-height: 1.5em;

    margin-top: 0.85em;

    color: ${props => props.theme.titleColor};

    @media screen and (max-width: 720px) {
        font-size: 14px;
    }
`;

export const FlexCardDescription = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5em;

    margin-top: 0.75em;
    max-width: 198px;

    color: ${props => props.theme.flexDescriptionColor};

    @media screen and (max-width: 720px) {
        font-size: 12px;
        margin: 0.75em auto 0 auto;
    }
`;