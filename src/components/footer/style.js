import styled from 'styled-components'

export const FooterWrapper = styled.footer`
    max-width: 1170px;
    margin: 40px auto;

    display: flex;
    justify-content: space-between;  

    @media screen and (max-width: 1170px) {
        padding: 0 24px;
    }

    @media screen and (max-width: 720px) {
        margin: 15px auto;
    }

`;

export const DivLogo = styled.div`
    display: flex;

    @media screen and (max-width: 720px) {
        display: none;
    }
`;

export const LogoTitle = styled.h2`
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    width: 5.2em;

    margin-left: 0.5em;

    color: ${props => props.theme.titleColor};
`;

export const MediaList = styled.ul`
    list-style-type: none;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 720px) {
        width: 100%;
    }
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 43px;
    height: 40px;
    width: 40px;

    border-radius: 50%;
    background-color: ${props => props.theme.backgroundColorOpacity};

    @media screen and (max-width: 720px) {
        height: 30.43px;
        width: 30.43px;

        margin-left: 0;

        img{
            width: 18.26px;
        }
    }
`;