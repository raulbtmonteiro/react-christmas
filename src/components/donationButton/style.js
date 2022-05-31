import styled from 'styled-components'

export const Button = styled.button`
    background-color: ${props => props.theme.backgroundButtomColor};
    color: ${props => props.theme.buttomTextColor};

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

    img{
        margin-right: 0.85em;
    }
`;