import { light } from '../../themes/light'
import frame from '../../assets/images/Frame.png'
import { HeaderContainer , Wrapper, NavList , ListItem , DivLogo , LogoTitle , HamburgerMenu} from './style'

export default function Header(){
    
    const navItens = [ 'Início' , 'Acessórios' , 'Doação' , 'Contato' ];

    return(
        <HeaderContainer theme={light}>
            <Wrapper>
                <DivLogo>
                    <img src={frame} alt='' />
                    <LogoTitle theme={light}>Feliz Natal</LogoTitle>
                </DivLogo>            
                <NavList>
                    {navItens.map( (item) => (
                        <ListItem theme={light} key={item}>{item}</ListItem>
                    ))}
                </NavList>
                <HamburgerMenu>
                    <div />
                    <div />
                    <div />
                </HamburgerMenu>
            </Wrapper>
        </HeaderContainer>
    )
}