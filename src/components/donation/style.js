import styled from 'styled-components'

export const DonationContainer= styled.section`
    background-color: ${props => props.theme.backgroundColor};
`;

export const DonationWrapper = styled.div`
    max-width: 1170px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1170px) {
        padding: 0 24px;
    }
`;

export const DonationImg = styled.img`
    @media screen and (max-width: 720px) {
        display: none;
    }
`;

export const DonationInfo = styled.div`
    button{
        margin-bottom: 8.9em;
    }

    @media screen and (max-width: 720px) {
        text-align: center;

        button{
            margin-bottom: 5.5em;
        }
    }
`;

export const DonationTitle = styled.h2`
    font-weight: 600;
    font-size: 48px;
    line-height: 1.08em;

    margin-top: 3.2em;

    color: ${props => props.theme.titleColor};

    @media screen and (max-width: 720px) {
        font-size: 24px;
    }
`;

export const DonationDescription = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5em;

    margin: 1.5em 8.4em 2em 0;
    max-width: 457px;

    color: ${props => props.theme.descriptionColor};

    @media screen and (max-width: 720px) {
        font-size: 14px;
        margin: 1.5em auto 2em auto;
    }
`;