import frame from '../../assets/images/Frame.png'
import { DivLogo , LogoTitle } from './style'
import { light } from '../../themes/light'

export default function Logo(){
    return(
        <DivLogo>
            <img src={frame} />
            <LogoTitle theme={light}>Feliz Natal</LogoTitle>
        </DivLogo>
    )
}