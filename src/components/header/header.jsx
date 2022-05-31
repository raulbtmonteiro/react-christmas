import { light } from '../../themes/light'
import Logo from '../logo/logo'
import { HeaderContainer , Wrapper, NavList , ListItem } from './style'

export default function Header(){
    
    const navItens = [ 'Início' , 'Acessórios' , 'Doação' , 'Contato' ];

    return(
        <HeaderContainer theme={light}>
            <Wrapper>
                <Logo />            
                <NavList>
                    {navItens.map( (item) => (
                        <ListItem theme={light} key={item}>{item}</ListItem>
                    ))}
                </NavList>
            </Wrapper>
        </HeaderContainer>
    )
}