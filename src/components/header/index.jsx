import frame from '../../assets/images/Frame.png'
import { Container , Wrapper, NavList , ListItem , LogoContainer , LogoTitle , Overlay , HamburgerMenu} from './style'
import { useState } from 'react';

const navItens = [ 'Início' , 'Acessórios' , 'Doação' , 'Contato' ];

export default function Header({theme}){
    const [isVisible, setIsVisible] = useState(false)

    return(
        <Container theme={theme}>
            <Wrapper>
                <LogoContainer>
                    <img src={frame} alt='Logo do Papai Noel' />
                    <LogoTitle theme={theme}>Feliz Natal</LogoTitle>
                </LogoContainer>            
                <NavList visibility={isVisible} >
                    {navItens.map( (item) => (
                        <ListItem href='#' theme={theme} key={item}>{item}</ListItem>
                    ))}
                </NavList>
                <Overlay visibility={isVisible} onClick={() => setIsVisible(!isVisible)} />
                <HamburgerMenu onClick={() => setIsVisible(!isVisible)}>
                    <div />
                    <div />
                    <div />
                </HamburgerMenu>
            </Wrapper>
        </Container>
    )
}