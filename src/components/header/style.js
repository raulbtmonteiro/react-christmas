import styled from 'styled-components'
import { css } from 'styled-components';

export const Container = styled.header`
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
        padding: 20px 24px;
    }

    @media screen and (max-width: 720px) {
        padding: 0px 24px;
    }
`;

export const LogoContainer = styled.div`
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

        ${({visibility}) => visibility && css`
            display: flex;
            flex-direction: column;

            position: absolute;
            top: 36px;
            right: 24px;
            width: 8em;
            z-index: 4;

            background-color: white;
            border-radius: 15px;
        `}
    }
`;

export const ListItem = styled.a`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    margin-left: 3em;

    color: ${props => props.theme.titleColor};
    text-decoration: none;

    :hover{
        cursor: pointer;
        color: ${props => props.theme.descriptionColor};
    }

    @media screen and (max-width: 720px) {
        margin: 1em 0;
    }

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

export const Overlay = styled.div`
    display:none;

    @media screen and (max-width: 720px) {
        ${({visibility}) => visibility && css`
            display: block;

            position: fixed;
            height: 100vh;
            width: 100vw;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            z-index: 3;

            background-color: rgba(0,0,0, 0.5);
        `}
    }

`;