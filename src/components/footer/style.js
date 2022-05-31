import styled from 'styled-components'

export const FooterWrapper = styled.footer`
    max-width: 1170px;
    margin: 40px auto;

    display: flex;
    justify-content: space-between;  
`;

export const MediaList = styled.ul`
    list-style-type: none;

    display: flex;
    justify-content: space-between;
    align-items: center;
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
`;