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
`;

export const NavList = styled.nav`
    list-style-type: none;
    display: flex;
    align-items: center;
`;

export const ListItem = styled.li`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    margin-left: 3em;

    color: ${props => props.theme.titleColor};
`;