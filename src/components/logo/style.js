import styled from 'styled-components'

export const DivLogo = styled.div`
    display: flex;
`;

export const LogoTitle = styled.h2`
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    width: 5.2em;

    margin-left: 0.5em;

    color: ${props => props.theme.titleColor};
`;