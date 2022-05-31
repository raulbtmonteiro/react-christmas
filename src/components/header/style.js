import styled from 'styled-components'

export const HeaderContainer = styled.header`
    background-color: ${props => props.theme.backgroundColor};
`;

export const Wrapper = styled.div`
    max-width: 1170px;
    margin: 0 auto;
    padding: 20px 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1170px) {
        padding: 0 24px;
    }
`;

export const DivLogo = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 720px) {
        img{
            width: 20px;
            height: 18.75px;
        }
    }
`;

export const LogoTitle = styled.h2`
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    width: 5.2em;

    margin-left: 0.5em;

    color: ${props => props.theme.titleColor};

    @media screen and (max-width: 720px) {
        font-size: 14px;
    }
`;

export const NavList = styled.nav`
    list-style-type: none;
    display: flex;
    align-items: center;

    @media screen and (max-width: 720px) {
        display: none;
    }
`;

export const ListItem = styled.li`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    margin-left: 3em;

    color: ${props => props.theme.titleColor};
`;

export const HamburgerMenu = styled.div`
    display: none;

    @media screen and (max-width: 720px) {
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 4.05px;

        div{
            width: 24px;
            height: 1.4px;

            background-color: #161212;
        }
    }
`;