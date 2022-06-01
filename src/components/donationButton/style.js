import styled from 'styled-components'

export const Button = styled.button`
    background-color: ${props => props.theme.colors.backgroundButtomColor};
    color: ${props => props.theme.colors.buttomTextColor};

    border: none;
    border-radius: 8px;

    width: 208px;
    height: 48px;

    font-weight: 600;
    font-size: 16px;
    line-height: 1.5em;
    
    display: flex;
    align-items: center;
    justify-content: center;

    :hover{
        cursor: pointer;
        background-color: ${props => props.theme.colors.backgroundColorOpacity};
    }

    img{
        margin-right: 0.85em;
    }                   

    @media screen and (max-width: 720px) {
        width: 100%;
        font-size: 14px;
    }
`;