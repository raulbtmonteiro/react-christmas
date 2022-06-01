import styled from 'styled-components'

export const Container= styled.section`
    background-color: ${props => props.theme.colors.backgroundColor};
`;

export const Wrapper = styled.div`
    max-width: 1170px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: 45% 55%;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1170px) {
        padding: 0 24px;
    }

    @media screen and (max-width: 720px) {
        grid-template-columns: 100%;
    }
`;

export const Img = styled.img`
    max-width: 400px;
    width: 100%;

    @media screen and (max-width: 720px) {
        display: none;
    }
`;

export const Info = styled.div`
    button{
        margin-bottom: 8.9em;
    }

    @media screen and (max-width: 720px) {
        text-align: center;
        margin: 0 auto;

        button{
            margin-bottom: 5.5em;
        }
    }
`;

export const Title = styled.h2`
    font-weight: 600;
    font-size: 48px;
    line-height: 1.08em;

    margin-top: 3.2em;

    color: ${props => props.theme.colors.titleColor};

    @media screen and (max-width: 720px) {
        font-size: 24px;
    }
`;

export const Description = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5em;

    margin: 1.5em 8.4em 2em 0;
    max-width: 457px;

    color: ${props => props.theme.colors.descriptionColor};

    @media screen and (max-width: 720px) {
        font-size: 14px;
        margin: 1.5em auto 2em auto;
    }
`;